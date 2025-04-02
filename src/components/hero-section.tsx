"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "./button";

export default function Hero() {
  return (
    <section id="intro" className="h-screen flex flex-col justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-medium leading-tight "
      >
        I build seamless full-stack solutions, from front to back.
      </motion.h1>

      <TypeAnimation
        sequence={["Creating impactful and scalable applications", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl text-gray-600 mt-2"
      />
      <div className="mt-8 flex gap-6">
        <Button className="primary" text="Get in touch"></Button>
        <Button className="secondary" text="My Work"></Button>
      </div>
    </section>
  );
}
