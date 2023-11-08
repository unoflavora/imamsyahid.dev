"use client";
import useTextAnimator from "@/hooks/useTextAnimator";

export default function Product(props: {
  title: string;
  desc: string;
  price: string;
}) {
  var title = useTextAnimator(props.title);

  return (
    <div className="w-full flex items-center justify-between text-white hover:bg-zinc-800 transition-colors duration-200 px-2 py-4 rounded-2xl">
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
