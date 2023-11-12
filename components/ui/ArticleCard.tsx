import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Doc } from "@/app/types/ContentData";
import MediaData from "@/app/types/MediaData";

type ArticleProp = {
  rootUrl: string;
  article: Doc;
  config?: {
    showYearOnly?: boolean;
  };
};

export type ArticleData = {
  title: string;
  date: Date;
  category: string;
  imageHref: string;
  slug: string;
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
          <AnimatedText
            className="text-sm"
            text={
              config != null && config.showYearOnly
                ? new Date(article.createdAt).getFullYear().toString()
                : new Date(article.createdAt).toLocaleDateString("id-ID")
            }
          />
        </p>

        <Image
          ref={ref}
          src={process.env.CMS_API + data.url}
          sizes="100%"
          width={0}
          height={0}
          alt={`cover image of ${article.title}`}
          className={cn(
            "w-full group-hover:brightness-125 transition-all object-cover",
            props.className
          )}
        />

        <h1 className="text-argent text-lg">
          <AnimatedText text={article.title} />
        </h1>
      </li>
    </Link>
  );
});

export default ArticleCard;
