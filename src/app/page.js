import Image from "next/image";
import Landing from "./sections/Landing";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./globals.scss";
import ExperienceContextProvider from "@/contexts/ExperienceContextProvider";
import SkillContextProvider from "@/contexts/SkillContextProvider";
import ProjectContextProvider from "@/contexts/ProjectContextProvider";
import ContactContextProvider from "@/contexts/ContactContextProvider";

export default function Home() {
  return (
    <>
      <section id="home">
        <Landing />
      </section>

      <section id="experience">
        <ExperienceContextProvider>
          <Experience />
        </ExperienceContextProvider>
      </section>

      <section id="skills">
        <SkillContextProvider>
          <Skills />
        </SkillContextProvider>
      </section>
      <section id="projects">
        <ProjectContextProvider>
          <Projects />
        </ProjectContextProvider>
      </section>
      <section id="contact">
        <ContactContextProvider>
          <Contact />
        </ContactContextProvider>
      </section>
    </>
  );
}
