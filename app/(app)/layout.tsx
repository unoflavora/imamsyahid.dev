import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./layout/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Imam Syahid Hudzaifah - Fullstack Engineer",
    template: "%s | Imam Syahid Hudzaifah",
  },
  description: "Imam Syahid Hudzaifah's Personal Portofolio Page",
  metadataBase: new URL("https://www.imamsyahid.dev"),
  openGraph: {
    url: "https://www.imamsyahid.dev",
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@imamsyahid_",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="html" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </head>
      <SpeedInsights />
      <Analytics />
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="transition-colors flex justify-center text-black dark:text-white min-h-screen  dark:bg-[#1E1E1E]">
          <div className="w-full py-6 pb-28 px-5 md:px-0 gap-10 relative md:max-w-xl lg:max-w-2xl flex flex-col items-center  ">
            {children}
            <p className="text-sm text-argent self-start">
              © 2024 Imam Syahid Hudzaifah
            </p>

            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}
