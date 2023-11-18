import config from "@/app/config";
import { getContent } from "@/app/lib/getContent";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page() {
  const data = await getContent("blogs");

  if (data != null && data.errors) throw new Error(data.errors[0].message);

  return (
    <Article>
      <Article.Header title="Blog">
        <AnimatedText text="A few of my" />
        <AnimatedText className="text-white" text="words" />
      </Article.Header>

      <Article.Items articles={data ? data.docs : []} rootUrl="blogs" />
    </Article>
  );
}
