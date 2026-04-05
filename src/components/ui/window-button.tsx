import { cn } from "@/libs/utils";

export default function WinBtn({
  type,
  onClick,
  className
}: {
  type: "minimize" | "maximize" | "close";
  onClick?: () => void;
  className?: string
}) {
  const base =
    "relative flex px-5 py-1.5 cursor-pointer items-center justify-center overflow-hidden border border-black/25 text-[9px] font-bold leading-none transition-[filter] duration-100 hover:brightness-115 select-none";
  const variants = {
    minimize: "bg-gradient-to-b from-slate-200 to-slate-300 text-slate-700",
    maximize: "bg-gradient-to-b from-slate-200 to-slate-300 text-slate-700",
    close: "bg-gradient-to-b from-red-400 to-red-600 text-white",
  };
  const labels = { minimize: "_", maximize: "□", close: "✕" };

  return (
    <button className={cn(base, variants[type], className)} onClick={onClick}>
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 50%)",
        }}
      />
      <span className="relative font-bold">{labels[type]}</span>
    </button>
  );
}