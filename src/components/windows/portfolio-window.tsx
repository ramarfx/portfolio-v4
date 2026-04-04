"use client";

import { AeroWindow } from "@/components/ui/window";

import { TabId } from "@/types/types";
import React, { useEffect, useState } from "react";
import { HomeTab } from "../tabs/home-tab";
import { ProjectsTab } from "../tabs/project-tab";
import { SkillsTab } from "../tabs/skills-tab";
import { ContactTab } from "../tabs/contact-tab";
import { BrowserChrome } from "../browser";
import { Sidebar } from "../sidebar";
import { StatusBar } from "../status-bar";
import { GlossyButton } from "../ui/button";

export const PortfolioWindow = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [isOpen, setIsOpen] = useState(false);


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
    <section>
      <div className="relative z-2 mx-auto max-w-360 px-3 py-4">
        {/* ── MAIN BROWSER WINDOW ── */}
        <AeroWindow
          id="portofolio"
          title="My Portfolio — Windows Internet Explorer"
          icon="/img/icons/edge.png"
          className="">
          <BrowserChrome
            activeTab={activeTab}
            onTabChange={setActiveTab}
            setIsOpen={setIsOpen}
          />

          {/* Body */}
          <div className="flex min-h-[80svh] h-full">
            {/* Sidebar */}
            <Sidebar
              activeTab={activeTab}
              onTabChange={setActiveTab}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />

            {/* Content */}
            <div className="bg-white/62 p-4 backdrop-blur-sm flex-1">
              {renderTab()}
            </div>
          </div>

          <StatusBar />
        </AeroWindow>

        {/* ── INFO BAR WINDOW ── */}
        <AeroWindow
          id="info"
          title="Quick Info — Rama's Portfolio"
          icon="/img/icons/info.png"
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
              <GlossyButton
                variant="silver"
                size="sm"
                onClick={() => window.print()}>
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
    </section>
  );
};
