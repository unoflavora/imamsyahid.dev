import Link from "next/link";
import AnimatedText from "./AnimatedText";
import React, { HTMLAttributes } from "react";
import { Doc } from "@/app/types/ContentData";
import ContentImage from "./ContentImage";

type ArticleProp = {
  rootUrl: string;
  article: Doc;
  config?: ArticleCardConfig;
};

export type ArticleCardConfig = {
  date?: {
    showYearOnly?: boolean;
  };
  mainArticle?: boolean;
};

export default async function ArticleCard(
  props: ArticleProp & ArticleCardConfig & HTMLAttributes<HTMLDivElement>
) {
  const { article, config } = props;

  return (
    <Link
      className="hover:scale-105 transition-transform group"
      suppressHydrationWarning
      href={`/${props.rootUrl}/${article.slug}`}
    >
      <li className="flex flex-col gap-2 text-argent">
        <p className="w-full inline-flex justify-between text-sm">
          {config != null && (
            <AnimatedText
              className="text-sm"
              text={
                config.date?.showYearOnly
                  ? new Date(article.createdAt).getFullYear().toString()
                  : new Date(article.createdAt).toLocaleDateString("id-ID")
              }
            />
          )}
        </p>

        <ContentImage
          priority={props.config?.mainArticle}
          config={{ renderOnClient: true }}
          image={article.headerImage}
          className={props.className}
        />

        <h1 className="text-argent text-lg">
          <AnimatedText text={article.title} />
        </h1>
      </li>
    </Link>
  );
}
