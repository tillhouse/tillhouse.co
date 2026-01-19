import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/Button";
import { HeadshotImage } from "@/components/HeadshotImage";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Jeremy Tillman | NYC Product Executive",
  description:
    "Learn about Jeremy Tillman — NYC-based product executive, AI-native builder, and startup advisor focused on privacy, growth, and product strategy.",
};

const philosophy = [
  {
    title: "Start with the problem",
    description:
      "The best products solve real problems for real people. I always begin with deep user understanding before jumping to solutions.",
  },
  {
    title: "Ship fast, learn faster",
    description:
      "Perfect is the enemy of good. I believe in getting to market quickly, gathering feedback, and iterating relentlessly.",
  },
  {
    title: "Empower the team",
    description:
      "Great products come from great teams. My job is to create clarity, remove obstacles, and let talented people do their best work.",
  },
  {
    title: "Embrace AI as a multiplier",
    description:
      "AI isn't replacing product thinking—it's amplifying it. I leverage AI tools to move faster while keeping humans at the center.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro */}
      <Section className="pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I&apos;m Jeremy
            </h1>
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                I&apos;m a NYC-based product executive with over 15 years of
                experience building software products and leading
                cross-functional teams. I&apos;m based in the greater NYC area
                (Westchester) and work out of Manhattan, partnering with founders
                across New York City and beyond. My career has spanned consumer
                products, B2B platforms, privacy technology, and — more recently
                — AI-native software.
              </p>
              <p>
                I&apos;ve worked across the full arc of product development:
                early discovery, zero-to-one builds, scaling products to
                millions of users, and operating at the executive level
                alongside founders and boards.
              </p>
              <p>
                In the last few years, I&apos;ve focused heavily on startup
                incubation and fractional leadership, working hands-on with
                early-stage teams while also building my own AI-driven products.
              </p>
            </div>
          </div>

          {/* Headshot */}
          <div className="relative h-[450px] lg:h-[550px] bg-gray-100 rounded-lg overflow-hidden">
            <HeadshotImage
              src="/images/headshots/Tillman-00693-Edit.jpg"
              eightBitSrc="/images/headshots/Tillman-00693-Edit-8bit.png"
              alt="Jeremy Tillman"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Section>

      {/* Product Philosophy */}
      <Section background="gray">
        <SectionHeader
          title="Product Philosophy"
          subtitle="The principles that guide how I think about building products"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophy.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How I Work */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeader
            title="How I Work"
          />
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              I&apos;m pragmatic, outcome-oriented, and deeply hands-on.
            </p>
            <p>
              I believe great products come from clear thinking, fast feedback
              loops, and teams that are empowered to make decisions. AI has
              fundamentally changed how those loops work — and I spend a lot of
              time experimenting with how to use it responsibly and effectively.
            </p>
          </div>
        </div>
      </Section>


      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Want to work together?
          </h2>
          <p className="mt-2 text-gray-600">
            Let&apos;s chat about how I can help your team.
          </p>
          <div className="mt-6">
            <Button href="/services#contact" size="lg">
              Get in touch
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

