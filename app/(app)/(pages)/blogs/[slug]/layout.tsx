import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  return (
    <div className="w-full flex flex-col items-start gap-10 ">
      <Link
        href="/blogs"
        className="text-argent flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors animate-component-in-up  "
      >
        <ArrowLeftCircleIcon /> Blog
      </Link>

      {children}
    </div>
  );
}
