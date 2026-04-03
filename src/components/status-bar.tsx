export function StatusBar() {
  return (
    <div
      className="flex items-center gap-3.5 border-t border-blue-300/40 px-2.5 py-0.75 text-[10px] text-blue-700"
      style={{
        background:
          "linear-gradient(180deg, rgba(200,225,255,0.7) 0%, rgba(170,205,245,0.65) 100%)",
      }}
    >
      <span className="flex items-center gap-1">🔒 Trusted Site</span>
      <span className="flex items-center gap-1">
        🌐 Internet | Protected Mode: On
      </span>
      <span className="ml-auto flex items-center gap-1">🔍 100% ▾</span>
    </div>
  );
}
