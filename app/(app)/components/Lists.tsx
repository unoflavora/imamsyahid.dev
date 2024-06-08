"use client";

import Image from "next/image";
import Link from "next/link";
import RightArrow from "@public/arrow-right.svg";
import useTextAnimator from "../hooks/useTextAnimator";
type List = {
  title: string;
  subtitle: string;
  category?: string;
  href: string;
};

type ListsProps = {
  title: string;
  href: string;
  list: List[];
  targetBlank?: boolean;
};

export default function Lists(props: ListsProps) {
  const title = useTextAnimator(props.title);

  return (
    <div className="w-full  flex flex-col gap-5">
      <div className="flex justify-between w-full">
        <h1 className="text-black dark:text-white font-semibold text-lg">
          {title}
        </h1>

        {props.list.length > 3 && (
          <Link href={props.href}>
            <p className="inline-flex justify-center items-center gap-1 font-semibold text-argent hover:text-black dark:hover:text-white fill-argent hover:fill-black dark:hover:fill-white transition-colors duration-150">
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
                target={props.targetBlank ? "_blank" : "_parent"}
                href={l.href}
                key={props.title + i}
                className="w-full group flex gap-3 items-end    text-argent hover:text-black hover:font-medium dark:hover:text-white  transition-colors duration-150"
              >
                <h1 className="max-w-[16rem] truncate">{l.title}</h1>
                <div className="min-w-[12%] lg:min-w-[20%] flex-grow flex-shrink-0 h-[.033rem] mb-1.5 bg-black/5 from-black to-white dark:bg-[#303030] group-hover:bg-gradient-to-r group-hover:animate-linear-bg dark:from-white dark:to-slate-800 transition-colors" />
                <div className="min-w-fit flex flex-wrap gap-3">
                  <h1>{l.category}</h1>
                  <h2>{l.subtitle}</h2>
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
