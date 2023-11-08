"use client";

import Link from "next/link";
import useTextAnimator from "../../hooks/useTextAnimator";
import RightArrow from "@/public/arrow-right.svg";
import Product from "@/components/ui/ProductCard";
export default function Products() {
  const title = useTextAnimator("Products");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between w-full">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
        <Link href="/products">
          <h2 className="inline-flex gap-1 font-semibold text-argent">
            {" "}
            <p className="inline-flex justify-center items-center gap-1 font-semibold text-argent hover:text-white fill-argent hover:fill-white transition-colors">
              All <RightArrow className="w-4 h-4" />
            </p>
          </h2>
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
