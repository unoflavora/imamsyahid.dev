import config from "@/app/config";
import { getContent } from "@/app/lib/getContent";
import { serializeHTML } from "@/app/lib/serializeHTML";
import { ProjectDoc } from "@/app/types/ContentData";
import MediaData from "@/app/types/MediaData";
import ContentImage from "@/components/ui/ContentImage";
import { cn } from "@/lib/utils";
import Slider from "react-slick";
import { notFound } from "next/navigation";
import PhotoGallery from "../components/clientSlider";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getContent("projects");

  const project = data.docs.find((b) => b.slug === params.slug) as ProjectDoc;

  if (project == null) return notFound();
  const photos = project.slider.map((photo) => {
    return {
      ...photo,
      image: {
        ...photo["image"],
        url: process.env.CMS_API + photo.image.url,
      },
    };
  });

  photos.unshift({
    _order: 1,
    id: "header",
    title: "string",
    caption: "string",
    image: {
      ...project["headerImage"],
      url: process.env.CMS_API + project.headerImage.url,
    },
  });

  return (
    <div className="relative w-full flex flex-col gap-10">
      <header className="flex flex-col gap-4 py-4 animate-component-in-up">
        <h2 className="border border-argent w-fit text-argent font-semibold rounded-lg text-center py-1 px-2 text-sm border-opacity-80 ">
          {project.category}
        </h2>
        <h1 className="text-2xl font-semibold text-white">{project.title}</h1>
      </header>

      <PhotoGallery photos={photos} />

      <div className="animate-component-in-bottom">
        {serializeHTML(project.content)}
      </div>
    </div>
  );
}
