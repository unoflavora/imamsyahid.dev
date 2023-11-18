import { fetchMainData } from "@/hooks/fetchMainData";
import Lists from "./components/Lists";
import Me from "./components/Me";
import MeDescription from "./components/MeDescription";
import Products from "./components/Products";
import Stacks from "./components/Stacks";

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

  const { projects, writings } = await fetchMainData();

  return (
    <main className="flex flex-col gap-10 md:gap-14   ">
      <Me />

      <div className="flex flex-col gap-5 md:gap-14 animate-component-in-bottom">
        <MeDescription />

        <div className="flex flex-col gap-10">
          {/* <div className="w-full mb-5 ">
            <Products />
          </div> */}

          <Lists href="/findme" title="Where" list={socials} />

          <Lists href="/projects" title="Projects" list={projects} />

          <Lists href="/blogs" title="Writings" list={writings} />

          <Stacks />
        </div>
      </div>
    </main>
  );
}
