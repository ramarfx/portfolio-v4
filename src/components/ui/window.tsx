import { cn } from "@/libs/utils";
import WinBtn from "./window-button";
import Image from "next/image";
import { useWindow } from "@/context/window-manager";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { PointerEvent, useEffect, useState } from "react";

interface AeroWindowProps {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  onOpen?: () => void;
}

export function AeroWindow({
  id,
  title,
  icon,
  children,
  className,
}: AeroWindowProps) {
  const { windows, closeWindow } = useWindow();
  const [position, setPosition] = useState({ x: 5, y: 5 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const windowState = windows.find((w) => w.id === id);
  const isOpen = windowState?.isOpen;

  const dragControls = useDragControls();

  const onPointerDown = (e: PointerEvent<HTMLDivElement>): void => {
    if (isMobile) return;
    dragControls.start(e);
  };

  return (
    <AnimatePresence mode="sync">
      {isOpen && (
        <motion.section
          className="w-full relative z-2 px-3 py-4 md:mx-auto max-w-360"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          drag={!isMobile}
          dragListener={false}
          dragControls={dragControls}
          dragMomentum={false}
          dragElastic={0}
          style={{
            x: position.x,
            y: position.y,
          }}
          onDragEnd={(e, info) => {
            setPosition({
              x: position.x + info.offset.x,
              y: position.y + info.offset.y,
            });
          }}>
          <motion.div
            // WINDOW ANIMATION
            initial={{ scale: 0, y: 0, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0, y: 0, opacity: 0 }}
            transition={{
              duration: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "relative rounded-[10px_10px_8px_8px] origin-bottom",
              "border border-white/70",
              "bg-[rgba(220,240,255,0.50)] backdrop-blur-[18px] saturate-150",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.25),0_8px_32px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.4)]",
              className,
            )}>
            {/* Titlebar */}
            <div
              onPointerDown={onPointerDown}
              className="flex h-8 items-center gap-1.5 border-b border-blue-300/40 px-2.5 rounded-[10px_10px_0_0] relative cursor-move">
              {icon && (
                <Image src={icon} alt="Window Icon" width={16} height={16} />
              )}
              <span className="text-xs font-bold text-blue-900 truncate">
                {title}
              </span>

              <div className="ml-auto flex absolute top-0 right-2">
                <WinBtn
                  type="minimize"
                  onClick={() => closeWindow(id)}
                  className="rounded-bl-lg"
                />
                <WinBtn type="maximize" />
                <WinBtn
                  type="close"
                  onClick={() => closeWindow(id)}
                  className="rounded-br-lg"
                />
              </div>
            </div>

            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
