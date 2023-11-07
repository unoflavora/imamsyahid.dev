import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type Prop = {
  blog: {
    title: string;
    date: Date;
    category: string;
    imageHref: string;
    slug: string;
  };
};

const ArticleCard = React.forwardRef<
  HTMLImageElement,
  Prop & React.HtmlHTMLAttributes<HTMLAnchorElement>
>(function Article(props, ref) {
  const { blog } = props;

  return (
    <Link
      className="hover:scale-105 transition-transform group"
      href={`/blogs/${blog.slug}`}
    >
      <article className="flex flex-col gap-2 text-argent">
        <p className="w-full inline-flex justify-between text-sm">
          <AnimatedText className="text-sm" text={blog.category} />
          <AnimatedText
            className="text-sm"
            text={blog.date.toLocaleDateString("id-ID")}
          />
        </p>

        <Image
          ref={ref}
          src={blog.imageHref}
          sizes="100%"
          width={0}
          height={0}
          alt={`cover image of ${blog.title}`}
          className={cn(
            "w-full group-hover:brightness-125 transition-all object-cover",
            props.className
          )}
        />

        <h1 className="text-argent text-lg">
          <AnimatedText text={blog.title} />
        </h1>
      </article>
    </Link>
  );
});

export default ArticleCard;
