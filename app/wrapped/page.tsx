import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "2025 Wrapped | Jeremy Tillman",
  description:
    "2025 Wrapped: a visual recap of the year’s highlights, milestones, and the work behind the scenes.",
};

export default function WrappedPage() {
  return (
    <Section className="pt-32">
      <SectionHeader
        title="2025 Wrapped"
        subtitle="A Gamma summary of the year — highlights, milestones, and the work behind the scenes."
      />

      <div className="max-w-5xl">
        <div className="relative w-full pt-[64.3%] bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <iframe
            src="https://gamma.app/embed/22nietzxsh9t1cc"
            title="Jeremy Tillman - 2025 Wrapped"
            allow="fullscreen"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </Section>
  );
}
