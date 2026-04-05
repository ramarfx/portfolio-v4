import { useWindow } from "@/context/window-manager";
import Image from "next/image";
import React from "react";

type Params = {
  id: string;
  icon: string;
  text: string;
};

export const DesktopShortcut = (params: Params) => {
  const { openWindow } = useWindow();

  return (
    <button
      className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/20 w-30 h-auto rounded py-2"
      onClick={() => openWindow(params.id)}>
      <Image
        src={params.icon}
        alt="desktop"
        width={200}
        height={200}
        className="size-20"
      />
      <p className="text-white text-center">{params.text}</p>
    </button>
  );
};
