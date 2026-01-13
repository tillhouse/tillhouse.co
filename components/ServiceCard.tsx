"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Users, MessageSquare, Briefcase, LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  iconName: "Users" | "MessageSquare" | "Briefcase";
  whoFor: string;
  whenItMakesSense: string;
  engagement: string;
  included: string[];
}

const iconMap: Record<string, LucideIcon> = {
  Users,
  MessageSquare,
  Briefcase,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[service.iconName];

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-start gap-4"
        aria-expanded={isExpanded}
      >
        <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
          <Icon size={24} className="text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {service.title}
          </h3>
          <p className="mt-1 text-gray-600 text-sm">{service.whoFor}</p>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp size={20} className="text-gray-400" />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                When it makes sense
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                {service.whenItMakesSense}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Typical engagement
              </h4>
              <p className="mt-1 text-sm text-gray-600">{service.engagement}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                What&apos;s included
              </h4>
              <ul className="mt-2 space-y-1">
                {service.included.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
