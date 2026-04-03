"use client";

import { TabId } from "@/types/types";
import { GlossyButton } from "../ui/button";
import { NotifBox } from "../ui/notif-box";
import { SectionBody } from "../ui/section-body";
import { SectionTitle } from "../ui/section-title";
import Image from "next/image";
import { PROJECTS } from "@/data/data";
import { ProjectCard } from "../project-card";

export function HomeTab({ onTabChange }: { onTabChange: (t: TabId) => void }) {
  return (
    <div>
      <NotifBox variant="yellow">
        <span>💡</span>
        <span>
          Welcome to my portfolio! I&rsquo;m a front-end developer and Backend
          Developer passionate about creating beautiful digital experiences.
          Feel free to browse around!
        </span>
      </NotifBox>

      {/* About banner */}
      <div
        className="relative mb-3.5 overflow-hidden rounded-lg border border-white/70 p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(80,160,255,0.3) 0%, rgba(60,220,220,0.2) 40%, rgba(100,220,100,0.25) 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 8px rgba(0,100,200,0.1)",
        }}>
        {/* Gloss */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
          }}
        />
        <h1
          className="relative mb-1 font-[Trebuchet_MS,sans-serif] text-[22px] font-bold"
          style={{
            background: "linear-gradient(180deg, #2060d0 0%, #0a40a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
          Ramadina Al Muzthazam
        </h1>
        <p className="relative mb-3 text-[12px] italic text-green-800">
          Fullstack Web Developer
        </p>
        <p className="relative max-w-lg text-[12px] leading-relaxed text-blue-900">
          Hello! I&rsquo;m a passionate Web Developer with over 3 years of
          experience building modern, responsive, and user-friendly web
          applications. I enjoy turning ideas into functional and scalable
          digital products using the latest web technologies.
        </p>
        <div className="relative mt-3 flex flex-wrap gap-2">
          <GlossyButton variant="blue" onClick={() => onTabChange("projects")}>
            View Projects
          </GlossyButton>
          <GlossyButton variant="green" onClick={() => onTabChange("contact")}>
            Hire Me!
          </GlossyButton>
          <a href="https://drive.google.com/file/d/1bh5Wf1mI2WvRlj97eXCyZl2A6e8DAlvm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <GlossyButton variant="silver">📄 Download CV</GlossyButton>
          </a>
        </div>
      </div>

      {/* What I do */}
      <SectionTitle>What I Can Help You With</SectionTitle>
      <SectionBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[
            {
              icon: "/img/icons/internet-option.png",
              title: "Website Development",
              desc: "Building responsive and interactive websites from landing page to complex web apps using modern frameworks.",
              bg: "rgba(80,160,255,0.15)",
              border: "rgba(80,150,240,0.3)",
            },
            {
              icon: "/img/icons/system-restore.png",
              title: "Web App Optimization",
              desc: "Optimizing existing web applications for better performance and user experience.",
              bg: "rgba(60,200,100,0.15)",
              border: "rgba(60,180,80,0.3)",
            },
            {
              icon: "/img/icons/synchronize.png",
              title: "System Integration",
              desc: "Integrating third-party APIs and services to enhance functionality and streamline workflows.",
              bg: "rgba(200,80,255,0.12)",
              border: "rgba(180,80,240,0.3)",
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
          🗂 Browse All Projects →
        </GlossyButton>
      </div>
    </div>
  );
}
