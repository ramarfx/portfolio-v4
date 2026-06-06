"use client";

import { useWindow } from "@/context/window-manager";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ── Window entries shown in the taskbar ─────────────────────────── */
const TASKBAR_WINDOWS = [
  { id: "portofolio", label: "Portofolio", icon: "/img/icons/home.png" },
  { id: "repository", label: "File Explorer", icon: "/img/icons/file-explorer.png" },
  { id: "activity", label: "Notepad", icon: "/img/icons/notepad.png" },
];

/* ── System-tray quick-launch icons ─────────────────────────────── */
const TRAY_ICONS = [
  { icon: "/img/icons/mail.png", label: "Mail", href: "mailto:ramadina@example.com" },
  { icon: "/img/icons/linkedin.svg", label: "LinkedIn", href: "https://linkedin.com/in/ramarfx" },
  { icon: "/img/icons/gear.png", label: "Settings" },
];

/* ── Digital clock ───────────────────────────────────────────────── */
function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  const hh = time.getHours().toString().padStart(2, "0");
  const mm = time.getMinutes().toString().padStart(2, "0");
  const dateStr = time.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex flex-col items-center justify-center leading-none px-3 min-w-[64px]">
      <span className="text-white font-bold text-[12px] drop-shadow-sm">
        {hh}:{mm}
      </span>
      <span className="text-white/70 text-[9px] mt-0.5">{dateStr}</span>
    </div>
  );
}

/* ── Main Taskbar ───────────────────────────────────────────────── */
export function Taskbar() {
  const { windows, openWindow, closeWindow } = useWindow();
  const [startOpen, setStartOpen] = useState(false);

  /* Close Start menu on outside click */
  useEffect(() => {
    if (!startOpen) return;
    const close = () => setStartOpen(false);
    window.addEventListener("click", close, { once: true });
    return () => window.removeEventListener("click", close);
  }, [startOpen]);

  const isOpen = (id: string) => windows.find((w) => w.id === id)?.isOpen ?? false;

  const handleWindowBtn = (id: string) => {
    if (isOpen(id)) {
      closeWindow(id);
    } else {
      openWindow(id);
    }
  };

  return (
    <>
      {/* ── Start Menu ──────────────────────────────────────────────── */}
      {startOpen && (
        <div
          className="fixed bottom-[42px] left-0 z-50 flex rounded-tr-2xl overflow-hidden"
          style={{
            width: "480px",
            boxShadow: "4px -4px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.2)",
            backdropFilter: "blur(20px)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* LEFT panel — white, app list */}
          <div
            className="flex flex-col w-[260px] flex-shrink-0"
            style={{ background: "rgba(240,248,255,0.96)" }}
          >
            {/* Search bar at bottom */}
            <div className="flex-1 py-2">
              {TASKBAR_WINDOWS.map((win) => (
                <button
                  key={win.id}
                  onClick={() => { openWindow(win.id); setStartOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-800 text-[13px] hover:bg-blue-500 hover:text-white transition-colors text-left group"
                >
                  <Image src={win.icon} alt={win.label} width={24} height={24} className="object-contain flex-shrink-0" />
                  <span className="font-medium">{win.label}</span>
                </button>
              ))}
              {/* Divider */}
              <div className="my-1 border-t border-gray-200 mx-2" />
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-800 text-[13px] hover:bg-blue-500 hover:text-white transition-colors text-left">
                <Image src="/img/icons/gear.png" alt="Settings" width={24} height={24} className="object-contain flex-shrink-0" />
                <span className="font-medium">Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-800 text-[13px] hover:bg-blue-500 hover:text-white transition-colors text-left">
                <Image src="/img/icons/mail.png" alt="Mail" width={24} height={24} className="object-contain flex-shrink-0" />
                <span className="font-medium">Mail</span>
              </button>
            </div>

            {/* Search bar */}
            <div
              className="flex items-center gap-2 px-3 py-2"
              style={{ background: "rgba(180,210,240,0.5)", borderTop: "1px solid rgba(100,150,200,0.3)" }}
            >
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search programs and files"
                className="flex-1 bg-transparent text-[11px] text-gray-600 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* RIGHT panel — light blue, user header + nav */}
          <div
            className="flex flex-col flex-1"
            style={{
              background: "linear-gradient(180deg, rgba(120,185,240,0.85) 0%, rgba(50,130,210,0.92) 100%)",
              borderLeft: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            {/* User header */}
            <div
              className="flex flex-col items-center px-4 pt-4 pb-3"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)",
                borderBottom: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {/* Avatar large */}
              <div
                className="w-16 h-16 rounded-lg overflow-hidden mb-2"
                style={{
                  boxShadow: "0 0 0 2px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                <Image src="/img/user.png" alt="user" width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-sm leading-tight drop-shadow-md">Ramadina</div>
                <div className="text-white text-[10px] opacity-90 drop-shadow-sm font-medium">Full Stack Developer</div>
              </div>
            </div>

            {/* Nav items */}
            <div className="flex-1 py-1">
              {[
                { label: "Documents", icon: "/img/icons/file.png" },
                { label: "Pictures", icon: "/img/icons/Fax.png" },
                { label: "GitHub", icon: "/img/icons/folder.png", href: "https://github.com/ramarfx" },
                { label: "LinkedIn", icon: "/img/icons/linkedin.svg", href: "https://linkedin.com/in/ramarfx" },
                { label: "Portfolio Site", icon: "/img/icons/edge.png", href: "https://ramarfx.my.id" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-2 text-blue-100 text-[12px] hover:bg-white/10 transition-colors"
                >
                  <Image src={item.icon} alt={item.label} width={16} height={16} className="object-contain flex-shrink-0 opacity-90" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Shut down row */}
            <div
              className="flex items-center justify-between px-4 py-2.5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.2)" }}
            >
              <span className="text-white/50 text-[10px]">ramarfx.my.id</span>
              <button
                onClick={() => setStartOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1 rounded text-[11px] text-white/80 hover:bg-white/10 transition-colors"
              >
                <span>Close</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ── Taskbar bar ─────────────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 h-[42px] flex items-center"
        style={{
          /* Light sky-blue glossy — konsisten dengan warna Frutiger Aero */
          background:
            "linear-gradient(180deg, rgba(120,185,240,0.75) 0%, rgba(80,155,220,0.85) 48%, rgba(50,130,210,0.90) 49%, rgba(70,150,230,0.82) 100%)",
          backdropFilter: "blur(24px) saturate(2)",
          WebkitBackdropFilter: "blur(24px) saturate(2)",
          borderTop: "1px solid rgba(200,235,255,0.6)",
          boxShadow: "0 -1px 0 rgba(80,160,255,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* White gloss highlight strip — top edge */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0.2))",
          }}
        />
        {/* Glossy upper-half sheen */}
        <div
          className="absolute inset-x-0 top-0 h-[21px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 100%)",
          }}
        />

        {/* ── Start Button ───────────────────────────────────────────── */}
        <button
          onClick={(e) => { e.stopPropagation(); setStartOpen((v) => !v); }}
          className="relative flex items-center gap-1.5 h-full pl-3 pr-5 flex-shrink-0 group"
        >
          {/* Windows orb */}
          <Image src="/img/icons/vista-logo.png" alt="Start" width={50} height={50} className="object-contain" priority />
        </button>

        {/* ── Pinned window buttons ──────────────────────────────────── */}
        <div className="flex items-center gap-1 px-2 flex-1 h-full overflow-x-auto">
          {TASKBAR_WINDOWS.map((win) => {
            const active = isOpen(win.id);
            return (
              <button
                key={win.id}
                onClick={() => handleWindowBtn(win.id)}
                title={win.label}
                className="flex items-center gap-1.5 px-2 h-[30px] rounded text-white text-[11px] transition-all flex-shrink-0 max-w-[140px] drop-shadow-sm"
                style={{
                  background: active
                    ? "linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(180,220,255,0.20) 49%, rgba(120,190,255,0.35) 50%, rgba(160,210,255,0.25) 100%)"
                    : "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(200,230,255,0.08) 49%, rgba(120,180,240,0.15) 50%, rgba(160,210,255,0.10) 100%)",
                  border: active
                    ? "1px solid rgba(255,255,255,0.70)"
                    : "1px solid rgba(255,255,255,0.30)",
                  boxShadow: active
                    ? "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,120,255,0.15)"
                    : "inset 0 1px 0 rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                  minWidth: "90px",
                  textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                }}
              >
                <Image src={win.icon} alt={win.label} width={18} height={18} className="object-contain flex-shrink-0 drop-shadow" />
                <span className="truncate">{win.label}</span>
                {active && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-sm flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── System Tray ────────────────────────────────────────────── */}
        <div
          className="flex items-center h-full pl-2 flex-shrink-0"
        >

          {/* Separator */}
          <div className="w-px h-5 bg-white/20 mx-1" />

          {/* Clock */}
          <Clock />
        </div>
      </div>
    </>
  );
}
