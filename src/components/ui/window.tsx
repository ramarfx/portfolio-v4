import { cn } from "@/libs/utils";
import WinBtn from "./window-button";
import Image from "next/image";
import { useWindow } from "@/context/window-manager";
import { motion, AnimatePresence } from "framer-motion";

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

  const window = windows.find((w) => w.id === id);
  const isOpen = window?.isOpen;

  return (
<AnimatePresence mode="sync">
  {isOpen && (
    <motion.section
      className="w-full relative z-2 px-3 py-4 md:mx-auto max-w-360"
      
      // OVERLAY ANIMATION
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
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
          className
        )}
      >
        {/* Titlebar */}
        <div className="flex h-8 items-center gap-1.5 border-b border-blue-300/40 px-2.5 rounded-[10px_10px_0_0] relative">
          {icon && (
            <Image src={icon} alt="Window Icon" width={16} height={16} />
          )}
          <span className="text-[11px] font-bold text-blue-900">
            {title}
          </span>

          <div className="ml-auto flex absolute top-0 right-2">
            <WinBtn type="minimize" onClick={() => closeWindow(id)} className="rounded-bl-lg" />
            <WinBtn type="maximize" />
            <WinBtn type="close" onClick={() => closeWindow(id)} className="rounded-br-lg" />
          </div>
        </div>

        {children}
      </motion.div>
    </motion.section>
  )}
</AnimatePresence>
  );
}
