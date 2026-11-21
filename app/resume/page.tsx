import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { InteractiveResume } from "@/components/InteractiveResume";
import {
  Download,
  Linkedin,
  Mail,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Jeremy Tillman",
  description:
    "View Jeremy Tillman’s resume. Product executive, startup operator, and AI-native product builder: Head of Product at Analog, co-founder of Moonfoot Labs, former President of Ghostery.",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jeremy@tillhouse.co",
    href: "mailto:jeremy@tillhouse.co",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jrtillman",
    href: "https://www.linkedin.com/in/jrtillman/",
  },
  {
    icon: MessageSquare,
    label: "Contact Me",
    value: "Send me a message",
    href: "#send-message",
  },
];

export default function ResumePage() {
  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          title="Resume"
          subtitle="Explore my experience below, or access the full interactive version with AI chat."
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            href="https://claude.ai/artifact/4yLExh6NJUfxW7nxQGhLik"
            external
          >
            <ExternalLink size={18} className="mr-2" />
            Open Full Interactive Version
          </Button>
          <Button href="/resume.pdf" external variant="outline">
            <Download size={18} className="mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Embedded Interactive Resume */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <InteractiveResume />
        </div>
      </Section>

      {/* Direct Contact */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              If you&apos;re interested in working together — whether on a
              fractional basis or a full-time role — the best way to reach me is
              directly.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-sm transition-all group"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{link.label}</p>
                      <p className="font-medium text-gray-900 group-hover:text-accent transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div id="send-message" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
