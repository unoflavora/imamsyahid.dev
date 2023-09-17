'use client'

import useTextAnimator from "../lib/TextAnimator";


export default function ()
{
    const name = useTextAnimator("Imam Syahid Hudzaifah")

    return(
        <div className="flex flex-col gap-5">
            <div className='flex gap-3 animate-component-in-up '>
                <div className='w-12 aspect-square rounded-full bg-white'/>
                <div className='flex flex-col'>
                <h1 className='font-semibold text-white'>{name}</h1>
                <h2 className='font-semibold text-zinc-500'>B. 1999</h2>
                </div>
            </div>
        </div>
    )
}