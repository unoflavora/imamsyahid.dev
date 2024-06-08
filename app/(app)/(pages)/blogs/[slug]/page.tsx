import { getBase64, serializeHTML, getContent } from "@/lib";
import { ProjectDoc } from "@/types/ContentData";
import Props from "@/types/Props";
import ContentImage from "@/components/ui/ContentImage";
import { cn } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

const fetchData = async (slug: string) => {
  const data = await getContent("blogs");
  if (data == null) return notFound();

  const blog = data.docs.find((b) => b.slug === slug) as ProjectDoc;

  if (blog == null) return notFound();

  return blog;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const blog = await fetchData(params.slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.description,
    metadataBase: new URL("https://cms.imamsyahid.dev"),
    openGraph: {
      images: [blog.headerImage.url, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      images: [blog.headerImage.url, ...previousImages],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await fetchData(params.slug);

  const base64 = await getBase64(blog.headerImage.url);

  return (
    <div className="w-full flex flex-col gap-10">
      <header className="flex flex-col gap-4 py-4 animate-component-in-up">
        <h2 className="border border-argent w-fit text-argent font-semibold rounded-lg text-center py-1 px-2 text-sm border-opacity-80 ">
          {blog.category}
        </h2>
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          {blog.title}
        </h1>
      </header>

      <div
        className={cn(
          "min-h-[18rem] min-w-full  -ml-5 -mr-5 md:m-0",
          "animate-jumpIn",
        )}
      >
        <ContentImage config={{ base64 }} image={blog.headerImage} />
      </div>

      <div className="animate-component-in-bottom flex flex-col gap-3 text-argent">
        {serializeHTML(blog.content)}
      </div>
    </div>
  );
}
