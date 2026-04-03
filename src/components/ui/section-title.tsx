import { cn } from "@/libs/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-t-[5px] border border-blue-400/40 px-2.5 py-1.25",
        "text-[11px] font-bold text-blue-900 [text-shadow:0_1px_0_rgba(255,255,255,0.7)]",
        className,
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(60,140,255,0.45) 0%, rgba(30,100,220,0.35) 100%)",
      }}
    >
      {children}
    </div>
  );
}