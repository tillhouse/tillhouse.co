export interface AILabProject {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  status: "Live" | "Prototype" | "Experiment";
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const aiLabProjects: AILabProject[] = [
  {
    slug: "auth-monster",
    title: "AuthMonster",
    description:
      "Brand-forward B2C 2FA security app making two-factor authentication simple and delightful. Currently in alpha.",
    tools: ["React Native", "Claude", "Lovable"],
    status: "Prototype",
    image: "/images/projects/AuthMonster/Google Play Store 1.png",
  },
  {
    slug: "icarus-lens",
    title: "Icarus Lens",
    description:
      "Prosumer AI product-intelligence platform for competitive analysis and market research.",
    tools: ["Cursor", "Claude", "TypeScript"],
    status: "Experiment",
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
];
