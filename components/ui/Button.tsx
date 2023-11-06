import { ReactNode } from "react";

export default function Button(props: { children: ReactNode }) {
  return (
    <button className="px-4 py-1.5 inline-flex gap-2 bg-[#303030] hover:bg-[#303030]/80 w-fit rounded-lg text-white font-semibold">
      {props.children}
    </button>
  );
}
