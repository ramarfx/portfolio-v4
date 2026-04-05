import { WindowIcon } from "./icons";

interface RepoTitleBarProps {
  title: string;
}

export function RepoTitleBar({ title }: RepoTitleBarProps) {
  return (
    <div
      className="flex items-center justify-between border-b border-white/60 px-2 py-1.5"
      style={{
        background:
          "linear-gradient(180deg, rgba(185,215,252,0.95) 0%, rgba(155,195,245,0.95) 50%, rgba(125,175,240,0.95) 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.1)",
      }}
    >
      {/* Icon + Title */}
      <div className="flex flex-1 items-center gap-2">
        <WindowIcon className="h-[18px] w-[18px] text-blue-900" />
        <span
          className="text-[12px] font-semibold text-blue-900"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
        >
          {title}
        </span>
      </div>

      {/* Window Controls */}
      <div className="flex gap-0.5">
        {[
          { label: "−", title: "Minimize" },
          { label: "□", title: "Maximize" },
          { label: "✕", title: "Close", isClose: true },
        ].map(({ label, title, isClose }) => (
          <button
            key={title}
            title={title}
            className={[
              "flex h-[22px] w-6 cursor-pointer items-center justify-center",
              "rounded-[3px] border border-blue-900/30 text-[10px] font-bold text-blue-900",
              "transition-all duration-150",
              "shadow-[0_1px_2px_rgba(0,0,0,0.1)]",
              isClose
                ? "hover:border-red-400/50 hover:bg-gradient-to-b hover:from-red-400/90 hover:to-red-500/90 hover:text-white"
                : "hover:border-blue-400/60",
            ].join(" ")}
            style={{
              background: isClose
                ? undefined
                : "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(225,235,250,0.9) 50%, rgba(200,220,245,0.9) 100%)",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
