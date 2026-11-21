// AI Lab: how Jeremy builds. Tools, workflow, and experiments.
// Shipped products live on /work as case studies; this page links to them
// rather than duplicating them.

export interface AILabProject {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  status: "Live" | "Prototype" | "Experiment";
  /** One line on what the experiment taught. Rendered only when present. */
  lesson?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const aiLabProjects: AILabProject[] = [
  {
    slug: "icarus-lens",
    title: "Icarus Lens",
    description:
      "Prosumer AI product-intelligence platform for competitive analysis and market research.",
    tools: ["Cursor", "Claude", "TypeScript"],
    status: "Experiment",
    image: "/images/projects/Icarus Lens/project_02.png",
  },
  {
    slug: "swim-genie",
    title: "SwimGenie",
    description:
      "Swim meet simulator that helps swimmers and coaches visualize race scenarios and predict performance.",
    tools: ["Lovable", "React", "AI"],
    status: "Live",
    demoUrl: "https://swimgenie.lovable.app",
    image: "/images/projects/SwimGenie/SwimGenie Hero Page.png",
  },
  {
    slug: "swim-guru",
    title: "SwimGuru",
    description:
      "AI-powered swim workout writer that generates personalized training sets based on goals and skill level.",
    tools: ["Lovable", "React", "AI"],
    status: "Live",
    demoUrl: "https://swimguru.lovable.app",
    image: "/images/projects/SwimGuru/SwimGuru Hero Page.png",
  },
  {
    slug: "2025-wrapped",
    title: "2025 Wrapped",
    description:
      "A visual recap of 2025 (highlights, milestones, and the work behind the scenes), captured as a Gamma summary.",
    tools: ["Gamma", "Cursor"],
    status: "Live",
    demoUrl: "/wrapped",
    image: "/images/projects/2025 Wrapped/2025 Wrapped.png",
  },
];

// The idea-to-production loop. `icon` is a lucide-react icon name.
export interface WorkflowStep {
  title: string;
  description: string;
  tools: string[];
  icon: "Compass" | "FlaskConical" | "Hammer" | "MessageSquareText";
}

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Frame the job",
    description:
      "Jobs-to-be-done discovery before any code: who is this for, and what progress are they trying to make?",
    tools: ["JTBD interviews", "Claude"],
    icon: "Compass",
  },
  {
    title: "Prototype to learn",
    description:
      "A throwaway version in hours, not weeks, put in front of real users to test the riskiest assumption.",
    tools: ["Lovable", "Claude Code"],
    icon: "FlaskConical",
  },
  {
    title: "Build for real",
    description:
      "Production code I write and ship myself with AI coding agents, the same way I build the apps Analog's pilot customers use.",
    tools: ["Claude Code", "Cursor", "Codex"],
    icon: "Hammer",
  },
  {
    title: "Close the loop",
    description:
      "Short in-app questions tied to hypotheses. The coding agent reads the answers and proposes the next change.",
    tools: ["Verdancy"],
    icon: "MessageSquareText",
  },
];

// Layers of the stack, top (closest to users) to bottom.
export interface StackLayer {
  label: string;
  role: string;
  tools: string[];
}

export const stackLayers: StackLayer[] = [
  {
    label: "Learn",
    role: "Hear from real users and measure what they do",
    tools: ["Verdancy", "Vercel Analytics"],
  },
  {
    label: "Ship",
    role: "Frameworks, data, and hosting for production apps",
    tools: ["Next.js", "Supabase", "Vercel"],
  },
  {
    label: "Build",
    role: "AI coding agents that write production code with me",
    tools: ["Claude Code", "Cursor", "Codex"],
  },
  {
    label: "Prototype",
    role: "Fast, disposable versions to test an idea",
    tools: ["Lovable", "Gamma"],
  },
];

// Commit history of this site (tillhouse.co), by month, as of Nov 2026.
// cursor = commits made in Cursor; claude = commits co-authored by Claude Code.
export const siteCommitHistory: { month: string; cursor: number; claude: number }[] = [
  { month: "Jan", cursor: 13, claude: 0 },
  { month: "Feb", cursor: 0, claude: 0 },
  { month: "Mar", cursor: 0, claude: 0 },
  { month: "Apr", cursor: 0, claude: 0 },
  { month: "May", cursor: 0, claude: 0 },
  { month: "Jun", cursor: 0, claude: 2 },
  { month: "Jul", cursor: 0, claude: 0 },
  { month: "Aug", cursor: 0, claude: 0 },
  { month: "Sep", cursor: 0, claude: 0 },
  { month: "Oct", cursor: 0, claude: 5 },
  { month: "Nov", cursor: 0, claude: 4 },
];

// A real loop on this site: Verdancy question -> change -> follow-up question.
export const pricingLoop: { date: string; kind: "ask" | "ship"; text: string }[] = [
  { date: "Oct 10", kind: "ask", text: "Asked Services visitors what pricing info they needed" },
  { date: "Oct 10", kind: "ship", text: "Published pricing on every service card" },
  { date: "Oct 12", kind: "ask", text: "Asked whether the published pricing helped" },
  { date: "Oct 12", kind: "ship", text: "Showed starting prices on collapsed cards" },
];

// Shipped products, linked to their case studies on /work.
export const inProduction: { slug: string; title: string; blurb: string }[] = [
  {
    slug: "analog",
    title: "Analog",
    blurb: "Full-stack apps paying pilot customers use, built with Claude Code.",
  },
  {
    slug: "verdancy",
    title: "Verdancy.ai",
    blurb: "The feedback agent behind step four, built at Moonfoot Labs.",
  },
  {
    slug: "authmonster",
    title: "AuthMonster",
    blurb: "A live consumer 2FA app, built and launched AI-natively.",
  },
];
