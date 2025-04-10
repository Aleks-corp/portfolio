// import Image from "next/image";

import Contact from "@/presentation/sections/contact-section";
import ExperienceSection from "@/presentation/sections/experience-section";
import HeroSection from "@/presentation/sections/hero-section";
import References from "@/presentation/sections/reference-section";
import Sidebar from "@/presentation/components/side-bar";
import Skills from "@/presentation/sections/skills-section";
import WorkSection from "@/presentation/sections/work-section";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="md:pl-48 lg:pl-60">
        <HeroSection />
        <WorkSection />
        <ExperienceSection />
        <Skills />
        <References />
        <Contact />
      </main>
      <footer>
        <div className="h-60 pl-60">Footer</div>
      </footer>
    </>
  );
}
