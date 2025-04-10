"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/domain/projects/projects-repository";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectCase({ project }: { project: Project }) {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4 space-y-10">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {project.description}
        </p>
      </motion.div>

      {/* Теги */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border pt-6"
      >
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="px-3 py-1 border border-border rounded-full text-xs bg-muted"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="text-sm font-medium">
          {project.company}, {project.year}
        </div>
      </motion.div>

      {/* Галерея */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
            className="relative w-full h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
