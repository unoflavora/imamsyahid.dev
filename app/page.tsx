import Me from "./components/Me";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className='px-3 py-6 min-h-screen bg-[#1E1E1E] flex flex-col gap-10'>

      <Me/>
      <Products/>
    </main>
  )
}
