"use client";

import { useEffect, useState } from "react";
import { AeroWindow } from "../ui/window";

export function ActivityWindow() {
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/activity")
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        setLoading(false);
      });
  }, []);

  return (
    <AeroWindow
      id="activity"
      title="My activity — Notepad"
      icon="/img/icons/file.png">

      {/* Menu Bar */}
      <div className="bg-gray-100 border-b border-gray-400 text-[12px] px-2 py-1 flex gap-4">
        <span>File</span>
        <span>Edit</span>
        <span>Format</span>
        <span>View</span>
        <span>Help</span>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white p-2 overflow-scroll font-mono text-[12px] whitespace-pre-wrap max-h-[80dvh]">
        {loading ? (
          <span>Loading...</span>
        ) : (
          logs.map((log, i) => <div key={i}>{log}</div>)
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-100 border-t border-gray-400 text-[11px] px-2 py-1">
        Ln {logs.length}, Col 1
      </div>
    </AeroWindow>
  );
}
