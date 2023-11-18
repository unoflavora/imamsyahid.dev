"use client";

import Link from "next/link";
import useTextAnimator from "../../hooks/useTextAnimator";
import RightArrow from "@/public/arrow-right.svg";
import Product from "@/components/ui/ProductCard";
export default function Products() {
  const title = useTextAnimator("Products");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between w-full">
        <h1 className="text-black dark:text-white font-semibold text-lg">
          {title}
        </h1>
        <Link href="/products">
          <h2 className="inline-flex gap-1 font-semibold text-argent">
            {" "}
            <p className="inline-flex justify-center items-center gap-1 font-semibold text-argent hover:text-black dark:hover:text-white fill-argent hover:fill-black dark:hover:fill-white transition-colors duration-150">
              All <RightArrow className="w-4 h-4" />
            </p>
          </h2>
        </Link>
      </div>
      <h3 className="-mt-2 text-argent italic text-xs ">
        Projects that i think will be useful to people xD
      </h3>

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
