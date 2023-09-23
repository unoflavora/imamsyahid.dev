'use client'
import Image from "next/image";
import useTextAnimator from "../lib/TextAnimator"

export default function Stacks (props: {title: string, list: {imgUrl: string, bgColor: string}[]})
{
    const title = useTextAnimator(props.title);

    return <div className="flex flex-col gap-5">
        <div className="flex justify-between w-full">
            <h1 className="text-white font-semibold text-lg">{title}</h1>        
        </div>

        <div className="flex flex-wrap w-full gap-3">
            {props.list.map((l, i) => <div key={"stack " + i} className={`flex gap-3 p-1 w-10 h-10 justify-center items-center rounded-full ${l.bgColor}`}>
                <Image className="w-full" src={l.imgUrl} height={25} width={25} alt={"icon of " + props.title}/>
            </div>)}
        </div>
    </div>
}