'use client'

import Image from "next/image"
import Link from "next/link"
import useTextAnimator from "../lib/TextAnimator"

type List = {title: string, subtitle: string, category?: string}

type ListsProps = {title : string, href: string, list: List[]}

export default function (props: ListsProps)
{
    const title = useTextAnimator(props.title);    

    return <div className="flex flex-col gap-5">
    <div className="flex justify-between w-full">
        <h1 className="text-white font-semibold text-lg">{title}</h1>

        {props.list.length > 3 && <Link href={props.href}>
            <p className="inline-flex gap-1 font-semibold text-argent">All <Image src={"/arrow-right.svg"} width={15} height={15} alt="view all item"/></p>
        </Link>}
        
    </div>

    <div className="flex flex-col gap-3 text-[.9rem]">
        {props.list.map((l, i) => i <= 2 && <article key={props.title + i} className="flex gap-3 items-end w-full text-argent">
            <h1 className="min-w-max ">{l.title}</h1>
            <div className="w-full h-[0.08px] mb-1.5 bg-[#303030]"/>
            <div className="min-w-max flex gap-3">
                <h2>{l.category}</h2>
                <h2>{l.subtitle}</h2>
            </div>
        </article>)}
    </div>

    </div>
}