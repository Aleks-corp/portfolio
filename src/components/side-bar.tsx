"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "references", label: "References" },
  { id: "contact", label: "Contact" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-background md:bg-transparent p-6 pb-2 flex justify-between items-center z-50">
        <span className="pl-2 text-sm font-normal uppercase lg:text-base lg:pl-4">
          Aleks Haran
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          <Menu size={24} />
        </button>
      </header>
      <motion.nav
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed left-8 lg:left-10 top-1/3 -translate-y-1/2 flex-col items-start gap-3"
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className="focus:outline-none"
          >
            <motion.div
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`transition-all duration-500 relative flex items-center ${
                activeSection === id ? "text-accent" : "hover:text-accent"
              }`}
            >
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={
                  activeSection === id
                    ? { width: 8, opacity: 1, marginRight: 8 }
                    : { width: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-accent h-0.5"
              />
              <span>{label}</span>
            </motion.div>
          </button>
        ))}
      </motion.nav>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "40%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-12 right-0 w-2/3 h-full bg-background p-4 flex flex-col items-start gap-2 z-40"
        >
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="text-white text-lg focus:outline-none hover:text-accent"
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
};
export default Sidebar;
