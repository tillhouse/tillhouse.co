"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Code,
  Users,
  Award,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const RESUME_DATA = {
  summary: {
    title: "Jeremy Tillman",
    tagline: "Product Executive • Fractional Leader • AI Product Builder",
    location: "New York, NY",
    pitch:
      "AI-native product executive and product builder with a track record of launching agentic products across B2B and B2C markets. I blend product strategy with hands-on prototyping, workflow automation, and LLM-driven systems design, bringing experience across 0→1 execution, growth-stage leadership, and full-spectrum business operations including P&L ownership, monetization, GTM strategy, and scaling distributed teams.",
  },
  phases: [
    {
      id: "ai-native",
      title: "AI-Native Product Studio Era",
      period: "2024 - Present",
      theme: "Building the future of product development",
      icon: Sparkles,
      roles: [
        {
          title: "Co-Founder & Managing Partner | Head of Product",
          company: "Moonfoot Labs",
          website: "https://moonfoot.co/",
          period: "Jan 2025 - Present",
          location: "Remote",
          description:
            "AI-native product studio partnering with founders and early-stage teams to build validated, scalable products using LLM workflows and rapid prototyping.",
          highlights: [
            "Led development of AuthMonster, a brand-forward B2C 2FA security app (alpha)",
            "Led R&D for Icarus Lens, a prosumer AI product-intelligence platform",
            "Created the Moonfoot Method — next-gen agile for AI-era product development",
            "Built the Validation Playbook combining JTBD research and AI-driven discovery",
            "Provided fractional product leadership to founders and early-stage teams",
          ],
          skills: [
            "AI Product Development",
            "LLM Systems",
            "Rapid Prototyping",
            "Product Strategy",
          ],
        },
        {
          title: "Fractional Product Lead",
          company: "25madison",
          website: "https://www.25madison.com/",
          period: "Apr 2025 - Jan 2026",
          location: "New York, NY (Hybrid)",
          description:
            "Venture studio supporting AI-first B2B SaaS incubations across industrial operations, logistics, analytics, and professional services.",
          highlights: [
            "Supported 8 AI-first B2B SaaS incubations across 0→1 ventures",
            "Defined product vision, problem spaces, and early roadmaps",
            "Designed JTBD-informed validation plans and rapid learning cycles",
            "Coached founders on modern, product-led practices",
            "Applied cross-portfolio learnings to accelerate convergence on viable directions",
          ],
          skills: [
            "Portfolio Leadership",
            "JTBD",
            "Validation Systems",
            "Founder Coaching",
          ],
        },
        {
          title: "Fractional Head of Product",
          company: "Innermap",
          website: "https://innermap.ai/",
          period: "Feb 2024 - Present",
          location: "Remote",
          description:
            "AI mental health platform delivering Emotion Focused Therapy through an agentic conversational companion built on LLMs.",
          highlights: [
            "Defined product vision and roadmap for AI therapy platform",
            "Led MVP development and beta testing using rapid build-test-learn sprints",
            "Launched B2C product, acquiring first paying customers",
            "Designed B2C subscription model and PLG onboarding flows",
            "Defined B2B platform strategy for therapist use cases",
          ],
          skills: ["Product Launch", "B2C Subscription", "PLG", "AI Therapy"],
        },
      ],
    },
    {
      id: "portfolio",
      title: "Portfolio Leadership Phase",
      period: "2022 - 2024",
      theme: "Fractional executive supporting growth-stage companies",
      icon: Users,
      roles: [
        {
          title: "VP of Product",
          company: "Pavilion",
          website: "https://www.joinpavilion.com/",
          period: "Jan 2022 - Nov 2023",
          location: "Remote",
          description:
            "Community-powered learning platform for go-to-market leaders with courses, events, and digital networking.",
          highlights: [
            "Rebuilt product vision and roadmap from scratch",
            "Built cross-functional team of 7 across product, engineering, design",
            "Launched Pavilion Digital, improving retention and revenue",
            "Partnered with CEO and board on strategic initiatives and OKRs",
            "Leveraged business analytics to drive membership growth",
          ],
          skills: [
            "Team Leadership",
            "Platform Launch",
            "Executive Partnership",
            "Growth Analytics",
          ],
        },
        {
          title: "Interim Head of Product / Product Advisor",
          company: "BODS",
          period: "Nov 2021 - Oct 2022",
          location: "New York, NY",
          description:
            "Fashion technology company using AI and gaming tech for personalized 3D avatars and realistic fitting experiences.",
          highlights: [
            "Provided strategic feedback on product strategy and development",
            "Collaborated with design agency to refine UX for app redesign",
            "Helped recruit product and engineering talent",
          ],
          skills: ["Product Strategy", "UX Design", "Recruiting"],
        },
      ],
    },
    {
      id: "ghostery",
      title: "The Ghostery Era",
      period: "2014 - 2021",
      theme: "Building and scaling a privacy-first consumer product",
      icon: Award,
      roles: [
        {
          title: "President, Head of Product & Marketing",
          company: "Ghostery",
          website: "https://www.ghostery.com/",
          period: "Mar 2019 - Sep 2021",
          location: "New York, NY",
          description:
            "Led Ghostery as President, scaling the globally acclaimed privacy company from 5 to 30 team members with multiple offices.",
          highlights: [
            "Led three major redesigns of Ghostery browser extension",
            "Won 2018 SXSW Consumer Privacy Award",
            "Grew user base to 7M MAU while increasing revenue 3x",
            "Reduced churn to under 6%",
            "Led two successful exits: sale to Cliqz (2017) and asset sale to Brave (2021)",
            "Owned P&L, financial strategy, and operational planning",
            "Launched new revenue lines: subscriptions, private ads, search partnerships",
          ],
          skills: [
            "P&L Ownership",
            "Revenue Growth",
            "M&A",
            "Team Scaling",
            "Privacy Tech",
          ],
        },
        {
          title: "Director of Product & Business Operations",
          company: "Ghostery",
          website: "https://www.ghostery.com/",
          period: "Jan 2018 - Mar 2019",
          location: "New York, NY",
          description:
            "Oversaw product management, business strategy, marketing, and operations during critical growth phase.",
          highlights: [
            "Facilitated sale from Evidon to Cliqz GmbH",
            "Launched Ghostery 8 with AI-powered antitracking",
            "Grew team from 5 to 15 members",
            "Opened dedicated offices in Manhattan and Tallahassee",
          ],
          skills: ["Business Operations", "M&A", "Product Launch", "Team Growth"],
        },
        {
          title: "Director of Product Management | Consumer Product",
          company: "Ghostery",
          website: "https://www.ghostery.com/",
          period: "Oct 2014 - Dec 2017",
          location: "New York, NY",
          description:
            "Drove product vision and strategy for Ghostery's consumer products across multiple platforms.",
          highlights: [
            "Led cross-functional teams in rapid prototyping and user testing",
            "Implemented Agile/Scrum development process",
            "Established user research discipline from scratch",
            "Launched two major browser extension redesigns",
            "Launched Ghostery Privacy Browser on Android",
            "Launched Ghostery Pro beta for enterprise clients",
          ],
          skills: [
            "Product Vision",
            "Agile/Scrum",
            "User Research",
            "Platform Launches",
          ],
        },
      ],
    },
    {
      id: "early",
      title: "Early Career & Entrepreneurship",
      period: "2007 - 2014",
      theme: "From engineering to product, building startups",
      icon: Code,
      roles: [
        {
          title: "Senior Digital Strategist & Product Manager",
          company: "Vaudeville Ventures",
          period: "Feb 2014 - Oct 2014",
          location: "New York, NY",
          description:
            "Boutique digital strategy firm helping media and entertainment companies build engaging products.",
          highlights: [
            "Managed internal and external teams across client accounts",
            "Led product roadmaps and Scrum development sprints",
            "Implemented quantitative analysis using MixPanel and Google Analytics",
            "Conducted user research to identify pain points and validate features",
          ],
          skills: [
            "Digital Strategy",
            "Product Management",
            "Analytics",
            "User Research",
          ],
        },
        {
          title: "Co-Founder",
          company: "SportLeap",
          period: "Mar 2011 - Jun 2012",
          location: "New York, NY",
          description:
            "Stat-tracking platform for high school and college athletes.",
          highlights: [
            "Defined company concept and conducted customer development interviews",
            "Created wireframes and prototypes for user experience design",
            "Recruited CTO and development team",
            "Developed financial model and led fundraising efforts",
          ],
          skills: [
            "Startup Founding",
            "Customer Development",
            "UX Design",
            "Fundraising",
          ],
        },
        {
          title: "Founder",
          company: "MobLauncher",
          period: "Jun 2012 - Aug 2012",
          location: "Brooklyn, NY",
          description:
            "Social promotion platform for small businesses bridging advertising and word-of-mouth referrals.",
          highlights: [
            "Conducted user interviews with small business owners",
            "Created boot-strapped concierge MVP to test value proposition",
            "Validated product with two paying customers",
          ],
          skills: ["Lean Startup", "MVP Development", "Customer Validation"],
        },
        {
          title: "Structural Engineer",
          company: "Parsons & Nabih Youssef",
          period: "2007 - 2009",
          location: "Los Angeles, CA",
          description:
            "Structural engineering for major infrastructure and high-rise projects.",
          highlights: [
            "Worked on $4.7B chemical weapons elimination program",
            "Designed foundations for $900M Salt Waste Processing Facility",
            "Performed blast analysis and earthquake design for critical structures",
          ],
          skills: [
            "Structural Engineering",
            "Systems Thinking",
            "Technical Analysis",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree: "BSE, Civil & Environmental Engineering",
      school: "Princeton University",
      note: "Co-Captain, Varsity Swim Team",
    },
    {
      degree: "MS, Civil & Environmental Engineering (Structural Focus)",
      school: "Stanford University",
    },
    {
      degree: "Stanford LEAD: Corporate Innovation Certificate",
      school: "Stanford Graduate School of Business",
    },
    {
      degree: "Product Management Certificates",
      school: "Reforge",
      note: "Product Leadership, Strategy, PLG, Retention & Engagement",
    },
  ],
  skills: {
    "AI Product Development": [
      "LLM Systems",
      "AI Workflows",
      "Prompt Design",
      "Rapid Prototyping",
      "Replit",
      "Lovable",
      "Cursor",
    ],
    "Product Operations": [
      "Agile/Scrum",
      "JTBD",
      "Roadmapping",
      "Research Automation",
      "Linear",
      "Jira",
      "Notion",
    ],
    "Business Leadership": [
      "P&L Ownership",
      "Product-Led Growth",
      "GTM Strategy",
      "Business Model Development",
      "Team Scaling",
    ],
    "Technology Platforms": [
      "Web Apps",
      "Browser Extensions",
      "Desktop Apps",
      "iOS",
      "Android",
      "Search Technology",
    ],
  },
};

interface InteractiveResumeProps {
  onOpenFullVersion?: () => void;
}

export function InteractiveResume({ onOpenFullVersion }: InteractiveResumeProps) {
  const [expandedPhase, setExpandedPhase] = useState<string | null>("ai-native");

  return (
    <div className="bg-gray-50 text-gray-800 font-sans relative overflow-hidden rounded-lg">
      {/* Hexagonal pattern background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23e0e0e0' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {RESUME_DATA.summary.title}
          </h1>

          <div className="text-lg text-green-600 mb-5 font-semibold">
            {RESUME_DATA.summary.tagline}
          </div>

          <div className="flex flex-wrap gap-5 mb-6 text-sm text-gray-500 items-center">
            <a
              href="mailto:jeremy@tillhouse.co"
              className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              jeremy@tillhouse.co
            </a>

            <a
              href="https://www.linkedin.com/in/jrtillman/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>

            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {RESUME_DATA.summary.location}
            </span>
          </div>

          <p className="text-base leading-relaxed text-gray-600 max-w-4xl">
            {RESUME_DATA.summary.pitch}
          </p>
        </div>

        {/* Career Phases */}
        <div className="mb-12">
          <h2 className="text-xs font-bold text-green-600 tracking-widest mb-6 uppercase">
            Career Journey
          </h2>

          {RESUME_DATA.phases.map((phase) => {
            const isExpanded = expandedPhase === phase.id;
            const Icon = phase.icon;

            return (
              <div
                key={phase.id}
                className={`mb-3 bg-white border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-green-600 shadow-md shadow-green-600/10"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedPhase(isExpanded ? null : phase.id)
                  }
                  className="w-full px-5 py-4 bg-transparent border-none text-left flex items-center justify-between cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        isExpanded ? "bg-green-600" : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isExpanded ? "text-white" : "text-green-600"}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="text-lg font-bold text-gray-900">
                        {phase.title}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {phase.period} • {phase.theme}
                      </div>
                    </div>
                  </div>

                  {isExpanded ? (
                    <ChevronUp size={20} className="text-green-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 animate-fadeIn">
                    {phase.roles.map((role, roleIdx) => (
                      <div
                        key={roleIdx}
                        className="p-5 bg-gray-50 rounded-lg mb-3 border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-3 flex-wrap gap-3">
                          <div>
                            <div className="text-base font-bold text-gray-900 mb-1">
                              {role.title}
                            </div>
                            {role.website ? (
                              <a
                                href={role.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 font-semibold hover:text-green-700 hover:underline inline-flex items-center gap-1 transition-all"
                              >
                                {role.company}
                                <ExternalLink size={12} />
                              </a>
                            ) : (
                              <div className="text-green-600 font-semibold">
                                {role.company}
                              </div>
                            )}
                          </div>

                          <div className="text-right text-xs text-gray-500">
                            <div>{role.period}</div>
                            <div>{role.location}</div>
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 mb-4">
                          {role.description}
                        </p>

                        <div className="mb-4">
                          <div className="text-xs font-bold text-green-600 tracking-wide mb-2 uppercase">
                            Key Highlights
                          </div>
                          <ul className="m-0 pl-0 list-none">
                            {role.highlights.map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="text-sm leading-relaxed text-gray-600 mb-1.5 relative pl-4"
                              >
                                <span className="absolute left-0 text-green-600 font-bold">
                                  •
                                </span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {role.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 bg-green-100 border border-green-200 rounded text-xs text-green-700 font-semibold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-xs font-bold text-green-600 tracking-widest mb-6 uppercase">
            Core Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
              <div
                key={category}
                className="p-5 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-green-600 hover:shadow-md hover:shadow-green-600/10 transition-all"
              >
                <div className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-100">
                  {category}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-600 font-semibold hover:bg-green-100 hover:border-green-200 hover:text-green-700 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-green-600 tracking-widest mb-5 uppercase">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RESUME_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm"
              >
                <div className="text-sm font-bold text-gray-900 mb-1">
                  {edu.degree}
                </div>
                <div className="text-sm text-green-600 font-semibold mb-1">
                  {edu.school}
                </div>
                {edu.note && (
                  <div className="text-xs text-gray-500 italic">{edu.note}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Button - Links to full version */}
      <a
        href="https://claude.ai/public/artifacts/81359795-14ba-41fb-be79-2e2f0cb6bfc1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 px-6 py-4 rounded-full bg-green-600 border-none cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-green-600/30 hover:scale-105 hover:shadow-xl hover:shadow-green-600/40 transition-all z-50 text-white font-semibold text-sm no-underline"
      >
        <MessageCircle size={22} />
        <span>Ask About Jeremy</span>
        <ExternalLink size={16} />
      </a>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

