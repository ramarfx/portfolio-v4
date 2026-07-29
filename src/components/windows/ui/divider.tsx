import { cn } from "@/libs/utils";

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("my-3 h-px", className)}
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(100,160,255,0.4) 20%, rgba(100,160,255,0.6) 50%, rgba(100,160,255,0.4) 80%, transparent)",
      }}
    />
  );
}