import { cn } from "@/libs/utils";

export function Tag({
  children,
  color = "blue",
  className
}: {
  children: React.ReactNode;
  color?: "blue" | "green" | "aqua" | "yellow";
  className?: string;
}) {
  const colors = {
    blue: "to-blue-100/50 border-blue-400/30 text-blue-900",
    green: "to-green-100/50 border-green-400/30 text-green-900",
    aqua: "to-cyan-100/50 border-cyan-400/30 text-cyan-900",
    yellow: "to-yellow-100/50 border-yellow-400/30 text-yellow-900",
  };
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-0.5 text-[10px] font-medium bg-linear-180 from-transparent",
        colors[color], className
      )}
    >
      {children}
    </span>
  );
}
