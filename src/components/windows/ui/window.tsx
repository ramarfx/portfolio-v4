import { cn } from "@/libs/utils";
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
          className="w-full relative z-2 px-3 py-4 md:mx-auto max-w-360 background"
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
              "window glass active shadow-xl",
              className,
            )}>
            {/* Titlebar */}
            <div
              onPointerDown={onPointerDown}
              className="title-bar cursor-move relative flex items-center">
              {icon && (
                <Image src={icon} alt="Window Icon" width={16} height={16} className="mr-1 inline-block" />
              )}
              <div className="title-bar-text">
                {title}
              </div>

              <div className="title-bar-controls">
                <button aria-label="Minimize" className="hover:cursor-pointer" onClick={() => closeWindow(id)}></button>
                <button aria-label="Maximize" className="hover:cursor-pointer"></button>
                <button aria-label="Close" className="hover:cursor-pointer" onClick={() => closeWindow(id)}></button>
              </div>
            </div>

            <div className="window-body">
              {children}
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
