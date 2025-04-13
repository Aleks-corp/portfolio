"use client";

import { motion } from "framer-motion";
import { experiences } from "@/infrastructure/data/experience/experience-data";
import { Briefcase, Code2, School, Layers } from "lucide-react";

export default function ExperienceSection() {
  const iconMap = {
    Code2,
    Briefcase,
    School,
    Layers,
  };
  return (
    <section
      id="experience"
      className="relative mt-16 mb-20 mx-6 md:ml-0 px-4 sm:px-6"
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-20">
        Work Experience
      </h2>

      <div className="flex flex-col gap-16">
        {experiences.map((exp, index) => {
          const Icon = iconMap[exp.icon as keyof typeof iconMap] || School;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col "
            >
              <div className="mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-xl sm:text-xl font-semibold text-foreground">
                {exp.role}
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base font-medium mt-1">
                {exp.company} • {exp.years}
              </p>

              <p className="mt-4 text-foreground text-base sm:text-lg max-w-3xl leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
