import { getContent } from "@/app/lib/getContent";
import ContentData from "@/app/types/ContentData";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import { notFound } from "next/navigation";
import React from "react";
export default async function Page() {
  const data: ContentData | null = await getContent("projects");

  if (data != null && data.errors) {
    console.log(data.errors);
    data.docs = [];
  }
  return (
    <Article>
      <Article.Header title="Projects">
        <AnimatedText text="Some of my" />
        <AnimatedText className="text-white" text="work" />
      </Article.Header>

      <Article.Items articles={data ? data.docs : []} rootUrl="projects" />
    </Article>
  );
}
