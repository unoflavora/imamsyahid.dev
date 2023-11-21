import config from "@/app/config";
import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stacks"
}

export default function Page() {
  const { stacks } = config;

  return (
    <Article>
      <Article.Header title="Stack">
        <AnimatedText text="Things I" />
        <AnimatedText className="text-black dark:text-white" text="Use" />
      </Article.Header>

      <Article.Body>
        <ul className="flex flex-col gap-3 md:grid md:grid-cols-2 md:grid-rows-5 md:gap-6 -ml-2">
          {stacks.map((stack, i) => (
            <Link
              target="_blank"
              href={stack.href}
              key={stack.name}
              className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/[0.04] flex items-center"
            >
              <li className="inline-flex gap-2  ">
                <Image
                  className="rounded-full bg-white p-1 w-11 h-fit"
                  src={stack.imghref}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt={`icon of ${stack.name}`}
                />
                <div className="flex flex-col h-full justify-between">
                  <h1 className="text-black font-medium dark:font-normal dark:text-white">
                    {stack.name}
                  </h1>
                  <h2 className="text-sm text-argent">{stack.category}</h2>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Article.Body>
    </Article>
  );
}
