import { getContent } from "@/app/lib/getContent";

export async function fetchMainData() {
  const projectRes = await getContent("projects");
  var projects: {
    title: string;
    subtitle: string;
    category?: string;
    href: string;
  }[] = [];

  const writingsRes = await getContent("blogs");
  var writings: {
    title: string;
    subtitle: string;
    category?: string;
    href: string;
  }[] = [];

  if (projectRes != null && projectRes.docs != null)
    projects = projectRes.docs.map((doc) => {
      return {
        title: doc.title,
        subtitle: new Date(doc.updatedAt).toLocaleDateString(),
        category: doc.category,
        href: `/projects/${doc.slug}`,
      };
    });

  if (writingsRes != null && writingsRes.docs != null)
    writings = writingsRes.docs.map((doc) => {
      return {
        title: doc.title,
        subtitle: new Date(doc.updatedAt).toLocaleDateString(),
        href: `/blogs/${doc.slug}`,
      };
    });

  return { projects, writings };
}
