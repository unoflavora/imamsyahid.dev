import config from "@/app/config";
import { getContent } from "@/app/lib/getContent";
import { serializeHTML } from "@/app/lib/serializeHTML";
import MediaData from "@/app/types/MediaData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getContent("projects");

  const blog = data.docs.find((b) => b.slug === params.slug);

  if (blog == null) return notFound();

  return (
    <div className="w-full flex flex-col gap-10">
      <header className="flex flex-col gap-4 py-4 animate-component-in-up">
        <h2 className="border border-argent w-fit text-argent font-semibold rounded-lg text-center py-1 px-2 text-sm border-opacity-80 ">
          Design
        </h2>
        <h1 className="text-2xl font-semibold text-white">{blog.title}</h1>
      </header>

      <div className={cn("w-full   -ml-5 -mr-5 md:m-0", "animate-jumpIn")}>
        <Image
          src={process.env.CMS_API + blog.headerImage.url}
          sizes="100%"
          width={0}
          height={0}
          alt={`cover image of ${blog.title}`}
          className={cn(
            "w-full md:h-96 group-hover:brightness-125 transition-all object-cover"
          )}
        />
      </div>

      <div className="animate-component-in-bottom">
        {serializeHTML(blog.content)}
      </div>
    </div>
  );
}
