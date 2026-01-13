import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="pt-32 min-h-[70vh] flex items-center">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-600">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">
            <Home size={18} className="mr-2" />
            Go Home
          </Button>
          <Link
            href="javascript:history.back()"
            className="inline-flex items-center justify-center px-5 py-2.5 text-gray-600 hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </Link>
        </div>
      </div>
    </Section>
  );
}

