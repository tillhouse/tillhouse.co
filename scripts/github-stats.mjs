#!/usr/bin/env node
// Snapshot of Jeremy's GitHub commit activity for the AI Lab page.
//
// Run locally with `npm run github-stats` (needs the GitHub CLI signed in as
// tillhouse). It uses commit search, which includes private repos you can
// access, and writes ONLY aggregate counts (per day and per month) to
// data/githubActivity.json. No repo names, SHAs, or messages are saved.
//
// "AI-assisted" = commits whose message carries a "Co-Authored-By: Claude"
// trailer. Cursor and Codex commits aren't tagged, so this is a lower bound.

import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const AUTHOR = "tillhouse";
const AI_TERM = '"Co-Authored-By: Claude"';
const PAUSE_MS = 2500; // search API allows 30 requests/minute
const OUT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "githubActivity.json"
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isoDay = (d) => d.toISOString().slice(0, 10);

async function search(q, page) {
  await sleep(PAUSE_MS);
  const out = execFileSync(
    "gh",
    ["api", "-X", "GET", "search/commits", "-f", `q=${q}`, "-f", "per_page=100", "-f", `page=${page}`],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
  );
  return JSON.parse(out);
}

// Collect sha -> committer day for a date range, splitting ranges that
// exceed the search API's 1,000-result cap.
async function collect(extra, from, to, into) {
  const q = `author:${AUTHOR} committer-date:${isoDay(from)}..${isoDay(to)} ${extra}`.trim();
  const first = await search(q, 1);
  if (first.total_count > 1000 && to > from) {
    const mid = new Date((from.getTime() + to.getTime()) / 2);
    const next = new Date(mid.getTime() + 86400000);
    await collect(extra, from, mid, into);
    await collect(extra, next, to, into);
    return;
  }
  let items = first.items;
  for (let page = 1; ; page++) {
    if (page > 1) items = (await search(q, page)).items;
    for (const it of items) into.set(it.sha, it.commit.committer.date.slice(0, 10));
    if (items.length < 100 || page * 100 >= first.total_count) break;
  }
}

async function main() {
  const to = new Date();
  const from = new Date(to);
  from.setUTCDate(from.getUTCDate() - 364);

  const all = new Map();
  const ai = new Map();
  // Month-sized chunks keep each query well under the 1,000-result cap.
  for (let start = new Date(from); start <= to; ) {
    const end = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 0));
    const chunkEnd = end < to ? end : to;
    process.stdout.write(`${isoDay(start)}..${isoDay(chunkEnd)} `);
    await collect("", start, chunkEnd, all);
    await collect(AI_TERM, start, chunkEnd, ai);
    console.log(`all=${all.size} ai=${ai.size}`);
    start = new Date(chunkEnd.getTime() + 86400000);
  }

  const days = {};
  const months = {};
  for (const [sha, day] of all) {
    const isAi = ai.has(sha) ? 1 : 0;
    days[day] ??= [0, 0];
    days[day][0]++;
    days[day][1] += isAi;
    const m = day.slice(0, 7);
    months[m] ??= { month: m, commits: 0, ai: 0 };
    months[m].commits++;
    months[m].ai += isAi;
  }

  const monthList = Object.values(months).sort((a, b) => a.month.localeCompare(b.month));
  const totals = monthList.reduce(
    (t, m) => ({ commits: t.commits + m.commits, ai: t.ai + m.ai }),
    { commits: 0, ai: 0 }
  );

  const data = {
    generatedAt: isoDay(to),
    from: isoDay(from),
    to: isoDay(to),
    profileUrl: `https://github.com/${AUTHOR}`,
    totals,
    months: monthList,
    // day -> [all commits, AI-assisted commits]; days with no commits omitted
    days: Object.fromEntries(Object.entries(days).sort()),
  };
  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
  console.log(`Wrote ${OUT}: ${totals.commits} commits, ${totals.ai} AI-assisted`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
