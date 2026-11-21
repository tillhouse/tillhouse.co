import { Github } from "lucide-react";
import activity from "@/data/githubActivity.json";

// Snapshot written by `npm run github-stats`; counts only, no repo details.
type Activity = {
  generatedAt: string;
  from: string;
  to: string;
  profileUrl: string;
  totals: { commits: number; ai: number };
  months: { month: string; commits: number; ai: number }[];
  // day -> [all commits, AI-assisted commits]
  days: Record<string, number[]>;
};
const data = activity as Activity;

const DAY_MS = 86400000;
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const levelClass = [
  "bg-gray-100",
  "bg-primary-200",
  "bg-primary-400",
  "bg-primary-600",
  "bg-accent",
];

function level(n: number) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (n <= 6) return 2;
  if (n <= 15) return 3;
  return 4;
}

function formatDay(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${MONTH_NAMES[d.getUTCMonth()]} ${d.getUTCDate()}`;
}

function buildWeeks() {
  // Start on the Sunday on or before `from`, so each column is one week.
  const start = new Date(`${data.from}T00:00:00Z`);
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const end = new Date(`${data.to}T00:00:00Z`);
  const weeks: { iso: string; inRange: boolean }[][] = [];
  for (let t = start.getTime(); t <= end.getTime(); t += 7 * DAY_MS) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const iso = new Date(t + i * DAY_MS).toISOString().slice(0, 10);
      week.push({ iso, inRange: iso >= data.from && iso <= data.to });
    }
    weeks.push(week);
  }
  return weeks;
}

export function GitHubStats() {
  const { commits, ai } = data.totals;
  const aiShare = commits ? Math.round((ai / commits) * 100) : 0;
  const busiest = data.months.reduce((a, b) => (b.commits > a.commits ? b : a), data.months[0]);
  const activeDays = Object.keys(data.days).length;
  const [y, m] = busiest.month.split("-");

  const stats = [
    { value: commits.toLocaleString("en-US"), label: "commits in the last 12 months" },
    { value: `${aiShare}%`, label: "co-authored with Claude Code (at least)" },
    { value: activeDays.toLocaleString("en-US"), label: "days with at least one commit" },
    { value: busiest.commits.toLocaleString("en-US"), label: `commits in ${MONTH_NAMES[Number(m) - 1]} ${y}, the busiest month` },
  ];

  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white border border-gray-200 rounded-lg p-5">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block text-3xl font-bold text-accent">{s.value}</span>
            <span className="mt-1 block text-sm text-gray-600">{s.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ContributionHeatmap() {
  const weeks = buildWeeks();
  // Month label above the first week that starts in that month, skipped
  // when it would crowd the previous label or run off the right edge.
  let lastLabel = -10;
  const monthLabels = weeks.map((week, i) => {
    const month = Number(week[0].iso.slice(5, 7)) - 1;
    const prev = i > 0 ? Number(weeks[i - 1][0].iso.slice(5, 7)) - 1 : -1;
    if (month === prev || i - lastLabel < 4 || i > weeks.length - 3) return "";
    lastLabel = i;
    return MONTH_NAMES[month];
  });

  return (
    <figure className="bg-white border border-gray-200 rounded-lg p-6">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-semibold text-gray-900">Commits per day</span>
        <span className="text-xs text-gray-500">
          {formatDay(data.from)}, {data.from.slice(0, 4)} to {formatDay(data.to)}, {data.to.slice(0, 4)}
        </span>
      </figcaption>

      <div
        role="img"
        aria-label={`Heatmap of ${data.totals.commits} commits per day over the last 12 months, busiest from June onward.`}
        className="mt-5"
      >
        <div
          aria-hidden="true"
          className="grid gap-[2px] sm:gap-[3px] text-[10px] text-gray-400 mb-1"
          style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}
        >
          {monthLabels.map((label, i) => (
            <span key={i} className="whitespace-nowrap overflow-visible">
              {label}
            </span>
          ))}
        </div>
        <div
          className="grid grid-flow-col grid-rows-7 gap-[2px] sm:gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}
        >
          {weeks.flat().map(({ iso, inRange }) => {
            const [n, nAi] = data.days[iso] ?? [0, 0];
            return (
              <span
                key={iso}
                title={inRange ? `${formatDay(iso)}: ${n} commit${n === 1 ? "" : "s"}${nAi ? `, ${nAi} with Claude Code` : ""}` : undefined}
                className={`aspect-square rounded-[2px] ${inRange ? levelClass[level(n)] : "bg-transparent"}`}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors"
        >
          <Github size={16} className="mr-1" />
          github.com/tillhouse
        </a>
        <span aria-hidden="true" className="flex items-center gap-1 text-xs text-gray-500">
          Less
          {levelClass.map((c) => (
            <span key={c} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
          ))}
          More
        </span>
      </div>
    </figure>
  );
}

export function AiShareChart() {
  const months = data.months;
  const max = Math.max(...months.map((m) => m.commits), 1);

  return (
    <figure className="bg-white border border-gray-200 rounded-lg p-6">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-semibold text-gray-900">Commits per month</span>
        <span className="flex gap-4 text-xs text-gray-600">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
            With Claude Code
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-primary-200" />
            Other
          </span>
        </span>
      </figcaption>

      <div
        role="img"
        aria-label={`Bar chart of commits per month. ${months
          .map((m) => `${MONTH_NAMES[Number(m.month.slice(5)) - 1]}: ${m.commits} commits, ${m.ai} with Claude Code`)
          .join("; ")}.`}
        className="mt-6 flex h-48 items-end gap-1.5 sm:gap-2"
      >
        {months.map((m) => (
          <div key={m.month} className="flex flex-1 flex-col items-center justify-end h-full">
            <span className="mb-1 text-[10px] sm:text-xs font-medium text-gray-700">
              {m.commits}
            </span>
            <div
              className="w-full max-w-[2.25rem] flex flex-col justify-end rounded-t overflow-hidden"
              style={{ height: `${(m.commits / max) * 100}%` }}
            >
              {m.ai > 0 && <div className="bg-accent" style={{ flexGrow: m.ai }} />}
              {m.commits - m.ai > 0 && (
                <div className="bg-primary-200" style={{ flexGrow: m.commits - m.ai }} />
              )}
            </div>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="mt-2 flex gap-1.5 sm:gap-2 border-t border-gray-200 pt-2">
        {months.map((m) => (
          <span key={m.month} className="flex-1 text-center text-[10px] sm:text-xs text-gray-400">
            {MONTH_NAMES[Number(m.month.slice(5)) - 1]}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">
        Counts include private work repos; only totals are shown. &ldquo;With
        Claude Code&rdquo; counts commits Claude co-authored. Cursor and Codex
        commits aren&rsquo;t tagged, so the real AI share is higher. Updated{" "}
        {formatDay(data.generatedAt)}, {data.generatedAt.slice(0, 4)}.
      </p>
    </figure>
  );
}
