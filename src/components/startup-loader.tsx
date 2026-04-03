"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StartupLoader() {
  const [phase, setPhase] = useState<"loading" | "ready" | "done">("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("ready");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "ready") return;

    const handleClick = () => {
      const audio = new Audio("/sounds/vista.mp3");
      // audio.volume = 0.5;
      audio.play().catch(() => {});

      setPhase("done");
    };

    window.addEventListener("click", handleClick, { once: true });

    return () => window.removeEventListener("click", handleClick);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[url('/img/bg-vista.png')] bg-cover bg-center transition-opacity duration-700`}
    >
      <div className="text-center select-none">
        {/* Avatar */}
        <div
          className="relative w-32 h-32 rounded-2xl p-1 mx-auto mb-5"
          style={{
            background: "linear-gradient(145deg, #dfe4e8, #bfc7cd)",
            boxShadow:
              "0 6px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <div
            className="relative w-full h-full rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "inset 0 2px 4px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(255,255,255,0.4)",
            }}
          >
            <Image
              src="/img/user.png"
              alt="avatar"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />

            {/* Gloss */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 40%, transparent 60%)",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="mb-6 text-white text-2xl font-bold tracking-wider transition-all duration-300">
          {phase === "loading"
            ? "Starting Portfolio..."
            : "Click anywhere to continue"}
        </div>

        {/* Loading bar (hilang saat ready) */}
        {phase === "loading" && (
          <div className="relative h-2 w-64 overflow-hidden rounded bg-white/20 mx-auto">
            <div className="absolute inset-0 animate-loading bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
        )}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading {
          animation: loading 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
}