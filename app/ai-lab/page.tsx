import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { BuildLoop } from "@/components/ai-lab/BuildLoop";
import { StackDiagram } from "@/components/ai-lab/StackDiagram";
import { CommitChart, PricingLoop } from "@/components/ai-lab/SiteBuildHistory";
import {
  AiShareChart,
  ContributionHeatmap,
  GitHubStats,
} from "@/components/ai-lab/GitHubActivity";
import { aiLabProjects, inProduction } from "@/data/aiLab";
import { ArrowUpRight, ExternalLink, Github, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Lab | Jeremy Tillman",
  description:
    "How Jeremy Tillman builds: the AI-native workflow, tools, and experiments behind his products, from Cursor and Claude Code to in-app user research with Verdancy.",
};

const statusColors = {
  Live: "bg-green-100 text-green-800",
  Prototype: "bg-yellow-100 text-yellow-800",
  Experiment: "bg-purple-100 text-purple-800",
};

export default function AILabPage() {
  return (
    <>
      <Section className="pt-32" padding="md">
        <SectionHeader
          title="AI Lab"
          subtitle="How I build. I lead product and still ship code. This page shows the workflow, tools, and experiments behind the products on my Work page, including this site."
        />

        {/* GitHub activity */}
        <h3 className="text-xl font-semibold text-gray-900">
          A product leader who ships
        </h3>
        <p className="mt-2 mb-6 text-gray-600 max-w-2xl">
          I don&rsquo;t stop at specs. This is my commit history across work
          and side projects over the last year, most of it written with AI
          coding agents.{" "}
          <a
            href="https://github.com/tillhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent font-medium hover:underline"
          >
            <Github size={16} aria-hidden="true" />
            See my GitHub profile
          </a>
        </p>
        <GitHubStats />
        <div className="mt-8 space-y-8">
          <ContributionHeatmap />
          <AiShareChart />
        </div>
      </Section>

      {/* Workflow */}
      <Section background="gray">
        <SectionHeader
          title="From idea to production"
          subtitle="The same four-step loop runs whether I'm testing a weekend idea or shipping to paying customers."
        />
        <BuildLoop />
      </Section>

      {/* Stack */}
      <Section>
        <SectionHeader
          title="The stack"
          subtitle="What I reach for at each layer, from a disposable prototype to a production app real users rely on."
        />
        <StackDiagram />
      </Section>

      {/* This site */}
      <Section background="gray">
        <SectionHeader
          title="This site is part of the lab"
          subtitle="tillhouse.co was built with Cursor and Claude Code, and it uses Verdancy to ask visitors what's missing. Here's what that looks like in practice."
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <CommitChart />
          </div>
          <div className="lg:col-span-2">
            <PricingLoop />
          </div>
        </div>
        <a
          href="https://github.com/tillhouse/tillhouse.co"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors"
        >
          <Github size={16} className="mr-1" />
          See the source on GitHub
        </a>
      </Section>

      {/* Experiments */}
      <Section>
        <SectionHeader
          title="Experiments"
          subtitle="Small builds to test an idea, a tool, or a workflow. Not every one becomes a product, and that's the point."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiLabProjects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
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
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${
                    statusColors[project.status]
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>

                {project.lesson && (
                  <div className="mt-4 flex gap-3 rounded-md bg-primary-50 p-3">
                    <Lightbulb
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-accent">
                        What I learned:{" "}
                      </span>
                      {project.lesson}
                    </p>
                  </div>
                )}

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

                {(project.demoUrl || project.githubUrl) && (
                  <div className="mt-auto pt-6 flex gap-4">
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
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* In production */}
      <Section background="gray">
        <SectionHeader
          title="In production"
          subtitle="Where this workflow ships real products. Full case studies are on my Work page."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inProduction.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary-200 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-gray-400 group-hover:text-accent transition-colors"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.blurb}</p>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-600">
          Want your team working this way? Helping teams adopt AI-native
          workflows is part of my{" "}
          <Link href="/services" className="text-accent font-medium hover:underline">
            advisory work
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
