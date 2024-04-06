import config from "@/app/config";
import AnimatedText from "./AnimatedText";
import ArticleCard, { ArticleCardConfig } from "./ArticleCard";
import React, { ReactNode, Suspense } from "react";
import { cn } from "@/lib/utils";
import { Doc } from "@/app/types/ContentData";

function Article({ children }: { children: ReactNode }) {
  const blogs = config.dummyData.blogs;

  return <div className="w-full flex flex-col">{children}</div>;
}

Article.Header = function ArticleHeader(
  props: React.PropsWithChildren<{ title: string }> &
    React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      className={cn("flex flex-col animate-component-in-up")}
      suppressHydrationWarning
    >
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
  articles: Doc[] | [];
  config?: ArticleCardConfig;
};

Article.Items = function ArticleItems(
  props: React.PropsWithChildren<ItemsProp>
) {

  if (props.articles.length > 0)
    {
    let articles = [...props.articles].sort((a,b) => a.order - b.order);
    
    return (
      <ul className="flex flex-col gap-8 animate-component-in-bottom">
        <ArticleCard
          rootUrl={props.rootUrl}
          className="md:h-96"
          article={articles[0]}
          config={{ ...props.config, mainArticle: true }}
        />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 ">
          {articles.length > 1 &&
            articles.map((blog, i) => {
              if (i > 0)
                return (
                  <ArticleCard
                    key={`blog ` + i}
                    rootUrl={props.rootUrl}
                    article={blog}
                    className="md:h-48 "
                    config={props.config && { ...props.config }}
                  />
                );
            })}
        </div>
      </ul>
    );
    }

};

export { Article };
