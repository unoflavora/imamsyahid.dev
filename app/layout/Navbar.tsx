"use client";
import Icons from "@/public/nav";
import Link from "next/link";
import { headers } from "next/headers";
import SetLight from "./setLights";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const pages = ["home", "blogs", "projects", "stack", "contact"];

export default function Navbar({ currentPath }: { currentPath: string }) {
  const pathname = usePathname();

  const [selectedPage, setSelectedPage] = useState(pathname);

  useEffect(() => {
    if (pathname == null) setSelectedPage(currentPath);
    var path = pathname.split("/")[1];

    if (path === "") setSelectedPage("home");
    else setSelectedPage(path);
  }, [currentPath, pathname]);

  return (
    <div className="fixed bottom-4 w-full md:max-w-[24rem] px-3 py-2 md:px-0 md:bottom-4 ">
      <div className="flex justify-between gap-4 bg-white dark:bg-[#2F2F2F] backdrop-blur-xl rounded-full shadow-2xl py-2 px-4">
        {pages.map((page, i) => {
          let Icon = (Icons as any)[page];

          return (
            <Link
              aria-label={"click to navigate to: " + page}
              href={page === "home" ? "/" : `/${page}`}
              key={"item-icon " + page}
              className={`p-1.5 w-10 h-fit  flex justify-center items-center ${
                selectedPage == page
                  ? "bg-black/80 dark:bg-[#D6D6D6]"
                  : "bg-none"
              }  rounded-full group`}
            >
              <div
                className={`w-7 h-7 flex justify-center items-center ${
                  selectedPage == page
                    ? "fill-white dark:fill-black"
                    : "fill-[rgb(136,136,136)]"
                }`}
              >
                <Icon />
              </div>
              <span className="absolute hidden bg-black dark:bg-argent text-white py-1 px-3 rounded-full -top-[60%] [@media(any-hover:hover)]:group-hover:bounce-fade-in capitalize ">
                {page}
              </span>
            </Link>
          );
        })}
        <SetLight />
      </div>
    </div>
  );
}
