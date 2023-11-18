import config from "@/app/config";
import { getContent } from "@/app/lib/getContent";
import { serializeHTML } from "@/app/lib/serializeHTML";
import { ProjectDoc } from "@/app/types/ContentData";
import MediaData from "@/app/types/MediaData";
import ContentImage from "@/components/ui/ContentImage";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getContent("blogs");
  if (data == null) return notFound();

  const blog = data.docs.find((b) => b.slug === params.slug) as ProjectDoc;

  if (blog == null) return notFound();

  return (
    <div className="w-full flex flex-col gap-10">
      <header className="flex flex-col gap-4 py-4 animate-component-in-up">
        <h2 className="border border-argent w-fit text-argent font-semibold rounded-lg text-center py-1 px-2 text-sm border-opacity-80 ">
          {blog.category}
        </h2>
        <h1 className="text-2xl font-semibold text-white">{blog.title}</h1>
      </header>

      <div
        className={cn(
          "min-h-[18rem] min-w-full  -ml-5 -mr-5 md:m-0",
          "animate-jumpIn"
        )}
      >
        <ContentImage image={blog.headerImage} />
      </div>

      <div className="animate-component-in-bottom flex flex-col gap-3">
        {serializeHTML(blog.content)}
      </div>
    </div>
  );
}
