'use client'

import Image from "next/image";
import Link from "next/link";
import useTextAnimator from "../lib/TextAnimator";

export default function () 
{
    const title = useTextAnimator("Products");

    return (
        <div className="flex flex-col gap-8">
        <div className="flex justify-between w-full">
            <h1 className="text-white font-semibold text-lg">{title}</h1>
            <Link href="/products">
                <p className="inline-flex gap-1 font-semibold text-argent">All <Image src={"/arrow-right.svg"} width={15} height={15} alt="view all item"/></p>
            </Link>
            
        </div>

        <div className="flex flex-col gap-6">
            <Product title={`[WIP] Masuk-Kampus`} desc={"A gamified learning platform"} price="Free"/>
            <Product title={`[WIP] Devlink`} desc={"A link shortener for developers"} price="Free"/>

        </div>

        </div>
    )
}

function Product(props: {title: string, desc: string, price: string}) {
    var title = useTextAnimator(props.title);
    
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-argent"/>
                <div className="flex flex-col">
                    <h1 className="font-semibold">{title}</h1>
                    <p className="text-argent text-sm">{props.desc}</p>
                </div>
            </div>

            <h2 className="text-argent">{props.price}</h2>
        </div>
    )
}