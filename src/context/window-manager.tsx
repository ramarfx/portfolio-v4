"use client";

import { createContext, useContext, useState } from "react";

type WindowState = {
  id: string;
  isOpen: boolean;
  isMaximized: boolean;
};

type WindowContextType = {
  windows: WindowState[];
  openWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  closeWindow: (id: string) => void;
};

const WindowContext = createContext<WindowContextType | null>(null);

export const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<WindowState[]>([]);

  const openWindow = (id: string) => {
    setWindows(prev => {
      const exists = prev.find(w => w.id === id);
        
      if (exists) {
        return prev.map(w =>
          w.id === id ? { ...w, isOpen: true, isMaximized: true } : w
        );
      }

      return [...prev, { id, isOpen: true, isMaximized: true }];
    });
  };

  const toggleMaximize = (id: string) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      )
    );
  };

  const closeWindow = (id: string) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, isOpen: false } : w
      )
    );
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, toggleMaximize, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error("useWindow must be used inside WindowProvider");
  return ctx;
};