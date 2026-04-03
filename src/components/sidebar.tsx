"use client";

import { TabId } from "@/types/types";
import { StatusDot } from "./ui/status-dot";
import { Divider } from "./ui/divider";
import { NAV_ITEMS, STATS } from "@/data/data";
import Image from "next/image";

interface SidebarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({
  activeTab,
  onTabChange,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          relative top-0 left-0 z-50 min-h-[80svh] w-64
          transform transition-transform duration-300
          md:sticky md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
        <div
          className="h-full overflow-hidden border-r border-white/60"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(220,240,255,0.55) 100%)",
            boxShadow: "inset -1px 0 0 rgba(100,160,220,0.2)",
          }}>
          {/* Close Button (Mobile) */}
          <div className="flex justify-end p-2 md:hidden">
            <button onClick={onClose} className="text-sm text-blue-900">
              ✖
            </button>
          </div>

          {/* Header */}
          <div
            className="border-b border-blue-400/30 px-2.5 py-1.5 text-[11px] font-bold text-blue-900 bg-gradient-blue">
            📁 Navigation
          </div>

          {/* Avatar */}
          <div className="px-3 py-3 text-center">
            <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl">
              <Image
                src="/img/user.png"
                alt="User Avatar"
                width={64}
                height={64}
              />
            </div>

            <p className="text-[12px] font-bold text-blue-900">
              Ramadina Al Muzthazam
            </p>

            <p className="mt-0.5 flex items-center justify-center gap-1 text-[10px] text-green-700">
              <StatusDot /> Online
            </p>
          </div>

          <Divider className="mx-2.5" />

          {/* Navigation */}
          <nav className="py-1">
            {NAV_ITEMS.map((item) => {
              const isActive = item.tabId === activeTab;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.tabId) {
                      onTabChange(item.tabId);
                      onClose(); // auto close di mobile
                    }
                  }}
                  className={[
                    "flex w-full items-center gap-1.5 border-l-[3px] px-3 py-1.5 text-[11px]",
                    isActive
                      ? "border-blue-500 bg-blue-100/30 font-bold text-blue-900"
                      : "border-transparent text-blue-800 hover:border-blue-300 hover:bg-blue-100/20",
                  ].join(" ")}>
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          <Divider className="mx-2.5" />

          {/* Stats */}
          <div className="px-2.5 pb-2.5">
            <p className="mb-1.5 text-[10px] font-bold uppercase text-blue-700/80">
              My Stats
            </p>

            <div className="grid grid-cols-2 gap-1.5">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-lg border border-blue-200/45 p-2 text-center">
                  <p className="text-[18px] font-bold text-blue-700">{value}</p>
                  <p className="text-[10px] text-blue-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
