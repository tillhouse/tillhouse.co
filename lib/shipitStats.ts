// Ship It! play-time and engagement counters, kept in Upstash Redis.
//
// The game (public/shipit, built from the ship-it repo) posts small events to
// /shipit/api/event: "start" on load, "beat" once a minute while the tab is
// visible, and "m" when the player reaches a milestone. Each event bumps a few
// counters here; /shipit/stats reads them back. No names, emails or IPs are
// stored: sessions and players are random IDs made in the browser.
//
// Connection: the Upstash integration in Vercel's Marketplace sets
// KV_REST_API_URL / KV_REST_API_TOKEN (older setups: UPSTASH_REDIS_REST_*).
// Without them, events are accepted and dropped, and the stats page says so.

const URL_ = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const storeConfigured = Boolean(URL_ && TOKEN);

/** Play-time marks: "sessions that played at least N minutes". */
export const MINUTE_MARKS = [1, 5, 15, 30, 60] as const;

/** Milestones the game may report, in rough order of progress, with labels. */
export const MILESTONES: { id: string; label: string }[] = [
  { id: "week_1", label: "Finished week 1" },
  { id: "firstShip", label: "Shipped a first project" },
  { id: "bank5k", label: "Banked $5k" },
  { id: "week_4", label: "Finished week 4" },
  { id: "firstHire", label: "Made a first hire" },
  { id: "garageDone", label: "Outgrew the garage" },
  { id: "studio", label: "Moved into the studio" },
  { id: "week_12", label: "Finished week 12" },
  { id: "team4", label: "Team of 4" },
  { id: "rep3", label: "3-star reputation" },
  { id: "firstProduct", label: "Launched an own product" },
  { id: "bank100k", label: "Banked $100k" },
  { id: "week_26", label: "Finished week 26" },
  { id: "empire", label: "Built an empire" },
  { id: "enterpriseShip", label: "Shipped an enterprise project" },
  { id: "productHit", label: "Had a product hit" },
  { id: "week_52", label: "Finished week 52" },
  { id: "bank1m", label: "Banked $1m" },
  { id: "agencyOfYear", label: "Agency of the Year" },
  { id: "ending_allAi", label: "Ending: all-AI agency" },
  { id: "ending_sold", label: "Ending: sold the agency" },
  { id: "ending_agencyOfYear", label: "Ending: Agency of the Year" },
  { id: "gameOver", label: "Went bust (game over)" },
];
const MILESTONE_IDS = new Set(MILESTONES.map((m) => m.id));

const K = {
  totals: "shipit:totals", // hash: sessions, resumed, minutes
  players: "shipit:players", // HyperLogLog of player IDs
  reached: "shipit:reached", // hash: minute mark -> sessions
  milestones: "shipit:milestones", // hash: milestone id -> count
  day: (d: string) => `shipit:day:${d}`, // hash: sessions, minutes
  dayPlayers: (d: string) => `shipit:players:${d}`, // HyperLogLog
  beatLock: (sid: string) => `shipit:s:${sid}:lb`,
  minutes: (sid: string) => `shipit:s:${sid}:min`,
};

const DAY_TTL = 60 * 60 * 24 * 400;
const SESSION_TTL = 60 * 60 * 24;

type Cmd = (string | number)[];

async function pipeline(cmds: Cmd[]): Promise<unknown[]> {
  const res = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const out = (await res.json()) as { result?: unknown; error?: string }[];
  return out.map((r) => {
    if (r.error) throw new Error(`Upstash: ${r.error}`);
    return r.result;
  });
}

const today = () => new Date().toISOString().slice(0, 10);
const ID = /^[A-Za-z0-9_-]{8,64}$/;

export type GameEvent =
  | { t: "start"; sid: string; pid: string; resumed?: boolean }
  | { t: "beat"; sid: string }
  | { t: "m"; sid: string; id: string };

/** Checks an untrusted request body. Returns null if it isn't a valid event. */
export function parseEvent(body: unknown): GameEvent | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (typeof b.sid !== "string" || !ID.test(b.sid)) return null;
  if (b.t === "start" && typeof b.pid === "string" && ID.test(b.pid)) {
    return { t: "start", sid: b.sid, pid: b.pid, resumed: b.resumed === true };
  }
  if (b.t === "beat") return { t: "beat", sid: b.sid };
  if (b.t === "m" && typeof b.id === "string" && MILESTONE_IDS.has(b.id)) {
    return { t: "m", sid: b.sid, id: b.id };
  }
  return null;
}

export async function record(e: GameEvent): Promise<void> {
  if (!storeConfigured) return;
  const d = today();

  if (e.t === "start") {
    const cmds: Cmd[] = [
      ["HINCRBY", K.totals, "sessions", 1],
      ["PFADD", K.players, e.pid],
      ["HINCRBY", K.day(d), "sessions", 1],
      ["EXPIRE", K.day(d), DAY_TTL],
      ["PFADD", K.dayPlayers(d), e.pid],
      ["EXPIRE", K.dayPlayers(d), DAY_TTL],
    ];
    if (e.resumed) cmds.push(["HINCRBY", K.totals, "resumed", 1]);
    await pipeline(cmds);
    return;
  }

  if (e.t === "beat") {
    // At most one counted minute per 50 seconds per session, whatever the client sends.
    const [lock] = await pipeline([["SET", K.beatLock(e.sid), 1, "NX", "EX", 50]]);
    if (lock !== "OK") return;
    const [mins] = (await pipeline([
      ["INCR", K.minutes(e.sid)],
      ["EXPIRE", K.minutes(e.sid), SESSION_TTL],
      ["HINCRBY", K.totals, "minutes", 1],
      ["HINCRBY", K.day(d), "minutes", 1],
      ["EXPIRE", K.day(d), DAY_TTL],
    ])) as number[];
    if ((MINUTE_MARKS as readonly number[]).includes(mins)) {
      await pipeline([["HINCRBY", K.reached, String(mins), 1]]);
    }
    return;
  }

  await pipeline([["HINCRBY", K.milestones, e.id, 1]]);
}

function hash(raw: unknown): Record<string, number> {
  const out: Record<string, number> = {};
  if (Array.isArray(raw)) {
    for (let i = 0; i + 1 < raw.length; i += 2) out[String(raw[i])] = Number(raw[i + 1]) || 0;
  }
  return out;
}

export interface Stats {
  sessions: number;
  resumed: number;
  minutes: number;
  players: number;
  reached: { mark: number; sessions: number }[];
  milestones: { id: string; label: string; count: number }[];
  days: { date: string; sessions: number; players: number; minutes: number }[];
}

export async function readStats(dayCount = 14): Promise<Stats> {
  const dates = Array.from({ length: dayCount }, (_, i) =>
    new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
  );
  const out = await pipeline([
    ["HGETALL", K.totals],
    ["PFCOUNT", K.players],
    ["HGETALL", K.reached],
    ["HGETALL", K.milestones],
    ...dates.flatMap((d): Cmd[] => [["HGETALL", K.day(d)], ["PFCOUNT", K.dayPlayers(d)]]),
  ]);
  const totals = hash(out[0]);
  const reached = hash(out[2]);
  const milestones = hash(out[3]);
  return {
    sessions: totals.sessions ?? 0,
    resumed: totals.resumed ?? 0,
    minutes: totals.minutes ?? 0,
    players: Number(out[1]) || 0,
    reached: MINUTE_MARKS.map((m) => ({ mark: m, sessions: reached[String(m)] ?? 0 })),
    milestones: MILESTONES.map((m) => ({ ...m, count: milestones[m.id] ?? 0 })),
    days: dates.map((date, i) => {
      const h = hash(out[4 + i * 2]);
      return { date, sessions: h.sessions ?? 0, minutes: h.minutes ?? 0, players: Number(out[5 + i * 2]) || 0 };
    }),
  };
}
