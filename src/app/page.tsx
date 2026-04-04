"use client";

import { DesktopShortcut } from "@/components/ui/desktop-shortcut";
import { PortfolioWindow } from "@/components/windows/portfolio-window";

export default function Home() {

  return (
    <main className="w-full min-h-screen">
      {/* desktop */}
      <div className="absolute inset-10 z-0">
        <DesktopShortcut id="portofolio" icon="/img/icons/system-information.png" text="My Portfolio" />
      </div>
      <PortfolioWindow />
    </main>
  );
}
