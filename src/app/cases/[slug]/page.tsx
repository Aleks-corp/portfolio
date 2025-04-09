import { projects } from "@/domain/projects/data/projectsData";
import { notFound } from "next/navigation";
import ProjectCase from "./_components/ProjectCase";
import { use } from "react";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectCase project={project} />;
}
