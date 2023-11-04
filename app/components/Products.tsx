"use client";

import Image from "next/image";
import Link from "next/link";
import useTextAnimator from "../lib/TextAnimator";
import RightArrow from "@/public/arrow-right.svg";
export default function Products() {
  const title = useTextAnimator("Products");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between w-full">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
        <Link href="/products">
          <p className="inline-flex gap-1 font-semibold text-argent">
            {" "}
            <p className="inline-flex justify-center items-center gap-1 font-semibold text-argent hover:text-white fill-argent hover:fill-white transition-colors">
              All <RightArrow className="w-4 h-4" />
            </p>
          </p>
        </Link>
      </div>

      <div className="flex flex-col">
        <Product
          title={`[WIP] Masuk-Kampus`}
          desc={"A gamified learning platform"}
          price="Free"
        />
        <Product
          title={`[WIP] Devlink`}
          desc={"A link shortener for developers"}
          price="Free"
        />
      </div>
    </div>
  );
}

function Product(props: { title: string; desc: string; price: string }) {
  var title = useTextAnimator(props.title);

  return (
    <div className="w-full flex items-center justify-between hover:bg-zinc-800 transition-colors duration-200 px-2 py-4 rounded-2xl">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-argent" />
        <div className="flex flex-col">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-argent text-sm">{props.desc}</p>
        </div>
      </div>

      <h2 className="text-argent">{props.price}</h2>
    </div>
  );
}
