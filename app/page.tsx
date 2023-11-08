import Lists from "./components/Lists";
import Me from "./components/Me";
import MeDescription from "./components/MeDescription";
import Products from "./components/Products";
import Stacks from "./components/Stacks";
import config from "./config";

export default function Page() {
  const socials = [
    { title: "Instagram", subtitle: "Follow" },
    { title: "Leetcode", subtitle: "Follow" },
    { title: "X", subtitle: "Follow" },
  ];

  const projects = [
    { title: "Voice Scream", category: "Web Games", subtitle: "2022" },
    { title: "Match Three", category: "Web Games", subtitle: "2023" },
    { title: "Kanban Mawnagement", category: "Web App", subtitle: "2023" },
    { title: "Kanban Management", category: "Web App", subtitle: "2023" },
  ];

  const writings = [
    { title: "AI on politics", subtitle: "16/09/2023" },
    { title: "On code inspiration", subtitle: "16/10/2023" },
    { title: "Why React is not enough", subtitle: "8/10/2023" },
    { title: "Kanban Management", subtitle: "2023" },
  ];

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
