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

    var data = (await res.json()) as ContentData;

    if (data != null && data.errors) throw new Error(data.errors[0].message);

    return data;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
}
