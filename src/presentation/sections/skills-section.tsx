"use client";

import { motion } from "framer-motion";
import { clientOffers } from "@/infrastructure/data/skills/client-offers-data";
import { techSkills } from "@/infrastructure/data/skills/tech-skills-data";
import {
  Code,
  Network,
  Cloud,
  Lock,
  Library,
  ServerCog,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

export default function Skills() {
  const iconMap = {
    Code,
    Network,
    Cloud,
    Lock,
    Library,
    ServerCog,
    GitBranch,
    ShieldCheck,
  };
  return (
    <section
      id="skills"
      className="relative mt-16 mb-20 mx-6 md:ml-0 px-4 sm:px-6 max-w-5xl"
    >
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-16">
        What I do
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {clientOffers.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] || Code;
          return (
            <div key={index} className="flex items-start gap-4">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="relative flex-none w-20 h-20 rounded-full p-[1px] bg-icon-gradient"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
              </motion.div>

              <div className="text-muted-foreground">
                <h4 className="text-foreground font-semibold text-base sm:text-lg mb-4">
                  {item.title}
                </h4>
                <p className="text-base leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-16">
        My Core Tech Skills
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {techSkills.map((tool, i) => {
          const Icon = iconMap[tool.icon as keyof typeof iconMap] || Code;
          return (
            <div key={i} className="flex items-start gap-4">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="relative flex-none w-20 h-20 rounded-full p-[1px] bg-icon-gradient"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
              </motion.div>
              <div className="text-muted-foreground">
                <h4 className="text-foreground font-semibold text-base sm:text-lg mb-4">
                  {tool.title}
                </h4>
                <p className="text-base leading-relaxed">{tool.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
