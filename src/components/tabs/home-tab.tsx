"use client";

import { TabId } from "@/types/types";
import { GlossyButton } from "../windows/ui/button";
import { NotifBox } from "../windows/ui/notif-box";
import { SectionBody } from "../windows/ui/section-body";
import { SectionTitle } from "../windows/ui/section-title";
import { StatusDot } from "../windows/ui/status-dot";
import Image from "next/image";
import { PROJECTS, STATS } from "@/data/data";
import { ProjectCard } from "../project-card";
import { FileDown, FolderOpen, Info } from "lucide-react";

export function HomeTab({ onTabChange }: { onTabChange: (t: TabId) => void }) {
  return (
    <div>
      <NotifBox variant="yellow">
        <Info size={14} className="shrink-0 mt-0.5" />
        <span>
          Yo! Welcome to my portfolio. Take a look around!
        </span>
      </NotifBox>

      {/* About Section */}
      <SectionTitle>About Me</SectionTitle>
      <SectionBody>
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Left: user avatar */}
          <div className="flex shrink-0 min-w-32 items-center justify-center">
            <div className="relative size-24 overflow-hidden">
              <Image
                src="/img/user.webp"
                alt="Ramadina Al Muzthazam"
                width={100}
                height={100}
                priority
                className="size-full object-cover"
              />
            </div>
          </div>

          {/* Center: name, title, bio, actions */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <StatusDot />
              <h1
                className="font-[Trebuchet_MS,sans-serif] text-[18px] font-bold text-blue-950"
                style={{ textShadow: "0 1px 0 rgba(255,255,255,0.85)" }}>
                Ramadina Al Muzthazam
              </h1>
            </div>
            <p className="text-[11px] text-blue-600 mb-2 font-medium">
              Fullstack Web Developer &nbsp;·&nbsp; UPN Veteran Jakarta
            </p>
            <p className="text-[12px] leading-relaxed text-blue-900 max-w-lg mb-3">
              Fullstack Web Developer experienced building scalable web
              applications and interactive 3D web experiences using React,
              Three.js, Laravel. Experienced in backend architecture, API
              optimization, and WebGL-based frontend development.
            </p>
            <div className="flex flex-wrap gap-2">
              <GlossyButton
                variant="blue"
                onClick={() => onTabChange("projects")}>
                View Projects
              </GlossyButton>
              <a
                href="https://docs.google.com/document/d/1f-NoblChbnZom8KwiuL7IV2tz4sS_cGY-6h8uULgmIc/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer">
                <GlossyButton variant="silver">
                  <FileDown size={12} />
                  Download CV
                </GlossyButton>
              </a>
            </div>
          </div>
        </div>
      </SectionBody>

      {/* What I do */}
      <SectionTitle>What I Can Help You With</SectionTitle>
      <SectionBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[
            {
              icon: "/img/icons/internet-option.webp",
              title: "3D Web Experiences",
              desc: "Building immersive Three.js scenes — company profiles, geospatial viewers, and interactive landing pages with real-time day/night cycles.",
              bg: "rgba(80,160,255,0.15)",
              border: "rgba(80,150,240,0.3)",
            },
            {
              icon: "/img/icons/system-restore.webp",
              title: "Full-Stack Applications",
              desc: "Laravel + Next.js systems: from REST APIs and database design to React frontends deployed on production infra.",
              bg: "rgba(60,200,100,0.15)",
              border: "rgba(60,180,80,0.3)",
            },
            {
              icon: "/img/icons/synchronize.webp",
              title: "API & System Integration",
              desc: "Connecting government data systems, third-party services, and map APIs — built for the Kalimantan geospatial platform and similar projects.",
              bg: "rgba(60,185,220,0.12)",
              border: "rgba(40,160,210,0.3)",
            },
          ].map(({ icon, title, desc, bg, border }) => (
            <div
              key={title}
              className="rounded-lg p-2.5 text-center"
              style={{
                background: `linear-gradient(180deg, white, ${bg})`,
                border: `1px solid ${border}`,
              }}>
              <div className="mb-1.5 text-2xl mx-auto inline-block">
                <Image src={icon} alt={title} width={40} height={40} />
              </div>
              <p className="mb-1 text-[11px] font-bold text-blue-900">
                {title}
              </p>
              <p className="text-[10px] leading-relaxed text-blue-700">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </SectionBody>

      {/* Featured Projects */}
      <SectionTitle>Featured Projects</SectionTitle>
      <SectionBody>
        {PROJECTS.slice(0, 3).map((p) => (
          <ProjectCard key={p.id} project={p} image={p.image} size="sm" />
        ))}
      </SectionBody>

      <div className="mt-2.5 text-center">
        <GlossyButton variant="aqua" onClick={() => onTabChange("projects")}>
          <FolderOpen size={13} />
          Browse All Projects
        </GlossyButton>
      </div>
    </div>
  );
}
