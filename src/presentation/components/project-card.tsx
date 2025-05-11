"use client";

import Image from "next/image";
import { Project } from "@/domain/projects/projects-repository";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  tags,
  images,
  company,
  year,
}: Project) {
  return (
    <div className="group bg-transparent transition-all duration-300">
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl p-[2px] bg-card-gradient">
        <div className="absolute top-6 right-6 w-12 h-12 rounded-xl flex justify-center items-center bg-background z-50 overflow-hidden">
          <ArrowUpRight className="absolute top-3 left-3 text-accent transition-all duration-300 ease-in-out group-hover:-top-6 group-hover:left-12" />
          <ArrowUpRight className="absolute top-12 -left-6 text-accent transition-all duration-300 ease-in-out group-hover:top-3 group-hover:left-3" />
        </div>
        <div className=" relative w-full h-full overflow-hidden rounded-xl bg-background">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="p-1 pt-3 bg-background w-full">
        <p className="text-xl text-foreground">{description}</p>
        <div className="flex gap-3 text-sm mt-4 text-muted-foreground">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="flex justify-between text-sm mt-6 text-foreground">
          <span>{company}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}
