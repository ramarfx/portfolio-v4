"use client";

import { TabId } from "@/types/types";
import { useEffect, useState } from "react";
import { StatusDot } from "./ui/status-dot";
import { Divider } from "./ui/divider";
import { NAV_ITEMS, STATS } from "@/data/data";
import Image from "next/image";

interface SidebarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [counter, setCounter] = useState(4271);

  useEffect(() => {
    let n = 4271;
    const id = setInterval(() => {
      n++;
      setCounter(n);
      if (n >= 4279) clearInterval(id);
    }, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="overflow-hidden rounded-lg border-r border-white/60"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(220,240,255,0.55) 100%)",
        boxShadow: "inset -1px 0 0 rgba(100,160,220,0.2)",
      }}
    >
      {/* Header */}
      <div
        className="border-b border-blue-400/30 px-2.5 py-1.5 text-[11px] font-bold text-blue-900 [text-shadow:0_1px_0_rgba(255,255,255,0.8)]"
        style={{
          background:
            "linear-gradient(180deg, rgba(100,170,255,0.5) 0%, rgba(60,130,220,0.4) 100%)",
        }}
      >
        📁 Navigation
      </div>

      {/* MSN-style Avatar */}
      <div className="px-3 py-3 text-center">
        <div
          className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 border-white/80 text-5xl"
          style={{
            background:
              "linear-gradient(135deg, #a8d8f0 0%, #5ab8e8 40%, #28a0d8 60%)",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          <Image
            src="/img/user.png"
            alt="User Avatar"
            width={64}
            height={64}
          />
          {/* Gloss overlay */}
          <span
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 50%)",
            }}
          />
        </div>
        <p className="text-[12px] font-bold text-blue-900 [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
          Ramadina Al Muzthazam
        </p>
        <p className="mt-0.5 flex items-center justify-center gap-1 text-[10px] text-green-700">
          <StatusDot /> Online
        </p>

        {/* Social buttons */}
        <div className="mt-2 flex justify-center gap-1.5">
          {[
            { bg: "from-blue-500 to-blue-700", label: "in" },
            { bg: "from-sky-400 to-sky-600",  label: "𝕏" },
            { bg: "from-green-400 to-green-600", label: "⌥" },
            { bg: "from-orange-400 to-orange-600", label: "◉" },
          ].map(({ bg, label }) => (
            <button
              key={label}
              className={`relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/60 bg-linear-to-b ${bg} text-[11px] font-bold text-white transition-transform duration-150 hover:scale-110`}
              style={{
                boxShadow:
                  "0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 50%)",
                }}
              />
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <Divider className="mx-2.5" />

      {/* Nav tree */}
      <nav className="py-1">
        {NAV_ITEMS.map((item) => {
          const isActive = item.tabId === activeTab;
          return (
            <button
              key={item.label}
              onClick={() => item.tabId && onTabChange(item.tabId)}
              className={[
                "flex w-full cursor-pointer items-center gap-1.5 border-l-[3px] px-3 py-1.25",
                "text-left text-[11px] transition-all duration-100",
                isActive
                  ? "border-blue-500 bg-linear-to-r from-blue-200/25 to-blue-100/5 font-bold text-blue-900"
                  : "border-transparent text-blue-800 hover:border-blue-300 hover:bg-linear-to-r hover:from-blue-200/30 hover:to-blue-100/10",
              ].join(" ")}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      <Divider className="mx-2.5" />

      {/* Stats */}
      <div className="px-2.5 pb-2.5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.5px] text-blue-700/80">
          My Stats
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-lg border border-blue-200/45 p-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(220,240,255,0.5) 100%)",
              }}
            >
              <p
                className="text-[22px] font-bold leading-none"
                style={{
                  background: "linear-gradient(180deg, #2080e0, #0050b0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="mt-0.5 text-[10px] text-blue-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
