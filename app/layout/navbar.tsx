'use client'

import React, { useEffect, useState } from "react";
import Icons from '@/public/nav';
import Link from "next/link";
import { usePathname } from 'next/navigation'

const pages = ["home", "blog", "products", "projects", "stack", "contact"]

export default function Navbar()
{
    const [selected, setSelected] = useState(pages[0]);
    const pathName = usePathname();

    useEffect(() => {
        var path = pathName.split("/")[1]

        if(path === "") setSelected("home")
        else setSelected(path)

    }, [pathName])


    return  <div className='fixed bottom-4 w-full md:max-w-sm lg:max-w-xs px-3 md:px-0 md:bottom-10   '>
    <div className='flex justify-between bg-[#2F2F2F] backdrop-blur-xl rounded-full py-2 md:py-1 px-2'>
    {pages.map((page, i) => {
        let Icon = (Icons as any)[page];
        return (<Link href={page === "home" ? "/" : page} onClick={() => setSelected(page)} key={"item-icon " + page} className={`p-1.5 h-fit  flex justify-center items-center ${selected === page ? "bg-[#D6D6D6]": "bg-none"}  rounded-full`}>
            <div className="w-7 h-7 lg:w-4 lg:h-4 flex justify-center items-center">
                <Icon fill={`${selected === page ? "black" : "rgb(136,136,136)"}`}/>
            </div>
        </Link>)
    })}
    </div>
  </div>
}