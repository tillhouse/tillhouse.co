import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "accent";
  padding?: "sm" | "md" | "lg" | "xl";
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-gray-50",
  accent: "bg-accent text-white",
};

const paddingStyles = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
};

export function Section({
  children,
  className = "",
  id,
  background = "white",
  padding = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

// Section Header component for consistent headings
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

