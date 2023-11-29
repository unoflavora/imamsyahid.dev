import Link from "next/link";
import AnimatedText from "./AnimatedText";
import React from "react";
import { Doc } from "@/app/types/ContentData";
import MediaData from "@/app/types/MediaData";
import ContentImage from "./ContentImage";

type ArticleProp = {
  rootUrl: string;
  article: Doc;
  config?: ArticleCardConfig;
};

export type ArticleCardConfig = {
  date: {
    showYearOnly?: boolean;
  };
};

const ArticleCard = React.forwardRef<
  HTMLImageElement,
  ArticleProp & React.HtmlHTMLAttributes<HTMLAnchorElement>
>(async function Article(props, ref) {
  const { article, config } = props;

  const res = await fetch(
    process.env.CMS_API + `/api/media/${article.headerImage.id}`
  );
  const data: MediaData = await res.json();
  if (data.errors != null) {
    throw new Error(data.errors.message);
  }

  return (
    <Link
      className="hover:scale-105 transition-transform group"
      href={`/${props.rootUrl}/${article.slug}`}
    >
      <li className="flex flex-col gap-2 text-argent">
        <p className="w-full inline-flex justify-between text-sm">
          {/* <AnimatedText className="text-sm" text={article.category} /> */}
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

        <ContentImage image={article.headerImage} className={props.className} />

        <h1 className="text-argent text-lg">
          <AnimatedText text={article.title} />
        </h1>
      </li>
    </Link>
  );
});

export default ArticleCard;
