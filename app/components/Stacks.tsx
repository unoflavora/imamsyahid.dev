"use client";
import Image from "next/image";
import useTextAnimator from "../../hooks/useTextAnimator";
import Link from "next/link";
import config from "../config";

export default function Stacks() {
  const title = useTextAnimator("My Tools");
  const list = config.stacks;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between w-full">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
      </div>

      <div className="flex flex-wrap w-full gap-3">
        {list.map((l, i) => (
          <Link
            href={l.href}
            target="_blank"
            key={"stack " + i}
            className={`relative flex gap-3 p-1 w-10 h-10 justify-center items-center rounded-full ${l.bgColor} group/item`}
          >
            <Image
              className="w-full "
              src={l.imghref}
              height={25}
              width={25}
              alt={"icon of " + l.name}
            />
            <h1 className="absolute text-sm min-w-max hidden bg-white text-black py-1 px-3 rounded-full -top-full [@media(any-hover:hover)]:group-hover/item:bounce-fade-in capitalize ">
              {l.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
