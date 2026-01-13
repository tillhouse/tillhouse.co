import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    slug: "ghostery",
    title: "Ghostery",
    company: "Ghostery",
    description:
      "Led product strategy for privacy-first browser extension serving 10M+ users. Drove roadmap prioritization, user research, and cross-functional execution.",
    role: "VP Product",
    image: "/images/projects/Ghostery 8 - Browser Extension/Simple View.png",
    technologies: ["React", "TypeScript", "Chrome APIs", "Privacy Tech"],
    link: "https://ghostery.com",
    featured: true,
  },
  {
    slug: "ghostery-dawn",
    title: "Ghostery Dawn",
    company: "Ghostery",
    description:
      "Privacy-focused web browser built on Firefox. Led product vision, UX design, and launch strategy for a browser that blocks trackers by default.",
    role: "VP Product",
    image: "/images/projects/Ghostery Dawn/Ghostery Dawn.png",
    technologies: ["Firefox", "Browser Development", "Privacy Tech"],
    link: "https://ghostery.com",
    featured: true,
  },
  {
    slug: "pavilion",
    title: "Pavilion Digital",
    company: "Pavilion",
    description:
      "Fractional product leadership for B2B SaaS platform. Established product processes, led discovery, and shipped key features.",
    role: "Fractional VP Product",
    image: "/images/projects/Pavilion Digital/Home dashboard MVP Executive member.png",
    technologies: ["B2B SaaS", "Product Strategy", "User Research"],
    featured: true,
  },
  {
    slug: "ghostery-glow",
    title: "Ghostery Glow",
    company: "Ghostery",
    description:
      "Privacy-first search engine integrated with Ghostery Dawn. Delivers search results without tracking or profiling users.",
    role: "VP Product",
    image: "/images/projects/Ghostery Glow/Ghostery Dark Theme - Results Page.jpg",
    technologies: ["Search", "Privacy Tech", "Web Development"],
    featured: false,
  },
  {
    slug: "ghostery-insights",
    title: "Ghostery Insights",
    company: "Ghostery",
    description:
      "Enterprise analytics platform providing tracker intelligence and privacy insights for businesses and researchers.",
    role: "VP Product",
    image: "/images/projects/Ghostery Insights/Insights Mockup.png",
    technologies: ["Analytics", "Enterprise", "Data Visualization"],
    featured: false,
  },
  {
    slug: "ghostery-lite",
    title: "Ghostery Lite",
    company: "Ghostery",
    description:
      "Simplified privacy extension for Safari. Streamlined UX focused on ease-of-use while maintaining powerful tracker blocking.",
    role: "VP Product",
    image: "/images/projects/Ghostery Lite/Main UI.png",
    technologies: ["Safari", "iOS", "Privacy Tech"],
    featured: false,
  },
  {
    slug: "innermap",
    title: "Innermap.ai",
    company: "Innermap",
    description:
      "AI-native mental wellness platform leveraging LLMs for personalized journaling and reflection experiences.",
    role: "Product Advisor",
    image: "",
    technologies: ["AI/ML", "React Native", "LLMs", "Mental Health"],
    featured: false,
  },
  {
    slug: "moonfoot-labs",
    title: "Moonfoot Labs",
    company: "Moonfoot Labs",
    description:
      "AI-native product studio partnering with founders and early-stage teams to build validated, scalable products using LLM workflows and rapid prototyping.",
    role: "Co-Founder & Managing Partner",
    image: "/images/projects/Moonfoot Labs/Moonfoot Labs Hero Image.png",
    technologies: ["AI", "LLM Systems", "Rapid Prototyping", "Product Strategy"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

