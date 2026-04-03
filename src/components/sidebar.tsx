"use client";

import { TabId } from "@/types/types";
import { StatusDot } from "./ui/status-dot";
import { Divider } from "./ui/divider";
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
      <aside
        className={`
          fixed top-0 left-0 z-50 min-h-[80vh] w-64 h-full md:h-auto
          transform transition-transform duration-300
          md:relative md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-[120%]"}
        `}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(220,240,255,0.55) 100%)",
          boxShadow: "inset -1px 0 0 rgba(100,160,220,0.2)",
        }}>
        <div className="sticky top-0 h-fit border-r border-white/60">
          {/* Header */}
          <div className="border-b border-blue-400/30 px-2.5 py-1.5 text-[11px] font-bold text-blue-900 bg-gradient-blue flex items-center justify-between rounded-t-md">
            Navigation
            {/* Close Button (Mobile) */}
            <div className="flex justify-end p-2 md:hidden">
              <button onClick={onClose} className="text-sm text-blue-900">
                <X size={16} />
              </button>
            </div>
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
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={16}
                    height={16}
                  />
                  {item.label}
                </button>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1bh5Wf1mI2WvRlj97eXCyZl2A6e8DAlvm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={
                "flex w-full items-center gap-1.5 border-l-[3px] px-3 py-1.5 text-[11px] border-transparent text-blue-800 hover:border-blue-300 hover:bg-blue-100/20"
              }>
              <Image
                src={"/img/icons/file.png"}
                alt={"CV"}
                width={16}
                height={16}
              />
              Download CV
            </a>
          </nav>

          <Divider className="mx-2.5" />

          {/* Social Media */}
          <div className="px-2.5 pb-2.5">
            <p className="mb-1.5 text-[10px] font-bold uppercase text-blue-700/80">
              Connect With Me
            </p>

            <div className="grid grid-cols-3 gap-1.5">
              <a
                href="https://instagram.com/ramtxh"
                className="rounded-lg border border-blue-200/45 p-2 text-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(220,240,255,0.5) 100%)",
                }}>
                <SiInstagram size={16} className="mx-auto text-blue-500" />
              </a>
              <a
                href="https://github.com/ramarfx"
                className="rounded-lg border border-blue-200/45 p-2 text-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(220,240,255,0.5) 100%)",
                }}>
                <SiGithub size={16} className="mx-auto text-blue-500" />
              </a>
              <a
                href="https://linkedin.com/in/ramarfx"
                className="rounded-lg border border-blue-200/45 p-2 text-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(220,240,255,0.5) 100%)",
                }}>
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
