"use client";

import React, { useEffect, useState } from "react";
import Icons from "@/public/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = ["home", "blog", "products", "projects", "stack", "contact"];

export default function Navbar() {
  const [selected, setSelected] = useState(pages[0]);
  const pathName = usePathname();

  useEffect(() => {
    var path = pathName.split("/")[1];

    if (path === "") setSelected("home");
    else setSelected(path);
  }, [pathName]);

  return (
    <div className="fixed bottom-4 w-full md:max-w-sm px-3 py-2 md:px-0 md:bottom-10   ">
      <div className="flex justify-between bg-[#2F2F2F] backdrop-blur-xl rounded-full py-2 px-4">
        {pages.map((page, i) => {
          let Icon = (Icons as any)[page];
          return (
            <Link
              href={page === "home" ? "/" : page}
              onClick={() => setSelected(page)}
              key={"item-icon " + page}
              className={`p-1.5 h-fit  flex justify-center items-center ${
                selected === page ? "bg-[#D6D6D6]" : "bg-none"
              }  rounded-full group/item`}
            >
              <span className="w-7 h-7 flex justify-center items-center">
                <Icon
                  fill={`${selected === page ? "black" : "rgb(136,136,136)"}`}
                />
              </span>
              <span className="absolute opacity-0 bg-argent py-1 px-3 rounded-full -top-[60%] group-hover/item:opacity-100 group-hover/item:bounce-fade-in capitalize ">
                {page}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
