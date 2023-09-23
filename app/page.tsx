import Lists from "./components/Lists";
import Me from "./components/Me";
import MeDescription from "./components/MeDescription";
import Products from "./components/Products";
import Stacks from "./components/Stacks";

export default function Page() {
  const socials = [
      {title : "Instagram", subtitle: "Follow"},
      {title : "Leetcode", subtitle: "Follow"},
      {title : "X", subtitle: "Follow"}
  ]

  const projects = [
      {title: "Voice Scream", category: "Web Games", subtitle: "2022"},
      {title: "Match Three", category: "Web Games", subtitle: "2023"},
      {title: "Kanban Mawnagement", category: "Web App", subtitle: "2023"},
      {title: "Kanban Management", category: "Web App", subtitle: "2023"}
  ]

  const writings =  [
      {title: "AI on politics", subtitle: "16/09/2023"},
      {title: "On code inspiration", subtitle: "16/10/2023"},
      {title: "Why React is not enough", subtitle: "8/10/2023"},
      {title: "Kanban Management", subtitle: "2023"}
  ]

  const stacks = [
    {imgUrl : "/icons8-nextjs.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-nodejs.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-postgresql.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-prisma-orm.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-python.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-react.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-typescript.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-c.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-rider-jetbrains.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-unity.svg", bgColor: "bg-white"},
    {imgUrl : "/icons8-tailwindcss.svg", bgColor: "bg-white"},
  ]

  return (
    <main className='flex flex-col gap-10 md:gap-14 px-5 md:px-0 pb-20 '>
      <Me/>
      
      <div className="flex flex-col gap-5 md:gap-20 animate-component-in-bottom">
        <MeDescription/>

        <div className="flex flex-col gap-10">

          <div className="w-full md:mb-10">
            <Products/>
          </div>

          <Lists href="/findme" title="Where" list={socials}/>

          <Lists href="/projects" title="Projects" list={projects}/>

          <Lists href="/blogs" title="Writings" list={writings}/>

          <Stacks title="My Tools" list={stacks}/>

          <p className="text-sm text-argent">© 2023 Imam Syahid Hudzaifah</p>
        </div>
       

      </div>
    </main>
  )
}
