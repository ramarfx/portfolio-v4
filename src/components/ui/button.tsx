import { cn } from "@/libs/utils";

type ButtonVariant = "blue" | "green" | "silver" | "aqua";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  blue: [
    "bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700",
    "text-white border-blue-400/40",
    "shadow-[0_2px_8px_rgba(0,100,200,0.35),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(0,0,0,0.12)]",
    "hover:shadow-[0_4px_14px_rgba(0,100,200,0.45),inset_0_1px_0_rgba(255,255,255,0.55)]",
    "text-shadow-[0_1px_1px_rgba(0,0,0,0.25)]",
  ].join(" "),
  green: [
    "bg-gradient-to-b from-green-400 via-green-500 to-green-700",
    "text-white border-green-500/40",
    "shadow-[0_2px_8px_rgba(0,120,0,0.3),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(0,0,0,0.12)]",
    "hover:shadow-[0_4px_14px_rgba(0,120,0,0.4),inset_0_1px_0_rgba(255,255,255,0.55)]",
  ].join(" "),
  silver: [
    "bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300",
    "text-slate-700 border-slate-400/40",
    "shadow-[0_2px_8px_rgba(80,100,140,0.2),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.08)]",
    "hover:shadow-[0_4px_14px_rgba(80,100,140,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]",
  ].join(" "),
  aqua: [
    "bg-gradient-to-b from-cyan-400 via-teal-500 to-teal-700",
    "text-white border-teal-400/40",
    "shadow-[0_2px_8px_rgba(0,130,130,0.3),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(0,0,0,0.12)]",
    "hover:shadow-[0_4px_14px_rgba(0,130,130,0.4),inset_0_1px_0_rgba(255,255,255,0.55)]",
  ].join(" "),
};

interface GlossyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md";
  as?: "button" | "a";
  href?: string;
}

export function GlossyButton({
  variant = "blue",
  size = "md",
  className,
  children,
  as: Tag = "button",
  href,
  ...props
}: GlossyButtonProps) {
  const base = cn(
    "relative inline-flex items-center gap-1.5 cursor-pointer",
    "rounded-full border font-bold font-[Trebuchet_MS,Tahoma,Verdana,sans-serif]",
    "overflow-hidden transition-all duration-150 active:translate-y-px select-none",
    "hover:-translate-y-0.5",
    size === "sm" ? "px-3 py-1 text-[10px]" : "px-4 py-1.5 text-[11px]",
    BUTTON_VARIANTS[variant],
    className,
  );

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.1) 55%, transparent 55%)",
        }}
      />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </>
  );

  if (Tag === "a") {
    return (
      <a href={href ?? "#"} className={base}>
        {content}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {content}
    </button>
  );
}