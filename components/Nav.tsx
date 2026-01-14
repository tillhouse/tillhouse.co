"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logos/Logo Files/svg/Color logo - no background.svg"
            alt="Tillhouse Ventures"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/services#contact"
              className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              Work with me
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-accent"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-accent font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/services#contact"
                onClick={() => setIsOpen(false)}
                className="block bg-accent text-white px-4 py-2 rounded-md font-medium text-center hover:bg-accent/90 transition-colors"
              >
                Work with me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

