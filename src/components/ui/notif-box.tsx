import { cn } from "@/libs/utils";

export function NotifBox({
  children,
  variant = "yellow",
}: {
  children: React.ReactNode;
  variant?: "yellow" | "green" | "blue";
}) {
  const variants = {
    yellow:
      "bg-gradient-to-b from-yellow-50/85 to-yellow-100/75 border-yellow-400/50 text-yellow-900",
    green:
      "bg-gradient-to-b from-green-50/85 to-green-100/75 border-green-400/50 text-green-900",
    blue: "bg-gradient-to-b from-blue-50/85 to-blue-100/75 border-blue-400/50 text-blue-900",
  };
  return (
    <div
      className={cn(
        "mb-2.5 flex items-start gap-2 rounded-[5px] border p-2 text-[11px]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
        variants[variant],
      )}
    >
      {children}
    </div>
  );
}