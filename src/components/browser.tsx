"use client";

import { TABS } from "@/data/data";
import type { TabId } from "@/types/types";
import { ArrowLeft, ArrowRight, Home, RefreshCcw } from "lucide-react";
import { GlossyButton } from "./ui/button";
import Image from "next/image";

interface BrowserChromeProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  setIsOpen: (open: boolean) => void;
}

export function BrowserChrome({ activeTab, onTabChange, setIsOpen }: BrowserChromeProps) {
  const activeFile = TABS.find((t) => t.id === activeTab)?.file ?? "index.html";

  const toolbarButtons = [
    {
      icon: <ArrowLeft size={16} />,
      label: "Back",
    },
    {
      icon: <ArrowRight size={16} />,
      label: "Forward",
    },
    {
      icon: <RefreshCcw size={16} />,
      label: "Refresh",
    },
    {
      icon: <Home size={16} />,
      label: "Home",
    },
  ];

  return (
    <>
      {/* IE Toolbar */}
      <div
        className="flex items-center gap-1 border-b border-blue-300/40 px-2.5 py-1"
        style={{
          background:
            "linear-gradient(180deg, #f0f8ff 0%, #dceeff 40%, #c8e4ff 100%)",
        }}>
        
        {toolbarButtons.map((btn, i) =>
          btn === null ? (
            <div key={i} className="mx-0.5 h-4.5 w-px bg-blue-300/40" />
          ) : (
            <button
              key={i}
              className="cursor-pointer rounded border border-transparent px-1 py-0.5 text-[11px] font-bold text-blue-800 transition-all duration-100 hover:border-blue-300 hover:bg-linear-to-b hover:from-white/90 hover:to-blue-100/70 hover:shadow-[0_1px_3px_rgba(0,80,160,0.15)]">
              {btn.icon}
              <span className="sr-only">{btn.label}</span>
            </button>
          ),
        )}

        {/* Address bar */}
        <input
          readOnly
          value={`https://www.ramarfx.my.id/${activeFile}`}
          className="mx-1 flex-1 rounded-[3px] border border-blue-300/60 bg-linear-to-b from-white to-blue-50 px-2 py-0.5 font-[Trebuchet_MS,sans-serif] text-[11px] text-blue-900 shadow-[inset_0_1px_2px_rgba(0,0,50,0.1)]"
        />
        <GlossyButton variant="green" className="hidden md:block px-2 py-0.5">
          Submit
        </GlossyButton>
        <div className="md:hidden px-2 py-0.5">
          <GlossyButton onClick={() => setIsOpen(true)}>
            ☰ Menu
          </GlossyButton>
        </div>
      </div>

      {/* Tab bar */}
      <div
        className="flex items-end gap-0.5 border-b border-blue-300/40 px-2.5 pt-1.5"
        style={{
          background:
            "linear-gradient(180deg, rgba(200,225,255,0.5), rgba(170,205,250,0.3))",
        }}>
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={[
                "relative top-px cursor-pointer rounded-t-[5px] border border-b-0 px-3.5 py-1.25",
                "mr-0.5 text-[11px] font-bold transition-all duration-100",
                isActive
                  ? "z-10 border-blue-400/45 bg-linear-to-b from-white/85 to-blue-50/70 text-blue-900"
                  : "border-blue-200/35 bg-linear-to-b from-white/50 to-blue-100/30 text-blue-700 hover:bg-linear-to-b hover:from-white/65 hover:to-blue-100/40",
              ].join(" ")}>
                <Image
                  src={tab.icon}
                  alt={`${tab.label} icon`}
                  width={16}
                  height={16}
                  className="inline-block mr-1.5"
                />
              {tab.label}
            </button>
          );
        })}
      </div>
    </>
  );
}
