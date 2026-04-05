"use client";

import { AeroWindow } from "@/components/ui/window";

import { TabId } from "@/types/types";
import React, { useState } from "react";
import { HomeTab } from "../tabs/home-tab";
import { ProjectsTab } from "../tabs/project-tab";
import { SkillsTab } from "../tabs/skills-tab";
import { ContactTab } from "../tabs/contact-tab";
import { BrowserChrome } from "../browser";
import { Sidebar } from "../sidebar";
import { StatusBar } from "../status-bar";

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
      {/* ── MAIN BROWSER WINDOW ── */}
      <AeroWindow
        id="portofolio"
        title="My Portfolio — Windows Internet Explorer"
        icon="/img/icons/edge.png">
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
    </section>
  );
};
