import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { HeadshotImage } from "@/components/HeadshotImage";
import { AskAfterDelay } from "@/components/feedback/AskAfterDelay";
import { featuredProjects } from "@/data/projects";
import { Users, MessageSquare, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Full-Time Roles",
    description:
      "Senior product leadership for companies ready to make a long-term investment in product.",
  },
  {
    icon: Users,
    title: "Fractional or Interim Leadership",
    description:
      "Embedded product leadership for teams that need senior ownership without a full-time hire.",
  },
  {
    icon: MessageSquare,
    title: "Advisory & Coaching",
    description:
      "Strategic guidance for founders and product leaders navigating product-market fit, AI adoption, and execution challenges.",
  },
];

const logos = [
  { name: "Analog", logo: "/images/logos/analog.png" },
  { name: "Ghostery", logo: "/images/logos/ghostery.svg" },
  { name: "Pavilion", logo: "/images/logos/pavilion.png" },
  { name: "25madison", logo: "/images/logos/25madison.svg" },
  { name: "Moonfoot Labs", logo: "/images/logos/moonfoot.svg" },
];

export default function Home() {
  return (
    <>
      <AskAfterDelay slug="homepage_intent" ms={8000} />

      {/* Hero Section */}
      <Section padding="xl" className="pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              AI-native product leadership for startups building what&apos;s next
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              NYC-based product executive and AI-native builder. Head of
              Product at Analog, co-founder of Moonfoot Labs, and former
              President of Ghostery, with deep experience taking products from
              zero to one and scaling teams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/services" size="lg">
                Work with me
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button href="/work" variant="outline" size="lg">
                View my work
              </Button>
            </div>
          </div>
          <div className="relative h-72 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <HeadshotImage
              src="/images/headshots/Tillman-00654-Edit.jpg"
              eightBitSrc="/images/headshots/Tillman-00654-Edit-8bit.png"
              alt="Jeremy Tillman"
              priority
            />
          </div>
        </div>
      </Section>

      {/* What I Do Section */}
      <Section background="gray">
        <SectionHeader
          title="What I Do"
          subtitle="I help startups and growing tech companies turn ideas into shipped products and scalable platforms. My work spans early validation, hands-on execution, and executive-level ownership across product, engineering, design, and growth."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-lg">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Proof Signals - Logo Strip */}
      <Section padding="md">
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          I&apos;ve led and shipped products across consumer, B2B, and platform
          businesses — from early-stage startups to scaled products used by millions.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((company) => (
            // brightness-0 turns every logo (color or white) into a flat
            // silhouette so the strip reads as one gray set, like the old text
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-7 md:h-8 w-auto brightness-0 opacity-40 hover:opacity-60 transition-opacity"
            />
          ))}
        </div>
      </Section>

      {/* Featured Work Section */}
      <Section>
        <SectionHeader
          title="Featured Work"
          subtitle="A selection of products I've helped build and ship"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/work" variant="outline">
            View all work
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="accent" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Let&apos;s build something great
        </h2>
        <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
          If you&apos;re building a product and want an experienced, hands-on
          partner to help you move faster and make better decisions, let&apos;s talk.
        </p>
        <div className="mt-8">
          <Button
            href="/services#contact"
            variant="secondary"
            size="lg"
            className="bg-white text-accent hover:bg-gray-100"
          >
            Get in touch
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </Section>
    </>
  );
}

