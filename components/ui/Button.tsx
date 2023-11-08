import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Button(
  props: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
) {
  return (
    <button
      className={cn(
        "px-4 py-1.5 inline-flex gap-2 bg-[#303030] hover:bg-[#303030]/80 w-fit rounded-lg text-white font-semibold",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
