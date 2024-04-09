import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import { fetchMainData } from "@/hooks/fetchMainData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Page() {
  const { projectData } = await fetchMainData();

  return (
    <Article>
      <Article.Header title="Projects">
        <AnimatedText text="Some of my" />
        <AnimatedText className="text-black dark:text-white" text="work" />
      </Article.Header>

      <Article.Items
        articles={projectData ? projectData.docs : []}
        rootUrl="projects"
        config={{ date: { showYearOnly: true } }}
      />
    </Article>
  );
}
