"use server";

import { notFound } from "next/navigation";
import ContentData from "../types/ContentData";

export async function getContent(slug: string) {
  const url = process.env.CMS_API + `/api/${slug}/`;

  try {
    var res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: [slug],
      },
    });

    var data = (await res.json()) as ContentData;

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
