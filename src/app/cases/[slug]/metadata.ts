import { Metadata } from "next";
import { projects } from "@/domain/projects/data/projectsData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Case`,
      description: project.description,
      images: project.images[0],
    },
  };
}
