import { SIDEBAR_FAVORITES, SIDEBAR_FOLDERS } from "@/data/repos";

interface RepoSidebarProps {
  isCollapsed: boolean;
}

export function RepoSidebar({ isCollapsed }: RepoSidebarProps) {
  return (
    <aside
      className={[
        "overflow-y-auto border-r border-blue-900/15 transition-all duration-300",
        // Desktop: collapse by shrinking width
        isCollapsed ? "w-0 p-0 opacity-0" : "md:min-w-40 px-2 py-3",
        // Mobile: absolute overlay
        "md:relative",
      ].join(" ")}
      style={{
        background:
          "linear-gradient(180deg, rgba(240,245,252,0.6) 0%, rgba(230,240,255,0.6) 100%)",
      }}
    >
      <SidebarSection title="Favorites" items={SIDEBAR_FAVORITES} />
      <SidebarSection title="Folders" items={SIDEBAR_FOLDERS} />
    </aside>
  );
}

function SidebarSection({
  title,
  items,
}: {
  title: string;
  items: { icon: string; label: string }[];
}) {
  return (
    <div className="mb-4">
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.5px] text-blue-900">
        {title}
      </p>
      {items.map(({ icon, label }) => (
        <button
          key={label}
          className="flex w-full cursor-pointer items-center gap-2 rounded-[3px] px-2 py-1.5 text-left text-[11px] text-blue-900 transition-colors duration-150 hover:bg-blue-200/40"
        >
          <span>{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
