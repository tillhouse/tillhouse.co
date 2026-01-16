import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { QuestionBlock } from "./QuestionBlock";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jrtillman/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/tillhouse",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:jeremy@tillhouse.co",
    label: "Email",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/images/logos/Logo Files/svg/Color logo - no background.svg"
                alt="Tillhouse Ventures"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-gray-600 text-sm max-w-xs">
              AI-native product leadership for startups building what&apos;s next.
            </p>
            <p className="mt-2 text-gray-500 text-sm">New York City (NYC)</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-4 items-center">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <QuestionBlock />
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              <a
                href="mailto:jeremy@tillhouse.co"
                className="hover:text-accent transition-colors"
              >
                jeremy@tillhouse.co
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Jeremy Tillman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

