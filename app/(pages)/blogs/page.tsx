import config from "@/app/config";
import AnimatedText from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Page() {
  const blogs = config.dummyData.blogs;

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col animate-component-in-up">
        <h1 className="text-argent">Blog</h1>
        <header className="py-12 text-argent text-2xl inline-flex gap-2">
          <AnimatedText text="A few of my" />
          <AnimatedText className="text-white" text="words" />
        </header>
      </div>
      <div className="flex flex-col gap-8 animate-component-in-bottom">
        <ArticleHeader className="md:h-96" blog={blogs[0]} />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 ">
          {blogs.map((blog, i) => {
            if (i > 0) return <ArticleHeader key={`blog ` + i} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

type Prop = {
  blog: {
    title: string;
    date: Date;
    category: string;
    imageHref: string;
    slug: string;
  };
};

const ArticleHeader = React.forwardRef<
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
          width={500}
          height={500}
          alt={`cover image of ${blog.title}`}
          className={cn(
            "w-full group-hover:brightness-125 transition-all",
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
