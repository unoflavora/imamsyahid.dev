import Me from "./components/Me";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className='px-3 py-6 min-h-screen bg-[#1E1E1E] flex flex-col gap-10'>
      <div className='flex gap-3'>
        <div className='w-12 aspect-square rounded-full bg-white'/>
        <div className='flex flex-col'>
          <h1 className='font-semibold text-white'>Imam Syahid Hudzaifah</h1>
          <h2 className='font-semibold text-zinc-500'>B. 1999</h2>
        </div>
      </div>

      <Me/>
      <Products/>
    </main>
  )
}
