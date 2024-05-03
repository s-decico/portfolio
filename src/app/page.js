import Image from "next/image";
import Landing from "./sections/Landing";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./globals.css";
import ExperienceContextProvider from "@/contexts/ExperienceContextProvider";
import SkillContextProvider from "@/contexts/SkillContextProvider";
import ProjectContextProvider from "@/contexts/ProjectContextProvider";

export default function Home() {
  return (
    <>
      <section>
        <Landing />
      </section>

      <section>
        <ExperienceContextProvider>
          <Experience />
        </ExperienceContextProvider>
      </section>

      <section>
        <SkillContextProvider>
          <Skills />
        </SkillContextProvider>
      </section>
      <section>
        <ProjectContextProvider>
          <Projects />
        </ProjectContextProvider>
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
