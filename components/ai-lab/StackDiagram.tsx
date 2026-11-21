import { stackLayers } from "@/data/aiLab";

// Darkest layer sits closest to users; shades lighten toward prototyping.
const layerStyles = [
  "bg-accent text-white border-accent",
  "bg-primary-700 text-white border-primary-700",
  "bg-primary-100 text-accent border-primary-200",
  "bg-primary-50 text-accent border-primary-100",
];

const chipStyles = [
  "bg-white/15 text-white",
  "bg-white/15 text-white",
  "bg-white text-accent",
  "bg-white text-accent",
];

export function StackDiagram() {
  return (
    <div className="flex gap-4">
      {/* Axis */}
      <div
        aria-hidden="true"
        className="hidden sm:flex flex-col items-center text-xs font-medium text-gray-400"
      >
        <span className="whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
          Closer to users
        </span>
        <span className="my-2 w-px flex-1 bg-gradient-to-b from-accent to-primary-100" />
        <span className="whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
          Closer to the idea
        </span>
      </div>

      <ul className="flex-1 space-y-3">
        {stackLayers.map((layer, i) => (
          <li
            key={layer.label}
            className={`rounded-lg border px-5 py-4 md:flex md:items-center md:gap-6 ${layerStyles[i]}`}
          >
            <div className="md:w-56 shrink-0">
              <p className="text-lg font-semibold">{layer.label}</p>
              <p className="text-sm opacity-80">{layer.role}</p>
            </div>
            <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
              {layer.tools.map((tool) => (
                <span
                  key={tool}
                  className={`px-3 py-1 text-sm font-medium rounded-full ${chipStyles[i]}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
