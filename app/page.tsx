import Lists from "./components/Lists";
import Me from "./components/Me";
import Products from "./components/Products";

export default function Home() {
  const socials = [
      {title : "Instagram", subtitle: "Follow"},
      {title : "Leetcode", subtitle: "Follow"},
      {title : "X", subtitle: "Follow"}
  ]

  const projects = [
      {title: "Voice Scream", category: "Web Games", subtitle: "2022"},
      {title: "Match Three", category: "Web Games", subtitle: "2023"},
      {title: "Kanban Management", category: "Web App", subtitle: "2023"},
      {title: "Kanban Management", category: "Web App", subtitle: "2023"}
  ]

  const writings =  [
      {title: "AI on politics", category: "Web Games", subtitle: "2022"},
      {title: "On code inspiration", category: "Web Games", subtitle: "2023"},
      {title: "Why React is not enough", category: "Web App", subtitle: "2023"},
      {title: "Kanban Management", category: "Web App", subtitle: "2023"}
  ]

  return (
    <main className='px-3 py-6 min-h-screen bg-[#1E1E1E] flex flex-col gap-10'>
      <Me/>
      
      <Products/>

      <Lists href="/findme" title="Where" list={socials}/>

      <Lists href="/projects" title="Projects" list={projects}/>

      <Lists href="/blogs" title="Writings" list={writings}/>
    </main>
  )
}
