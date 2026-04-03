"use client";

import { TabId } from "@/types/types";
import { GlossyButton } from "../ui/button";
import { NotifBox } from "../ui/notif-box";
import { SectionBody } from "../ui/section-body";
import { SectionTitle } from "../ui/section-title";

export function HomeTab({ onTabChange }: { onTabChange: (t: TabId) => void }) {
  return (
    <div>
      <NotifBox variant="yellow">
        <span>💡</span>
        <span>
          Welcome to my portfolio! I&rsquo;m a front-end developer and Backend Developer
          passionate about creating beautiful digital experiences. Feel free to
          browse around!
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
        }}
      >
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
          }}
        >
          Ramadina Al Muzthazam
        </h1>
        <p className="relative mb-3 text-[12px] italic text-green-800">
          Fullstack Web Developer
        </p>
        <p className="relative max-w-lg text-[12px] leading-relaxed text-blue-900">
          Hello! I&rsquo;m a passionate Web Developer with over 3 years of experience building modern, responsive, and user-friendly web applications. I enjoy turning ideas into functional and scalable digital products using the latest web technologies.
        </p>
        <div className="relative mt-3 flex flex-wrap gap-2">
          <GlossyButton variant="blue" onClick={() => onTabChange("projects")}>
            💼 View Projects
          </GlossyButton>
          <GlossyButton variant="green" onClick={() => onTabChange("contact")}>
            ✉ Hire Me!
          </GlossyButton>
          <GlossyButton variant="silver">📄 Download CV</GlossyButton>
        </div>
      </div>

      {/* What I do */}
      <SectionTitle>What I Can Help You With</SectionTitle>
      <SectionBody>
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              icon: "🌐",
              title: "Website Development",
              desc: "Building responsive and interactive websites from landing page to complex web apps using modern frameworks.",
              bg: "rgba(80,160,255,0.15)",
              border: "rgba(80,150,240,0.3)",
            },
            {
              icon: "⚡",
              title: "Web App Optimization",
              desc: "Optimizing existing web applications for better performance and user experience.",
              bg: "rgba(60,200,100,0.15)",
              border: "rgba(60,180,80,0.3)",
            },
            {
              icon: "🔗",
              title: "System Integration",
              desc: "Integrating third-party APIs and services to enhance functionality and streamline workflows.",
              bg: "rgba(200,80,255,0.12)",
              border: "rgba(180,80,240,0.3)",
            },
          ].map(({ icon, title, desc, bg, border }) => (
            <div
              key={title}
              className="rounded-lg p-2.5 text-center"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <div className="mb-1.5 text-2xl">{icon}</div>
              <p className="mb-1 text-[11px] font-bold text-blue-900">{title}</p>
              <p className="text-[10px] leading-relaxed text-blue-700">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBody>

      {/* Recent activity */}
      <SectionTitle>🕐 Recent Activity</SectionTitle>
      <SectionBody
      >
        {[
          { icon: "✅", status: "Completed", color: "text-green-800", text: "E-commerce redesign project for Client XYZ", time: "2 days ago" },
          { icon: "🔄", status: "In Progress", color: "text-blue-800", text: "Mobile app UI kit development", time: "ongoing" },
          { icon: "🌟", status: "Published", color: "text-amber-800", text: 'New blog post: "Designing with Glass Effects"', time: "1 week ago" },
        ].map(({ icon, status, color, text, time }) => (
          <div
            key={status}
            className="flex items-center gap-2 border-b border-blue-200/25 py-1.5 text-[11px] last:border-0"
          >
            <span className="text-sm">{icon}</span>
            <span className={`font-bold ${color}`}>{status}</span>
            <span className="text-blue-700">{text}</span>
            <span className="ml-auto text-[10px] text-blue-400">{time}</span>
          </div>
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