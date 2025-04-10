import { Metadata } from "next";
import { projects } from "@/infrastructure/data/projects/projects-data";

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
