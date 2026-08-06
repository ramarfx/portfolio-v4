"use client";

import { TabId } from "@/types/types";
import { StatusDot } from "./windows/ui/status-dot";
import { Divider } from "./windows/ui/divider";
import { NAV_ITEMS } from "@/data/data";
import Image from "next/image";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { X } from "lucide-react";

interface SidebarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activeTab, onTabChange, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-[calc(100vh-42px)] w-64 max-w-[80vw] overflow-y-auto
          transform transition-all duration-300 ease-in-out
          md:relative md:top-auto md:left-auto md:z-auto md:h-auto md:w-64 md:max-w-none md:translate-x-0 md:opacity-100 md:pointer-events-auto md:overflow-visible
          ${
            isOpen
              ? "translate-x-0 opacity-100 pointer-events-auto shadow-2xl"
              : "-translate-x-full opacity-0 pointer-events-none md:shadow-none"
          }
        `}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(220,240,255,0.75) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col min-h-full border-r border-white/60">
          {/* Header */}
          <div className="border-b border-blue-400/30 px-3 py-2 text-[11px] font-bold text-blue-900 bg-gradient-blue flex items-center justify-between rounded-t-md">
            <span>Navigation</span>
            {/* Close Button (Mobile) */}
            <button
              onClick={onClose}
              className="p-1 rounded text-blue-900 hover:bg-blue-200/50 transition-colors md:hidden"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Avatar */}
          <div className="px-3 py-3 text-center">
            <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl shadow-xs border border-white/70">
              <Image src="/img/mii-profile.png" alt="User Avatar" width={100} height={100} />
            </div>

            <p className="text-[12px] font-bold text-blue-900">Ramadina Al Muzthazam</p>

            <p className="mt-0.5 flex items-center justify-center gap-1 text-[10px] text-green-700 font-medium">
              <StatusDot /> Online
            </p>
          </div>

          <Divider className="mx-2.5" />

          {/* Navigation */}
          <nav className="py-1 flex-1">
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
                    "flex w-full items-center gap-2 border-l-[3px] px-3.5 py-2 text-[12px] transition-all cursor-pointer",
                    isActive
                      ? "border-blue-500 bg-blue-100/50 font-bold text-blue-900 shadow-xs"
                      : "border-transparent text-blue-800 hover:border-blue-300 hover:bg-blue-100/30",
                  ].join(" ")}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <a
              href="https://docs.google.com/document/d/1f-NoblChbnZom8KwiuL7IV2tz4sS_cGY-6h8uULgmIc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-2 border-l-[3px] border-transparent px-3.5 py-2 text-[12px] text-blue-800 hover:border-blue-300 hover:bg-blue-100/30 transition-all"
            >
              <Image
                src="/img/icons/file.webp"
                alt="CV"
                width={16}
                height={16}
                className="shrink-0"
              />
              <span>Download CV</span>
            </a>
          </nav>

          <Divider className="mx-2.5" />

          {/* Social Media */}
          <div className="px-3 pb-4 pt-1">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-blue-700/80">
              Connect With Me
            </p>

            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://instagram.com/ramtxh"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-blue-200/50 p-2 text-center transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--aero-social-card)" }}
              >
                <SiInstagram size={16} className="mx-auto text-blue-500" />
              </a>
              <a
                href="https://github.com/ramarfx"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-blue-200/50 p-2 text-center transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--aero-social-card)" }}
              >
                <SiGithub size={16} className="mx-auto text-blue-500" />
              </a>
              <a
                href="https://linkedin.com/in/ramarfx"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-blue-200/50 p-2 text-center transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--aero-social-card)" }}
              >
                <Image
                  src="/img/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
