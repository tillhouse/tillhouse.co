export interface Service {
  title: string;
  iconName: "Users" | "MessageSquare" | "Briefcase";
  whoFor: string;
  whenItMakesSense: string;
  engagement: string;
  included: string[];
}

export const services: Service[] = [
  {
    title: "Full-Time Roles",
    iconName: "Briefcase",
    whoFor: "Companies looking to make a long-term investment in product leadership",
    whenItMakesSense:
      "I'm open to full-time roles where product is central to the company's strategy and success.",
    engagement: "Head of Product, VP Product, or CPO",
    included: [
      "Full ownership of product vision and strategy",
      "Team building and management",
      "Cross-functional leadership (eng, design, growth)",
      "Board and investor communication",
      "Culture and process development",
    ],
  },
  {
    title: "Fractional or Interim Product Leadership",
    iconName: "Users",
    whoFor: "Startups that need senior product leadership but aren't ready for a full-time executive hire",
    whenItMakesSense:
      "I embed directly with your team, take ownership of product direction and execution, and help establish durable product practices.",
    engagement: "Typical engagements range from 10–20 hours per week",
    included: [
      "Product strategy and roadmap ownership",
      "Team leadership and hiring",
      "Stakeholder management",
      "Process implementation",
      "Hands-on execution when needed",
    ],
  },
  {
    title: "Advisory & Coaching",
    iconName: "MessageSquare",
    whoFor: "Founders or product leaders who want a strategic sounding board",
    whenItMakesSense:
      "This work is focused on decision-making, prioritization, AI adoption, and navigating complexity — not day-to-day execution.",
    engagement: "Monthly retainer or project-based",
    included: [
      "1:1 coaching sessions",
      "Strategic input on key decisions",
      "Async support via Slack/email",
      "Document and roadmap review",
      "AI adoption guidance",
    ],
  },
];
