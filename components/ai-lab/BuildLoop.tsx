import {
  ArrowRight,
  Compass,
  FlaskConical,
  Hammer,
  MessageSquareText,
  RotateCcw,
} from "lucide-react";
import { workflowSteps, WorkflowStep } from "@/data/aiLab";

const icons: Record<WorkflowStep["icon"], typeof Compass> = {
  Compass,
  FlaskConical,
  Hammer,
  MessageSquareText,
};

export function BuildLoop() {
  return (
    <div>
      <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {workflowSteps.map((step, i) => {
          const Icon = icons[step.icon];
          const isLast = i === workflowSteps.length - 1;
          return (
            <li key={step.title} className="relative">
              <div className="h-full bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-gray-400">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-primary-50 text-accent text-xs font-medium rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {!isLast && (
                <ArrowRight
                  aria-hidden="true"
                  size={20}
                  className="hidden md:block absolute top-1/2 -right-[1.6rem] -translate-y-1/2 text-primary-300"
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Return path: step 4 feeds back into step 1 */}
      <div
        aria-hidden="true"
        className="hidden md:block relative mx-[12.5%] h-10 border-2 border-t-0 border-dashed border-primary-300 rounded-b-2xl"
      >
        <span className="absolute -top-1 -left-[7px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-primary-300 bg-gray-50" />
      </div>
      <p className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
        <RotateCcw size={16} className="text-primary-400" aria-hidden="true" />
        What users say in step 4 frames the next job in step 1.
      </p>
    </div>
  );
}
