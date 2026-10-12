export interface Service {
  title: string;
  iconName: "Users" | "MessageSquare" | "Briefcase";
  whoFor: string;
  whenItMakesSense: string;
  engagement: string;
  pricing?: string;
  priceSummary?: string;
  pricingSource?: { label: string; url: string };
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
    pricing:
      "Market-based executive compensation, benchmarked at approximately $350K annual base salary, plus bonus, equity, and benefits.",
    pricingSource: {
      label: "Source: Salary.com, 2026 Chief Product Officer compensation (New York)",
      url: "https://www.salary.com/research/salary/alternate/chief-product-officer-salary/ny",
    },
    priceSummary: "~$350K base + bonus & equity",
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
    engagement: "Starting at 40 hours per month",
    pricing:
      "Monthly retainers from $15,000. Larger engagements are scoped and priced individually.",
    priceSummary: "From $15K / month",
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
    engagement: "5 hours per month",
    pricing:
      "Monthly retainers from $2,500. Larger or custom advisory engagements available.",
    priceSummary: "From $2.5K / month",
    included: [
      "1:1 coaching sessions",
      "Strategic input on key decisions",
      "Async support via Slack/email",
      "Document and roadmap review",
      "AI adoption guidance",
    ],
  },
];
