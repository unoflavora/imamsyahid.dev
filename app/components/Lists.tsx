"use client";

import Image from "next/image";
import Link from "next/link";
import useTextAnimator from "../../hooks/useTextAnimator";
import RightArrow from "@/public/arrow-right.svg";

type List = {
  title: string;
  subtitle: string;
  category?: string;
  href: string;
};

type ListsProps = { title: string; href: string; list: List[] };

export default function Lists(props: ListsProps) {
  const title = useTextAnimator(props.title);

  return (
    <div className="w-full max-md:max-w-[90vw] flex flex-col gap-5">
      <div className="flex justify-between w-full">
        <h1 className="text-white font-semibold text-lg">{title}</h1>

        {props.list.length > 3 && (
          <Link href={props.href}>
            <p className="inline-flex justify-center items-center gap-1 font-semibold text-argent hover:text-white fill-argent hover:fill-white transition-colors duration-150">
              All <RightArrow className="w-4 h-4" />
            </p>
          </Link>
        )}
      </div>

      <div className=" w-full flex flex-col gap-3 text-[.9rem] md:text-base">
        {props.list.map(
          (l, i) =>
            i <= 2 && (
              <Link
                href={l.href}
                key={props.title + i}
                className="w-full group flex gap-3 items-end    text-argent hover:text-white  transition-colors duration-150"
              >
                <h1 className="truncate">{l.title}</h1>
                <div className="min-w-[12%] lg:min-w-[20%] flex-grow flex-shrink-0 h-[.033rem] mb-1.5 bg-[#303030] group-hover:bg-gradient-to-r group-hover:animate-linear-bg from-white to-slate-800 transition-colors" />
                <div className="flex flex-wrap gap-3">
                  <h1>{l.category}</h1>
                  <h2>{l.subtitle}</h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
