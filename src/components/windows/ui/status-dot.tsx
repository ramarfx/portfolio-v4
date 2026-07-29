export function StatusDot() {
  return (
    <span
      className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full border border-green-700/30"
      style={{
        background: "radial-gradient(circle at 35% 35%, #80ff60, #20c020)",
        boxShadow: "0 0 4px rgba(0,200,0,0.5)",
      }}
    />
  );
}