"use client";
import { AeroWindow } from "../ui/window";

import { useEffect, useState } from "react";
import { Repo } from "@/data/repos";
import {
  RepoFileList,
  RepoMenuBar,
  RepoSidebar,
  RepoStatusBar,
  RepoToolbar,
} from "../repo";

export const RepoWindow = () => {
  const [repos, setRepos] = useState<Repo[]>();
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  useEffect(() => {
    fetch("/api/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const handleOpen = (repo: Repo) => {
    window.open(repo.url, "_blank");
  };

  return (
    <AeroWindow
      id="repository"
      title="File Explorer"
      icon="/img/icons/file-explorer.png">
      <RepoMenuBar />
      <RepoToolbar
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebar={() => setIsSidebarCollapsed((v) => !v)}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Main body */}
      <div className="flex bg-white h-[70svh]">
        <RepoSidebar isCollapsed={isSidebarCollapsed} />
        {/* Column headers */}
        <RepoFileList
          repos={repos ?? []}
          selectedRepo={selectedRepo}
          onSelect={(repo) => setSelectedRepo(repo.name)}
          onOpen={handleOpen}
          viewMode={viewMode}
        />
      </div>

      <RepoStatusBar
        totalCount={repos?.length ?? 0}
        selectedRepo={selectedRepo}
      />
    </AeroWindow>
  );
};
