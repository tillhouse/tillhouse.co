import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work | Jeremy Tillman",
  description:
    "Portfolio of products I've built and shipped as a product executive. From privacy tech to AI-native applications.",
};

export default function WorkPage() {
  return (
    <Section className="pt-32">
      <SectionHeader
        title="Work"
        subtitle="This is a curated selection of products and platforms I've helped build, launch, and scale. Rather than abstract case studies, the focus here is on real products, real decisions, and real outcomes."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

