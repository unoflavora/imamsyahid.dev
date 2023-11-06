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
  const blog = config.dummyData.blogs.find((blog) => blog.slug === params.slug);
  if (!blog) notFound();

  return (
    <div className="w-full flex flex-col items-start gap-10">
      <Link href="/blogs" className="text-argent flex items-center gap-2   ">
        <ArrowLeftCircleIcon /> Blog
      </Link>

      {children}
    </div>
  );
}
