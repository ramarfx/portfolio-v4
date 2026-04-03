import { cn } from "@/libs/utils";

export function SectionBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-b-[5px] border border-t-0 border-blue-300/30 bg-white/45 p-3",
        "mb-3",
        className,
      )}
    >
      {children}
    </div>
  );
}