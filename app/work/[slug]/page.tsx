import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ImageCarousel } from "@/components/ImageCarousel";
import { projects } from "@/data/projects";
import { getCaseStudyContent } from "@/lib/caseStudies";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Jeremy Tillman",
    };
  }

  return {
    title: `${project.title} | Work | Jeremy Tillman`,
    description: project.metaDescription ?? project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const caseStudyContent = getCaseStudyContent(params.slug);
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Section className="pt-32">
        {/* Back link */}
        <Link
          href="/work"
          className="inline-flex items-center text-gray-600 hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Work
        </Link>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {project.title}
            </h1>
            <p className="mt-2 text-xl text-gray-500">{project.company}</p>
            <p className="mt-6 text-lg text-gray-600">{project.description}</p>

            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </h3>
                <p className="mt-1 text-gray-900">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Technologies
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="pt-4">
                  <Button href={project.link} external>
                    Visit Site
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Project Image / Gallery */}
          {project.gallery && project.gallery.length > 0 ? (
            <ImageCarousel images={project.gallery} alt={project.title} />
          ) : project.image ? (
            <div className="relative h-72 md:h-96 lg:h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ) : (
            <div className="relative h-72 md:h-96 lg:h-[400px] bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg overflow-hidden flex items-center justify-center">
              <span className="text-6xl font-bold text-accent/20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </Section>

      {/* Case Study Content */}
      <Section background="gray">
        <div className="max-w-3xl">
          {caseStudyContent ? (
            <article className="prose prose-gray prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-hr:my-8">
              <ReactMarkdown>{caseStudyContent}</ReactMarkdown>
            </article>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  This project showcases my work on {project.title} at{" "}
                  {project.company}. As {project.role}, I was responsible for
                  driving product strategy and execution.
                </p>
              </div>
            </>
          )}
        </div>
      </Section>

      {/* Navigation */}
      <Section>
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center text-gray-600 hover:text-accent transition-colors"
            >
              <ArrowLeft
                size={20}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              <span>
                <span className="text-sm text-gray-400 block">Previous</span>
                <span className="font-medium">{prevProject.title}</span>
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center text-gray-600 hover:text-accent transition-colors text-right"
            >
              <span>
                <span className="text-sm text-gray-400 block">Next</span>
                <span className="font-medium">{nextProject.title}</span>
              </span>
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>
    </>
  );
}

