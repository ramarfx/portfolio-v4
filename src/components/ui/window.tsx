import { cn } from "@/libs/utils";
import WinBtn from "./window-button";

interface AeroWindowProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export function AeroWindow({
  title,
  icon,
  children,
  className,
  onClose,
}: AeroWindowProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[10px_10px_8px_8px]",
        "border border-white/70",
        "bg-[rgba(220,240,255,0.55)] backdrop-blur-[18px] saturate-150",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.25),0_8px_32px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.4)]",
        "transition-shadow duration-200",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.65),0_4px_8px_rgba(0,0,0,0.2),0_12px_40px_rgba(0,0,0,0.18),0_0_24px_rgba(80,160,255,0.15),inset_0_0_0_1px_rgba(255,255,255,0.5)]",
        className,
      )}
    >
      {/* Titlebar */}
      <div
        className="flex h-8 items-center gap-1.5 border-b border-blue-300/40 px-2.5"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(190,225,255,0.75) 40%, rgba(140,200,255,0.65) 60%, rgba(160,215,255,0.70) 100%)",
        }}
      >
        {icon && <span className="text-sm">{icon}</span>}
        <span className="text-[11px] font-bold text-blue-900 [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
          {title}
        </span>
        <div className="ml-auto flex gap-1">
          <WinBtn type="minimize" />
          <WinBtn type="maximize" />
          <WinBtn type="close" onClick={onClose} />
        </div>
      </div>
      {children}
    </div>
  );
}