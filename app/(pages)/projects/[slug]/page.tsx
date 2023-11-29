import { getContent } from "@/app/lib/getContent";
import { serializeHTML } from "@/app/lib/serializeHTML";
import { ProjectDoc } from "@/app/types/ContentData";
import { notFound } from "next/navigation";
import PhotoGallery from "../components/clientSlider";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getContent("projects");
  if (data == null) return notFound();

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

  // header Image
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
    <div className="relative w-full flex flex-col justify-center items-center gap-10 ">
      <header className="flex flex-col gap-4 py-4 animate-component-in-up">
        <h3 className="border border-argent w-fit text-argent font-semibold rounded-lg text-center py-1 px-2 text-sm border-opacity-80 ">
          {project.category}
        </h3>
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          {project.title}
        </h1>
        <h2 className="text-argent">{project.description}</h2>
        <table className="w-fit text-sm">
          <tbody>
            {["client", "contribution", "duration", "year"].map((key) => {
              let val = key as keyof typeof project;
              if (typeof project[val] === "string")
                return (
                  <tr className="" key={key}>
                    <td className="capitalize text-black dark:text-white font-semibold pr-5">
                      {key}
                    </td>
                    <td className="text-argent">{project[val] as string}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
        {project.projectUrl !== "/" && (
          <Link href={project.projectUrl} target="_blank">
            <Button>Visit</Button>
          </Link>
        )}
      </header>

      <PhotoGallery photos={photos} />

      <div className="text-argent animate-component-in-bottom flex flex-col gap-3">
        {serializeHTML(project.content)}
      </div>
    </div>
  );
}
