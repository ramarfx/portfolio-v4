import Image from "next/image";
import { SectionTitle } from "../ui/section-title";
import type { Repo } from "@/data/repos";

interface RepoFileListProps {
  repos: Repo[];
  selectedRepo: string | null;
  onSelect: (repo: Repo) => void;
  onOpen: (repo: Repo) => void;
  viewMode: "list" | "grid";
}

const COL_GRID = "grid grid-cols-[2fr_1fr_0.5fr] md:grid-cols-[1fr_2fr_1fr_1fr]";

export function RepoFileList({
  repos,
  selectedRepo,
  onSelect,
  onOpen,
  viewMode,
}: RepoFileListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* ================= LIST VIEW ================= */}
      {viewMode === "list" && (
        <>
          {/* Column headers */}
          <SectionTitle
            className={`${COL_GRID} gap-2 px-3 py-2 text-[11px] sticky top-0 from-white`}>
            <span>Name</span>
            <span className="hidden md:block">Description</span>
            <span>Date Modified</span>
            <span>Size</span>
          </SectionTitle>

          {repos.map((repo) => {
            const isSelected = selectedRepo === repo.name;

            return (
              <div
                key={repo.name}
                className={[
                  `${COL_GRID} gap-2 border-b border-blue-900/5 px-3 py-1.5`,
                  "cursor-pointer text-[11px] text-blue-900 transition-all duration-100",
                  isSelected
                    ? "border border-blue-900/30 border-l-[3px] border-l-blue-700/60 -ml-0.5"
                    : "hover:bg-linear-to-r hover:from-blue-200/30 hover:to-blue-100/15",
                ].join(" ")}
                style={
                  isSelected
                    ? {
                        background:
                          "linear-gradient(90deg, rgba(185,215,252,0.6) 0%, rgba(155,195,245,0.4) 100%)",
                      }
                    : undefined
                }
                onClick={() => onSelect(repo)}
                onDoubleClick={() => onOpen(repo)}
              >
                {/* Name */}
                <div className="flex items-center gap-2 overflow-hidden">
                  <Image
                    src={"/img/icons/folder-closed.png"}
                    alt="file icon"
                    width={16}
                    height={16}
                    className="w-5 h-auto"
                  />
                  <span className="truncate">{repo.name}</span>
                </div>

                <span className="truncate hidden md:block">{repo.description}</span>
                <span className="text-blue-700/80">{repo.updated}</span>
                <span className="truncate">{repo.size}</span>
              </div>
            );
          })}
        </>
      )}

      {/* ================= GRID VIEW ================= */}
      {viewMode === "grid" && (
        <div className="p-3 grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-3">
          {repos.map((repo) => {
            const isSelected = selectedRepo === repo.name;

            return (
              <div
                key={repo.name}
                onClick={() => onSelect(repo)}
                onDoubleClick={() => onOpen(repo)}
                className={[
                  "flex flex-col items-center justify-start p-2",
                  "cursor-pointer text-[11px] text-blue-900",
                  "border border-transparent",
                  isSelected
                    ? "border-blue-700 bg-blue-200/40"
                    : "hover:bg-blue-100/30",
                ].join(" ")}
              >
                <Image
                  src={"/img/icons/folder-closed.png"}
                  alt="file icon"
                  width={32}
                  height={32}
                  className="w-10 h-auto mb-1"
                />

                <span className="text-center break-words leading-tight">
                  {repo.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}