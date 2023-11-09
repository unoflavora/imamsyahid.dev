import config from "@/app/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const blog = config.dummyData.blogs.find((blog) => blog.slug === params.slug);

  if (blog == null) return notFound();

  const bgUrl = "bg-[url('" + blog.imageHref + "')]";

  return (
    <div className="w-full flex flex-col">
      <header className="flex flex-col gap-4 py-4 animate-component-in-up">
        <h2 className="border border-argent w-fit text-argent font-semibold rounded-lg text-center py-1 px-2 text-sm border-opacity-80 ">
          Design
        </h2>
        <h1 className="text-2xl font-semibold text-white">{blog.title}</h1>
      </header>

      <div
        className={cn(
          "min-h-[18rem] min-w-full  -ml-5 -mr-5 md:m-0",
          "animate-jumpIn"
        )}
      >
        <Image
          src={blog.imageHref}
          width={400}
          height={400}
          className="min-w-full"
          alt=""
          loading="eager"
        />
      </div>
    </div>
  );
}
