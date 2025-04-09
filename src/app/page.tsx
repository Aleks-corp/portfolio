// import Image from "next/image";

import Contact from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import References from "@/components/reference-section";
import Sidebar from "@/components/side-bar";
import Skills from "@/components/skills-section";
import WorkSection from "@/components/work-section";

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
