"use client";

import { DesktopShortcut } from "@/components/ui/desktop-shortcut";
import { PortfolioWindow } from "@/components/windows/portfolio-window";
import { RepoWindow } from "@/components/windows/repo-window";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* desktop */}
      <div className="absolute top-10 left-10 z-0 grid grid-cols-2 gap-5">
        <DesktopShortcut
          id="portofolio"
          icon="/img/icons/system-information.png"
          text="My Portfolio"
        />

        <DesktopShortcut
          id="repository"
          icon="/img/icons/file-explorer.png"
          text="File Explorer"
        />
      </div>

      {/* window */}
      <PortfolioWindow />
      <RepoWindow />
    </main>
  );
}
