"use server";

import { notFound } from "next/navigation";
import ContentData from "../types/ContentData";

export async function getContent(slug: string) {
  const url = process.env.CMS_API + `/api/${slug}/`;

  var res = (await (
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: process.env.NODE_ENV == "development" ? "no-cache" : "default",
      next: {
        tags: [slug],
      },
    })
  ).json()) as ContentData;

  if (res == null || res.docs == null) return notFound();

  return res;
}
