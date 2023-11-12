import config from "@/app/config";
import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
        href="/projects"
        className="text-argent flex items-center gap-2 hover:text-white transition-colors animate-component-in-up  "
      >
        <ArrowLeftCircleIcon /> Projects
      </Link>

      {children}
    </div>
  );
}
