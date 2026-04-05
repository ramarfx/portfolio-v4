interface RepoStatusBarProps {
  totalCount: number;
  selectedRepo: string | null;
}

export function RepoStatusBar({ totalCount, selectedRepo }: RepoStatusBarProps) {
  return (
    <div
      className="flex items-center justify-between border-t border-blue-900/20 px-3 py-1 text-[10px] text-blue-900"
      style={{
        background:
          "linear-gradient(180deg, rgba(235,245,255,0.9) 0%, rgba(225,240,255,0.9) 100%)",
      }}
    >
      <span>{totalCount} repositories</span>
      <span>{selectedRepo ? `Selected: ${selectedRepo}` : "Ready"}</span>
    </div>
  );
}
