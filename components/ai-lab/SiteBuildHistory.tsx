import { MessageCircleQuestion, Rocket } from "lucide-react";
import { pricingLoop, siteCommitHistory } from "@/data/aiLab";

const cursorTotal = siteCommitHistory.reduce((n, m) => n + m.cursor, 0);
const claudeTotal = siteCommitHistory.reduce((n, m) => n + m.claude, 0);
const maxCommits = Math.max(...siteCommitHistory.map((m) => m.cursor + m.claude));

export function CommitChart() {
  return (
    <figure className="bg-white border border-gray-200 rounded-lg p-6">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-semibold text-gray-900">
          Commits to this site, 2026
        </span>
        <span className="flex gap-4 text-xs text-gray-600">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-primary-300" />
            Cursor ({cursorTotal})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
            Claude Code ({claudeTotal})
          </span>
        </span>
      </figcaption>

      <div
        role="img"
        aria-label={`Bar chart of commits by month. January: ${cursorTotal} commits in Cursor, building the first version. June to November: ${claudeTotal} commits with Claude Code.`}
        className="mt-6 flex h-44 items-end gap-1.5 sm:gap-2"
      >
        {siteCommitHistory.map((m) => {
          const total = m.cursor + m.claude;
          return (
            <div
              key={m.month}
              className="flex flex-1 flex-col items-center justify-end h-full"
            >
              {total > 0 && (
                <span className="mb-1 text-xs font-medium text-gray-700">
                  {total}
                </span>
              )}
              <div
                className="w-full max-w-[2.25rem] flex flex-col justify-end rounded-t overflow-hidden"
                style={{ height: `${(total / maxCommits) * 100}%` }}
              >
                {m.claude > 0 && (
                  <div className="bg-accent" style={{ flexGrow: m.claude }} />
                )}
                {m.cursor > 0 && (
                  <div className="bg-primary-300" style={{ flexGrow: m.cursor }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div aria-hidden="true" className="mt-2 flex gap-1.5 sm:gap-2 border-t border-gray-200 pt-2">
        {siteCommitHistory.map((m) => (
          <span key={m.month} className="flex-1 text-center text-[10px] sm:text-xs text-gray-400">
            {m.month}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        A one-week sprint in Cursor shipped the first version. Since June, every
        change has been made with Claude Code.
      </p>
    </figure>
  );
}

export function PricingLoop() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <p className="font-semibold text-gray-900">One loop on this site</p>
      <p className="mt-1 text-sm text-gray-600">
        The Services page, October 2026: ask, ship, ask again.
      </p>
      <ol className="mt-6 relative space-y-5 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
        {pricingLoop.map((item, i) => {
          const isAsk = item.kind === "ask";
          const Icon = isAsk ? MessageCircleQuestion : Rocket;
          return (
            <li key={i} className="relative flex gap-4">
              <span
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  isAsk
                    ? "bg-primary-50 text-accent ring-1 ring-primary-200"
                    : "bg-accent text-white"
                }`}
              >
                <Icon size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {item.date} · {isAsk ? "Asked with Verdancy" : "Shipped with Claude Code"}
                </p>
                <p className="text-sm text-gray-800">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
