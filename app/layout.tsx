import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Navbar from './layout/navbar'
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imam Syahid - Fullstack Engineer',
  description: 'Imam Syahid Official Page',
  icons: {
    icon: {url: "/favicon.ico"}
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className }>
        <div className=' flex justify-center min-h-screen bg-[#1E1E1E]'>
          <div className='py-6 relative md:max-w-xl flex justify-center '>
            {children}
            <Navbar/>

          </div>

        </div>
      </body>
    </html>
  )
}
