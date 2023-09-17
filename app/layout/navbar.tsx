'use client'

import React, { useState } from "react";
import Icons from '@/public/nav';
import Link from "next/link";

const pages = ["home", "blog", "products", "projects", "stack", "contact"]

export default function()
{
    const [selected, setSelected] = useState(pages[0]);

    return  <div className='fixed bottom-4 w-full px-3 '>
    <div className='flex justify-between bg-[#2F2F2F] backdrop-blur-xl rounded-full py-2 px-2'>
    {pages.map((page, i) => {
        let Icon = (Icons as any)[page];
        return (<Link href={page === "home" ? "/" : page} onClick={() => setSelected(page)} key={"item-icon " + page} className={`p-1.5 ${selected === page ? "bg-[#D6D6D6]": "bg-none"}  rounded-full`}>
            <div className="w-7 h-7">
                <Icon fill={`${selected === page ? "black" : "rgb(136,136,136)"}`}/>
            </div>
        </Link>)
    })}
    </div>
  </div>
}