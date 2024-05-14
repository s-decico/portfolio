"use client";
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
import SideNavbar from "./components/Sidenavbar";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      const scrollTop = window.scrollY;
      const experienceSectionTop = experienceSection.offsetTop;

      setShowSideNavbar(scrollTop >= experienceSectionTop - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="main-container relative">
        <section id="home">
          <Landing />
        </section>
        <div className="side-nav-sections">
          {showSideNavbar && (
            <div className="side-nav z-10 fixed left-0 top-[200px] bg-[#00000065] w-max max-w-28 h-max p-1">
              <SideNavbar showSideNavbar={showSideNavbar} />
            </div>
          )}
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
        </div>
      </div>
    </>
  );
}
