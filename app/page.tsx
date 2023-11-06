import Lists from "./components/Lists";
import Me from "./components/Me";
import MeDescription from "./components/MeDescription";
import Products from "./components/Products";
import Stacks from "./components/Stacks";

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

  const stacks = [
    {
      imghref: "/icons8-nextjs.svg",
      name: "NextJS",
      href: "https://nextjs.org/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-nodejs.svg",
      name: "NodeJS",
      href: "https://nodejs.org/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-graphql.svg",
      name: "GraphQL",
      href: "https://graphql.org/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-postgresql.svg",
      name: "Postgres",
      href: "https://www.postgresql.org/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-prisma-orm.svg",
      name: "Prisma",
      href: "https://www.prisma.io/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-framer.svg",
      name: "Framer Motion",
      href: "https://www.framer.com/motion/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-tailwindcss.svg",
      name: "Tailwind",
      href: "https://tailwindcss.com/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-docker.svg",
      name: "Docker",
      href: "https://www.docker.com/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-threejs.svg",
      name: "ThreeJS",
      href: "https://threejs.org/",
      bgColor: "bg-white",
    },
    {
      imghref: "/icons8-unity.svg",
      name: "Unity",
      href: "https://unity.com/",
      bgColor: "bg-white",
    },
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

          <Stacks title="My Tools" list={stacks} />
        </div>
      </div>
    </main>
  );
}
