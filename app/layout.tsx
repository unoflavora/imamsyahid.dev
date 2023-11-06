import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./layout/Navbar";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imam Syahid - Fullstack Engineer",
  description: "Imam Syahid Hudzaifah's Personal Portofolio Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </head>

      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="flex justify-center text-white min-h-screen bg-[#1E1E1E]">
          <div className="w-full py-6 pb-28 px-5 md:px-0 gap-10 relative md:max-w-xl flex flex-col items-center  ">
            {children}
            <p className="text-sm text-argent self-start">
              © 2023 Imam Syahid Hudzaifah
            </p>

            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}
