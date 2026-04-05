"use client";

import { DesktopShortcut } from "@/components/ui/desktop-shortcut";
import { ActivityWindow } from "@/components/windows/notepad-window";
import { PortfolioWindow } from "@/components/windows/portfolio-window";
import { RepoWindow } from "@/components/windows/repo-window";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* desktop */}
      <div className="absolute top-10 left-10 z-0 grid grid-cols-2">
        <DesktopShortcut
          id="portofolio"
          icon="/img/icons/system-information.png"
          text="My Portfolio"
        />

        <DesktopShortcut
          id="repository"
          icon="/img/icons/file.png"
          text="File Explorer"
        />
        <DesktopShortcut
          id="activity"
          icon="/img/icons/notepad.png"
          text="Log activity"
        />
      </div>

      {/* window */}
      <PortfolioWindow />
      <RepoWindow />
      <ActivityWindow/>
    </main>
  );
}
