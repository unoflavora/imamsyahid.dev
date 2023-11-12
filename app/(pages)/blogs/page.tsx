import config from "@/app/config";
import { getContent } from "@/app/lib/getContent";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import React from "react";
export default async function Page() {
  const data = await getContent("blogs");

  return (
    <Article>
      <Article.Header title="Blog">
        <AnimatedText text="A few of my" />
        <AnimatedText className="text-white" text="words" />
      </Article.Header>

      <Article.Items articles={data.docs} rootUrl="blogs" />
    </Article>
  );
}
