import config from "@/app/config";
import { getContent } from "@/app/lib/getContent";
import { serializeHTML } from "@/app/lib/serializeHTML";
import ContentData from "@/app/types/ContentData";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import { notFound } from "next/navigation";
import React from "react";
import { serialize } from "v8";
export default async function Page() {
  const data: ContentData = await getContent("projects");

  if (data.errors) return notFound();

  return (
    <Article>
      <Article.Header title="Projects">
        <AnimatedText text="Some of my" />
        <AnimatedText className="text-white" text="work" />
      </Article.Header>

      <Article.Items articles={data.docs} rootUrl="projects" />
    </Article>
  );
}
