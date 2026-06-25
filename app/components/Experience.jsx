import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  ArrowUpRight,
  MapPin,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { experiences } from "@/assets/assets";

export default function ProfessionalJourney({ isDarkMode }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="experience"
      className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block mb-2 text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
          Where I’ve Worked
        </span>
        <h2 className="text-5xl font-Ovo font-semibold text-gray-800 dark:text-white">
          My Experience
        </h2>
        <p className="max-w-2xl mx-auto mt-5 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
          An overview of my roles and responsibilities, highlighting the
          real-world projects and technologies I’ve worked with throughout my
          development journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Rail — a real chronological line, not decoration */}
        <div className="absolute left-2 top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />

        <div className="space-y-1">
          {experiences.map(
            ({
              id,
              role,
              company,
              location,
              period,
              duration,
              type,
              description,
              achievements,
              tags,
            }) => (
              <div
                key={id}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative pl-9 sm:pl-12 pr-2 py-6 rounded-xl transition-colors duration-300 hover:bg-neutral-50 dark:hover:bg-white/[0.03] cursor-default"
              >
                {/* Node */}
                <span
                  className={`absolute left-0 top-7 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    hoveredId === id
                      ? "border-blue-500 bg-blue-500/10 scale-110"
                      : "border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950"
                  }`}
                />

                {/* Role + period */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-2">
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight transition-all duration-500 ${
                        hoveredId === id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {role}
                    </h3>
                    <ArrowUpRight
                      className={`w-5 h-5 mt-1 text-gray-400 dark:text-gray-500 transition-all duration-300 ${
                        hoveredId === id
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-y-1 translate-x-1"
                      }`}
                    />
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-400 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {period}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5 font-medium text-gray-800 dark:text-gray-200">
                    <Briefcase className="w-3.5 h-3.5 shrink-0" />
                    {company}
                  </span>
                  <span className="text-gray-300 dark:text-gray-700">/</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {location}
                  </span>
                  <span className="text-gray-300 dark:text-gray-700">/</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    {duration}
                  </span>
                  <span className="text-gray-300 dark:text-gray-700">/</span>
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck className="w-3.5 h-3.5 shrink-0" />
                    {type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-Ovo max-w-5xl">
                  {description}
                </p>

                {/* Achievements */}
                {achievements?.length > 0 && (
                  <div className="mb-5 space-y-2">
                    {achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="w-1 h-1 mt-2.5 rounded-full bg-blue-500 shrink-0" />
                        <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 font-Ovo">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wide rounded-md border border-neutral-200 dark:border-neutral-800 text-gray-500 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}