import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./layout/Navbar";
import Script from "next/script";
import { headers } from "next/headers";
import { GoogleAnalytics } from "nextjs-google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Imam Syahid - Fullstack Engineer",
    template: "%s | Imam Syahid - Fullstack Engineer",
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
  const headersList = headers();
  const path = headersList.get("next-url") || "/";

  return (
    <html id="html" className="dark" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </head>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LQNBDE9WQ0"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LQNBDE9WQ0');
        `}
      </Script>

      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="transition-colors flex justify-center text-black dark:text-white min-h-screen  dark:bg-[#1E1E1E]">
          <div className="w-full py-6 pb-28 px-5 md:px-0 gap-10 relative md:max-w-xl flex flex-col items-center  ">
            {children}
            <p className="text-sm text-argent self-start">
              © 2023 Imam Syahid Hudzaifah
            </p>

            <Navbar currentPath={path} />
          </div>
        </div>
      </body>
    </html>
  );
}
