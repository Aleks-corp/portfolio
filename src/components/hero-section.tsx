"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "./button";

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="h-screen flex flex-col gap-y-8 sm:gap-y-0 justify-center px-4 sm:px-6 items-center md:items-start"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-[2px] bg-accent animate-blink" />
        <span className="text-accent tracking-wide text-base">
          Open to New Projects
        </span>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl min-[440px]:text-3xl font-medium text-center sm:text-3xl mdx:text-4xl mdx:leading-snug md:text-start lg:text-[44px] lg:leading-snug xl:text-6xl xl:leading-snug"
      >
        I build seamless full-stack
        <br /> applications,
        <br className="block sm:hidden" /> from front to back.
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Delivering scalable and performant digital solutions.",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-base text-center sm:text-lg sm:text:start lg:text-xl text-gray-600 mt-2"
      />
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-6 w-full justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Button
          className="primary"
          text="Get in touch"
          type="button"
          onClick={() => {
            console.log("hello");
          }}
        />
        <Button
          className="secondary"
          text="My Work"
          type="button"
          onClick={() => {
            console.log("hello");
          }}
        />
      </motion.div>
    </section>
  );
}
