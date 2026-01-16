import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/Section";
import { aiLabProjects } from "@/data/aiLab";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Lab | Jeremy Tillman",
  description:
    "AI Lab: an open workbench of AI-native products, prototypes, and experiments built with modern AI workflows.",
};

const statusColors = {
  Live: "bg-green-100 text-green-800",
  Prototype: "bg-yellow-100 text-yellow-800",
  Experiment: "bg-purple-100 text-purple-800",
};

export default function AILabPage() {
  return (
    <Section className="pt-32">
      <SectionHeader
        title="AI Lab"
        subtitle="This is my open workbench. The projects here are less about polished case studies and more about showing how I actually work. These include AI-native products, vibecoded experiments, internal tools, and utilities built using modern AI workflows. Think of this as a product leader's version of a GitHub repo — a place to pull back the curtain and see what I'm building right now."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aiLabProjects.map((project) => (
          <div
            key={project.slug}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="relative h-48 bg-gray-100">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-[50%_30%]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-purple-500/10">
                  <span className="text-4xl font-bold text-accent/20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
              {/* Status Badge */}
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${
                  statusColors[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>

              {/* Tools */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Note */}
      <div className="mt-16 text-center">
        <p className="text-gray-500">
          More experiments coming soon. Follow along on{" "}
          <a
            href="https://github.com/tillhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

