import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Jeremy Tillman",
  description:
    "Fractional product leadership, advisory, and full-time executive services for startups. Let's build something great together.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          title="Services"
          subtitle="I work with founders and teams in a few different ways, depending on their stage and needs."
        />

        <div className="space-y-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="gray" id="contact">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Let's Talk"
            subtitle="Send a message and I'll get back to you."
            centered
          />
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

