// import Image from "next/image";

import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero-section";
import References from "@/components/references";
import Sidebar from "@/components/side-bar";
import Skills from "@/components/skills";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="md:pl-48 lg:pl-60">
        <Hero />
        <Work />
        <Experience />
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
