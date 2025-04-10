import { projects } from "@/infrastructure/data/projects/projects-data";
import { notFound } from "next/navigation";
import ProjectCase from "@/presentation/pages/cases/project-case";
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
