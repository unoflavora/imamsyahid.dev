import config from "@/app/config";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import React from "react";
export default function Page() {
  const blogs = config.dummyData.blogs;

  return (
    <Article>
      <Article.Header title="Projects">
        <AnimatedText text="Some of my" />
        <AnimatedText className="text-white" text="work" />
      </Article.Header>

      <Article.Items articles={blogs} rootUrl="projects" />
    </Article>
  );
}
