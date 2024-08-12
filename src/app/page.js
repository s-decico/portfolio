"use client";
import Image from "next/image";
import Landing from "./sections/Landing";
import Experience from "./sections/Experience";
import { ExperienceMobile } from "./components/ExperienceMobile";
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
import toast, { Toaster } from "react-hot-toast";
import CertificateContextProvider from "@/contexts/CertificateContextProvider";
import Certificate from "./sections/Certificate";

export default function Home() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550); // Adjust the width as per your requirement
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      // const certificationsSection = document.getElementById("certifications");
      const contactSection = document.getElementById("contact");

      const verticalScroll = window.scrollY;
      const experienceSectionTop = experienceSection.offsetTop;
      const skillsSectionTop = skillsSection.offsetTop;
      const projectsSectionTop = projectsSection.offsetTop;
      // const certificationsSectionTop = certificationsSection.offsetTop;
      const contactSectionTop = contactSection.offsetTop;

      if (verticalScroll < experienceSectionTop - 50)
        setActiveSectionId("home");
      else if (
        verticalScroll > experienceSectionTop - 100 &&
        verticalScroll < skillsSectionTop - 100
      )
        setActiveSectionId("experience");
      else if (
        verticalScroll > skillsSectionTop - 100 &&
        verticalScroll < projectsSectionTop - 100
      )
        setActiveSectionId("skills");
      else if (
        verticalScroll > projectsSectionTop - 100 &&
        verticalScroll < contactSectionTop - 200
      )
        setActiveSectionId("projects");
      // else if (
      //   verticalScroll > certificationsSectionTop - 100 &&
      //   verticalScroll < contactSectionTop - 200
      // ) {
      //   setActiveSectionId("certifications");
      // }
      else if (verticalScroll >= contactSectionTop - 200)
        setActiveSectionId("contact");

      if (isMobile) {
        setShowSideNavbar(true);
      } else {
        setShowSideNavbar(verticalScroll >= experienceSectionTop - 300);
      }
    };

    handleScroll(); // Check on initial load
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <div className="main-container relative w-full min-w-[360px]">
        <section id="home">
          <Landing />
        </section>
        <div className="side-nav-sections">
          {showSideNavbar && (
            <div className="side-nav z-10 fixed left-0 top-[200px] bg-[#00000065] w-max max-w-28 h-max p-1 backdrop-blur-md">
              <SideNavbar
                showSideNavbar={showSideNavbar}
                activeSectionId={activeSectionId}
              />
            </div>
          )}
          <section id="experience">
            <ExperienceContextProvider>
              {isMobile ? <ExperienceMobile /> : <Experience />}
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
          {/* <section id="certifications">
            <CertificateContextProvider>
              <Certificate />
            </CertificateContextProvider>
          </section> */}
          <section id="contact">
            <ContactContextProvider>
              <Contact />
            </ContactContextProvider>
          </section>
        </div>
      </div>
      <Toaster />
    </>
  );
}
