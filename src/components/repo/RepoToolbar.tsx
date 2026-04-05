"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  LayoutGrid,
  Menu,
  RefreshCcw,
} from "lucide-react";

interface RepoToolbarProps {
  isSidebarCollapsed: boolean;
  viewMode: string;
  onToggleSidebar: () => void;
  onViewModeChange: (mode: "list" | "grid") => void;
}

export function RepoToolbar({
  isSidebarCollapsed,
  onToggleSidebar,
  viewMode,
  onViewModeChange,
}: RepoToolbarProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-2 border-b border-blue-900/15 px-2 py-1.5"
      style={{
        background:
          "linear-gradient(180deg, rgba(250,252,255,0.95) 0%, rgba(240,245,252,0.95) 100%)",
      }}>
      {/* Nav buttons */}
      <button
        className={[
          "flex cursor-pointer items-center gap-1 rounded-[3px] px-2.5 py-1.25",
          "border border-blue-900/20 text-[11px] text-blue-900 transition-all duration-150",
          "hover:border-blue-900/40",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
        }}>
        <ArrowLeft size={14} />
      </button>
      <button
        className={[
          "flex cursor-pointer items-center gap-1 rounded-[3px] px-2.5 py-1.25",
          "border border-blue-900/20 text-[11px] text-blue-900 transition-all duration-150",
          "hover:border-blue-900/40",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
        }}>
        <ArrowRight size={14} />
      </button>
      <button
        className={[
          "flex cursor-pointer items-center gap-1 rounded-[3px] px-2.5 py-1.25",
          "border border-blue-900/20 text-[11px] text-blue-900 transition-all duration-150",
          "hover:border-blue-900/40",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
        }}>
        <ArrowUp size={14} />
      </button>
      <button
        className={[
          "flex cursor-pointer items-center gap-1 rounded-[3px] px-2.5 py-1.25",
          "border border-blue-900/20 text-[11px] text-blue-900 transition-all duration-150",
          "hover:border-blue-900/40",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
        }}>
        <RefreshCcw size={14} />
      </button>

      {/* Toggle sidebar — visible on mobile only */}
      <button
        className={[
          "flex cursor-pointer items-center gap-1 rounded-[3px] px-2.5 py-1.25 md:hidden",
          "border border-blue-900/20 text-[11px] text-blue-900 transition-all duration-150",
          "hover:border-blue-900/40",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
        }}
        onClick={onToggleSidebar}>
        {isSidebarCollapsed ? "☰ Show" : "✕ Hide"} Sidebar
      </button>

      {/* Address bar */}
      <input
        type="text"
        className="flex-1 rounded-[3px] border border-blue-900/30 bg-white px-2 py-1 text-[11px] text-blue-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] outline-none"
        value="C:\Users\Rama\Repositories"
        readOnly
      />

      {/* Search button */}
      <button
        className={[
          "flex cursor-pointer items-center gap-1 rounded-[3px] px-2.5 py-1.25",
          "border border-blue-900/20 text-[11px] text-blue-900 transition-all duration-150",
          "hover:border-blue-900/40",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
        }}>
        🔍 Search
      </button>

      {/* Separator */}
      <div className="h-5 w-px bg-blue-900/20" />

      {/* View mode toggle — List / Grid */}
      <div className="flex overflow-hidden rounded-[3px] border border-blue-900/20">
        <button
          title="List view"
          onClick={() => onViewModeChange("list")}
          className={[
            "flex cursor-pointer items-center px-2 py-1.25 text-blue-900 transition-all duration-150",
            "border-r border-blue-900/20",
            viewMode === "list"
              ? "shadow-[inset_0_1px_3px_rgba(0,60,120,0.2)]"
              : "hover:border-blue-900/40",
          ].join(" ")}
          style={{
            background:
              viewMode === "list"
                ? "linear-gradient(180deg, rgba(185,215,252,0.7) 0%, rgba(155,195,245,0.6) 100%)"
                : "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
          }}>
          <Menu size={14} />
        </button>
        <button
          title="Grid view"
          onClick={() => onViewModeChange("grid")}
          className={[
            "flex cursor-pointer items-center px-2 py-1.25 text-blue-900 transition-all duration-150",
            viewMode === "grid"
              ? "shadow-[inset_0_1px_3px_rgba(0,60,120,0.2)]"
              : "hover:border-blue-900/40",
          ].join(" ")}
          style={{
            background:
              viewMode === "grid"
                ? "linear-gradient(180deg, rgba(185,215,252,0.7) 0%, rgba(155,195,245,0.6) 100%)"
                : "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,245,252,0.9) 100%)",
          }}>
          <LayoutGrid size={14} />
        </button>
      </div>
    </div>
  );
}
