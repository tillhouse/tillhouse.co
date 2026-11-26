import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { readStats, storeConfigured, type Stats } from "@/lib/shipitStats";

// Private Ship It! engagement stats. middleware.ts only serves this page to a
// browser that opened /shipit/stats?key=<SHIPIT_STATS_KEY> once.

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Ship It! stats",
  robots: { index: false, follow: false },
};

const pct = (n: number, of: number) => (of > 0 ? `${Math.round((n / of) * 100)}%` : "–");

function Tile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 text-3xl font-bold text-gray-900 tabular-nums">{value}</div>
      {note && <div className="mt-1 text-xs text-gray-500">{note}</div>}
    </div>
  );
}

function Bar({ label, count, of }: { label: string; count: number; of: number }) {
  const width = of > 0 ? Math.max(count > 0 ? 1 : 0, (count / of) * 100) : 0;
  return (
    <div className="grid grid-cols-[minmax(0,14rem)_1fr_5.5rem] items-center gap-3 py-1.5 text-sm">
      <div className="truncate text-gray-700">{label}</div>
      <div className="h-2.5 rounded bg-gray-100">
        <div className="h-2.5 rounded bg-accent" style={{ width: `${width}%` }} />
      </div>
      <div className="text-right tabular-nums text-gray-900">
        {count} <span className="text-gray-500">({pct(count, of)})</span>
      </div>
    </div>
  );
}

function Body({ s }: { s: Stats }) {
  const avg = s.sessions > 0 ? (s.minutes / s.sessions).toFixed(1) : "0";
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Tile label="Players" value={String(s.players)} note="Unique browsers (approximate)" />
        <Tile label="Sessions" value={String(s.sessions)} note={`${s.resumed} picked up a saved game`} />
        <Tile label="Minutes played" value={String(s.minutes)} note="Counted while the tab is visible" />
        <Tile label="Avg per session" value={`${avg} min`} />
      </div>

      <h2 className="mt-12 text-xl font-bold text-gray-900">How long sessions lasted</h2>
      <p className="mt-1 text-sm text-gray-500">Sessions that reached each mark, as a share of all sessions.</p>
      <div className="mt-4">
        {s.reached.map((r) => (
          <Bar key={r.mark} label={`${r.mark}+ min`} count={r.sessions} of={s.sessions} />
        ))}
      </div>

      <h2 className="mt-12 text-xl font-bold text-gray-900">How far games got</h2>
      <p className="mt-1 text-sm text-gray-500">
        Games that reached each milestone, as a share of players. A player who restarts can count twice.
      </p>
      <div className="mt-4">
        {s.milestones.map((m) => (
          <Bar key={m.id} label={m.label} count={m.count} of={s.players} />
        ))}
      </div>

      <h2 className="mt-12 text-xl font-bold text-gray-900">Last 14 days (UTC)</h2>
      <table className="mt-4 w-full text-sm tabular-nums">
        <thead>
          <tr className="border-b border-gray-200 text-left text-gray-500">
            <th className="py-2 font-medium">Day</th>
            <th className="py-2 text-right font-medium">Players</th>
            <th className="py-2 text-right font-medium">Sessions</th>
            <th className="py-2 text-right font-medium">Minutes</th>
          </tr>
        </thead>
        <tbody>
          {s.days.map((d) => (
            <tr key={d.date} className="border-b border-gray-100">
              <td className="py-2 text-gray-700">{d.date}</td>
              <td className="py-2 text-right">{d.players}</td>
              <td className="py-2 text-right">{d.sessions}</td>
              <td className="py-2 text-right">{d.minutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default async function ShipItStats() {
  let stats: Stats | null = null;
  let error: string | null = null;
  if (storeConfigured) {
    try {
      stats = await readStats();
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
    }
  }

  return (
    <Section className="pt-32">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900">Ship It! stats</h1>
        <p className="mt-2 text-gray-600">
          Play time and progress from the beta at /shipit. Page views and visitors (including the password page) are in
          Vercel Analytics.
        </p>
        <div className="mt-10">
          {!storeConfigured && (
            <p className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
              No Upstash Redis store is connected yet, so nothing is being recorded. Add one from the Vercel project&apos;s
              Storage tab, then redeploy.
            </p>
          )}
          {error && (
            <p className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">Couldn&apos;t read the stats: {error}</p>
          )}
          {stats && <Body s={stats} />}
        </div>
      </div>
    </Section>
  );
}
