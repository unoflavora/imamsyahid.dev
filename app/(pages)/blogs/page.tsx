import config from "@/app/config";
import AnimatedText from "@/components/ui/AnimatedText";
import ArticleCard from "@/components/ui/ArticleCard";
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
        <ArticleCard className="md:h-96" blog={blogs[0]} />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 ">
          {blogs.map((blog, i) => {
            if (i > 0) return <ArticleCard key={`blog ` + i} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}
