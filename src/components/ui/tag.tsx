import { cn } from "@/libs/utils";

export function Tag({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "green" | "aqua";
}) {
  const colors = {
    blue: "bg-blue-100/50 border-blue-400/30 text-blue-900",
    green: "bg-green-100/50 border-green-400/30 text-green-900",
    aqua: "bg-cyan-100/50 border-cyan-400/30 text-cyan-900",
  };
  return (
    <span
      className={cn(
        "rounded-full border px-2 py-0.5 text-[10px] font-medium",
        colors[color],
      )}
    >
      {children}
    </span>
  );
}
