import { getContent } from "@/app/lib/getContent";
import ContentData from "@/app/types/ContentData";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Projects"
}

export default async function Page() {
  const data: ContentData | null = await getContent("projects");

  return (
    <Article>
      <Article.Header title="Projects">
        <AnimatedText text="Some of my" />
        <AnimatedText className="text-black dark:text-white" text="work" />
      </Article.Header>

      <Article.Items articles={data ? data.docs : []} rootUrl="projects" />
    </Article>
  );
}
