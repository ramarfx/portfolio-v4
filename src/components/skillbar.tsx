"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/types/types";

const FILL_STYLES: Record<Skill["fillColor"], string> = {
  blue:   "from-sky-400 via-blue-500 to-blue-700",
  green:  "from-green-400 via-green-500 to-green-700",
  aqua:   "from-cyan-400 via-teal-500 to-teal-700",
  purple: "from-violet-400 via-purple-500 to-purple-700",
};

interface SkillBarProps {
  skill: Skill;
  animate?: boolean;
}

export function SkillBar({ skill, animate = true }: SkillBarProps) {
  const [width, setWidth] = useState(animate ? 0 : skill.percent);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(skill.percent), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.percent, animate]);

  return (
    <div ref={ref} className="mb-2">
      <div className="mb-1 flex justify-between text-[11px] text-blue-800">
        <span>{skill.label}</span>
        <span className="font-bold">{skill.percent}%</span>
      </div>
      <div
        className="relative h-3.5 overflow-hidden rounded-full border border-blue-300/35"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(255,255,255,0.3))",
          boxShadow: "inset 0 1px 2px rgba(0,0,80,0.15)",
        }}
      >
        <div
          className={`h-full rounded-full bg-linear-to-b ${FILL_STYLES[skill.fillColor]} relative overflow-hidden transition-[width] duration-1500 ease-out`}
          style={{ width: `${width}%` }}
        >
          {/* Animated stripe overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255,255,255,0.15) 6px, rgba(255,255,255,0.15) 12px)",
              animation: "stripeScroll 1s linear infinite",
            }}
          />
          {/* Gloss */}
          <div
            className="absolute inset-x-0 top-0 h-[55%] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.1) 100%)",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes stripeScroll {
          from { background-position: 0 0; }
          to   { background-position: 24px 0; }
        }
      `}</style>
    </div>
  );
}
