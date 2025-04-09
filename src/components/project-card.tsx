"use client";

import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  company: string;
  year: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  images,
  company,
  year,
}: Project) {
  return (
    <div className="bg-transparent transition-all duration-300">
      <div className=" relative w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl p-[2px] bg-card-gradient">
        <div className=" relative w-full h-full overflow-hidden rounded-xl bg-background">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="p-1 bg-background w-full">
        <p className="text-sm text-foreground">{description}</p>
        <div className="flex gap-2 text-xs mt-1 text-muted-foreground">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="flex justify-between text-sm mt-1 text-foreground">
          <span>{company}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}
