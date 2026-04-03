"use client";

import { BrowserChrome } from "@/components/browser";
import { Sidebar } from "@/components/sidebar";
import { StatusBar } from "@/components/status-bar";
import { ContactTab } from "@/components/tabs/contact-tab";
import { HomeTab } from "@/components/tabs/home-tab";
import { ProjectsTab } from "@/components/tabs/project-tab";
import { SkillsTab } from "@/components/tabs/skills-tab";
import { GlossyButton } from "@/components/ui/button";
import { AeroWindow } from "@/components/ui/window";
import { TabId } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const renderTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab onTabChange={setActiveTab} />;
      case "projects":
      return <ProjectsTab />;
      case "skills":
      return <SkillsTab />;
      case "contact":
      return <ContactTab />;
    }
  };
  return (
    <div
      className="bg-[url('/img/background.png')] bg-cover bg-center w-full min-h-screen"
      style={{
        fontFamily: "'Trebuchet MS', Tahoma, Verdana, sans-serif",
        fontSize: 13,
        color: "#1a3a1a",
      }}>
      <div className="relative z-2 mx-auto max-w-360 px-3 pb-24 pt-4">
        {/* ── MAIN BROWSER WINDOW ── */}
        <AeroWindow
          title="My Portfolio — Windows Internet Explorer"
          icon="🌐"
          className="mb-2.5 animate-[fadeIn_0.4s_ease_both]">
          <BrowserChrome activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Body */}
          <div className="grid" style={{ gridTemplateColumns: "185px 1fr" }}>
            {/* Sidebar */}
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Content */}
            <div className="bg-white/62 p-4 backdrop-blur-sm">
              {renderTab()}
            </div>
          </div>

          <StatusBar />
        </AeroWindow>

        {/* ── INFO BAR WINDOW ── */}
        <AeroWindow
          title="Quick Info — Alex Designer's Portfolio"
          icon="ℹ️"
          className="animate-[fadeIn_0.4s_0.08s_ease_both]">
          <div className="flex flex-wrap items-center gap-5 bg-white/50 px-3.5 py-2.5 text-[11px]">
            <span className="flex items-center gap-1.5 text-blue-700">
              📅 Last updated: <strong>March 2026</strong>
            </span>
            <span className="flex items-center gap-1.5 text-blue-700">
              🖥 Best viewed at <strong>1024×768</strong> or higher
            </span>
            <span className="flex items-center gap-1.5 text-blue-700">
              🌐 Compatible with <strong>IE 7+</strong>, Firefox 2+, Opera 9+
            </span>
            <div className="ml-auto flex gap-1.5">
              <GlossyButton variant="green" size="sm">
                ★ Add to Favorites
              </GlossyButton>
              <GlossyButton variant="silver" size="sm">
                🖨 Print Page
              </GlossyButton>
            </div>
          </div>
        </AeroWindow>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
