import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Button(
  props: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
) {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-1.5 inline-flex gap-2  w-fit rounded-lg transition-colors bg-[#ebebeb] hover:bg-black/20 text-black font-medium dark:font-semibold dark:text-white dark:bg-[#303030] dark:hover:bg-[#303030]/80 ",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
