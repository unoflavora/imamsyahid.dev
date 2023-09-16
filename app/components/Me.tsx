'use client'

import Image from "next/image";
import { useEffect, useState } from "react"

const skills = ["web apps", "games", "software"]

export default function ()
{
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [transitionOut, setTransitionOut] = useState(false);

    useEffect(() => {
        const delay = window.setTimeout(() => {
            setTransitionOut(false)
            setCurrentIndex((currentIndex + 1) % (skills.length ))
        }, 2000)

        const out = window.setTimeout(() => {
            setTransitionOut(true)
        }, 1500)
        
        return () => clearTimeout(delay)
    }, [currentIndex])

    return(
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-[#888888]">I develop 
                {skills.map((skill, i) => skill === skills[currentIndex] && <span className={`font-normal text-white ${transitionOut ? "animate-text-out" : "animate-text-in"} ml-2 fixed`}> {skill}.</span>)}
            </h1>
            <h2 className="text-[1.1rem] text-[#888888] leading-snug">
                I'm Imam Syahid, a passionate full-stack engineer living in Bandung, Indonesia. My work spans across multiple diciplines from games, web apps, and general software alike.
            </h2>

            <h3 className="flex gap-2 items-center text-sm text-[#888888]"><div className="w-3 h-3 rounded-full bg-green-500"></div> Available for new opportunities</h3>

            <button className="px-4 py-2 inline-flex gap-2 bg-[#303030] w-fit rounded-lg text-white font-semibold"><Image src={"/mail.svg"} height={25} width={25} alt="mail-label"/>Contact Me</button>
        </div>
    )
}