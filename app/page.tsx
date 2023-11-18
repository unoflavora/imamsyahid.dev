import Lists from "./components/Lists";
import Me from "./components/Me";
import MeDescription from "./components/MeDescription";
import Products from "./components/Products";
import Stacks from "./components/Stacks";
import config from "./config";
import { getContent } from "./lib/getContent";
import { Doc } from "./types/ContentData";

export default async function Page() {
  const socials = [
    {
      title: "Github",
      subtitle: "Follow",
      href: "https://github.com/unoflavora",
    },
    {
      title: "Instagram",
      subtitle: "Follow",
      href: "https://www.instagram.com/",
    },
  ];

  const projectRes = await getContent("projects");
  var projects: {
    title: string;
    subtitle: string;
    category?: string;
    href: string;
  }[] = [];

  const writingsRes = await getContent("blogs");
  var writings: {
    title: string;
    subtitle: string;
    category?: string;
    href: string;
  }[] = [];

  if (projectRes != null)
    projects = projectRes.docs.map((doc) => {
      return {
        title: doc.title,
        subtitle: new Date(doc.updatedAt).toLocaleDateString(),
        href: `/projects/${doc.slug}`,
      };
    });

  if (writingsRes != null)
    writings = writingsRes.docs.map((doc) => {
      return {
        title: doc.title,
        subtitle: new Date(doc.updatedAt).toLocaleDateString(),
        href: `/blogs/${doc.slug}`,
      };
    });

  return (
    <main className="flex flex-col gap-10 md:gap-14   ">
      <Me />

      <div className="flex flex-col gap-5 md:gap-20 animate-component-in-bottom">
        <MeDescription />

        <div className="flex flex-col gap-10">
          <div className="w-full md:mb-10">
            <Products />
          </div>

          <Lists href="/findme" title="Where" list={socials} />

          <Lists href="/projects" title="Projects" list={projects} />

          <Lists href="/blogs" title="Writings" list={writings} />

          <Stacks />
        </div>
      </div>
    </main>
  );
}
