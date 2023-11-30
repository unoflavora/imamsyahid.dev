"use client";

import Image from "next/image";
import useTextAnimator from "../../hooks/useTextAnimator";

export default function Me() {
  const name = useTextAnimator("Imam Syahid Hudzaifah");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 animate-component-in-up ">
        <div className="relative w-12 aspect-square overflow-hidden rounded-full">
          <Image
            placeholder="blur"
            className="w-full h-full object-cover object-center"
            src={"/me.jpeg"}
            sizes="100%"
            alt="photo of me"
            layout="fill"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-black dark:text-white">{name}</h1>
          <h2 className="font-semibold text-zinc-500">B. 1999</h2>
        </div>
      </div>
    </div>
  );
}
