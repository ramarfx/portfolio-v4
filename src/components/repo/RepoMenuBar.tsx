const MENU_ITEMS = ["File", "Edit", "View", "Tools", "Help"];

export function RepoMenuBar() {
  return (
    <div
      className="flex gap-1 border-b border-blue-900/15 px-2 py-1"
      style={{
        background:
          "linear-gradient(180deg, rgba(245,250,255,0.95) 0%, rgba(235,245,255,0.95) 100%)",
      }}
    >
      {MENU_ITEMS.map((item) => (
        <button
          key={item}
          className="cursor-pointer rounded-[3px] px-2 py-1 text-[11px] text-blue-900 transition-colors duration-150 hover:bg-blue-200/50"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
