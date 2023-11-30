import config from "@/app/config";
import { getContent } from "@/app/lib/getContent";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import { fetchMainData } from "@/hooks/fetchMainData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
};
export default async function Page() {
  const { blogs } = await fetchMainData();

  return (
    <Article>
      <Article.Header title="Blog">
        <AnimatedText text="A few of my" />
        <AnimatedText
          className="text-black font-medium dark:font-normal dark:text-white"
          text="words"
        />
      </Article.Header>

      <Article.Items articles={blogs ? blogs.docs : []} rootUrl="blogs" />
    </Article>
  );
}
