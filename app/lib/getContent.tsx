"use server";

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

    return (await res.json()) as ContentData;
  } catch (e) {
    console.log(e);
    return null;
  }
}
