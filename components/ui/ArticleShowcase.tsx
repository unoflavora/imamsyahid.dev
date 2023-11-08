import config from "@/app/config";
import AnimatedText from "./AnimatedText";
import ArticleCard, { ArticleData } from "./ArticleCard";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Article({ children }: { children: ReactNode }) {
  const blogs = config.dummyData.blogs;

  return <div className="w-full flex flex-col">{children}</div>;
}

Article.Header = function ArticleHeader(
  props: React.PropsWithChildren<{ title: string }> &
    React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div className={cn("flex flex-col animate-component-in-up")}>
      <h1 className="text-argent">{props.title}</h1>
      <header
        className={cn(
          "py-12 text-argent text-2xl inline-flex gap-2",
          props.className
        )}
      >
        {props.children}
      </header>
    </div>
  );
};

Article.Body = function ArticleBody(
  props: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
) {
  console.log(props.className);
  return (
    <div
      className={cn(
        "flex flex-col animate-component-in-bottom",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

type ItemsProp = {
  rootUrl: string;
  articles: readonly ArticleData[];
};

Article.Items = function ArticleItems(
  props: React.PropsWithChildren<ItemsProp>
) {
  return (
    <ul className="flex flex-col gap-8 animate-component-in-bottom">
      <ArticleCard
        rootUrl={props.rootUrl}
        className="md:h-96"
        article={props.articles[0]}
      />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 ">
        {props.articles.map((blog, i) => {
          if (i > 0)
            return (
              <ArticleCard
                rootUrl={props.rootUrl}
                key={`blog ` + i}
                article={blog}
              />
            );
        })}
      </div>
    </ul>
  );
};

export { Article };
