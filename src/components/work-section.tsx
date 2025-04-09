"use client";

import { projects } from "@/domain/projects/data/projectsData";
import ProjectCard from "./project-card";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section id="work" className="relative mt-16 mb-20 mx-6 md:ml-0">
      <div className="px-4 sm:px-6 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        {projects.map((project, index) => {
          const offsetClass = `${80 + index * 40}px`;
          const marginBottom = `${80 - index * 40}px`;

          return (
            <div
              key={index}
              style={{
                position: "sticky",
                zIndex: index,
                top: offsetClass,
                marginBottom: marginBottom,
              }}
            >
              <Link href={`/cases/${project.slug}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  images={project.images}
                  company={project.company}
                  year={project.year}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
