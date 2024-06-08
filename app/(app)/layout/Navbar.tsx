"use client";
import Icons from "../../../public/nav";
import Link from "next/link";
import SetLight from "./setLights";
import { usePathname } from "next/navigation";
const pages = ["/", "/blogs", "/projects", "/stack", "/contact"];

export default function Navbar() {
  const pathname = usePathname();

  if (pathname == null) return;

  var currentPage = pathname.split("/")[1];
  if (currentPage == "") currentPage = "home";

  return (
    <div className="fixed bottom-4 w-full md:max-w-[24rem] px-3 py-2 md:px-0 md:bottom-4 ">
      <div className="flex justify-between gap-4 bg-white dark:bg-[#2F2F2F] backdrop-blur-xl rounded-full shadow-2xl py-2 px-4">
        {pages.map((page, i) => {
          var pageTitle = page.replace("/", "");
          if (pageTitle == "") pageTitle = "home";

          let Icon = (Icons as any)[pageTitle];

          return (
            <Link
              prefetch={true}
              aria-label={"click to navigate to: " + page}
              href={page}
              key={"item-icon " + page}
              className={`p-1.5 w-10 h-fit  flex justify-center items-center ${
                currentPage == pageTitle
                  ? "bg-black/80 dark:bg-[#D6D6D6]"
                  : "bg-none"
              }  rounded-full group`}
            >
              <div
                className={`w-7 h-7 flex justify-center items-center ${
                  currentPage == pageTitle
                    ? "fill-white dark:fill-black"
                    : "fill-[rgb(136,136,136)]"
                }`}
              >
                <Icon />
              </div>
              <span className="absolute hidden bg-black dark:bg-argent text-white py-1 px-3 rounded-full -top-[60%] [@media(any-hover:hover)]:group-hover:bounce-fade-in capitalize ">
                {pageTitle}
              </span>
            </Link>
          );
        })}
        <SetLight />
      </div>
    </div>
  );
}
