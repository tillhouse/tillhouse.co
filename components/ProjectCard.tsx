import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  company: string;
  description: string;
  role: string;
  image: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  showArrow?: boolean;
}

export function ProjectCard({ project, showArrow = true }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5">
            <span className="text-4xl font-bold text-accent/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{project.company}</p>
          </div>
          {showArrow && (
            <ArrowRight
              size={20}
              className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
            />
          )}
        </div>
        <p className="mt-3 text-gray-600 text-sm line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

