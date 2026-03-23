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
import TopNavbar from "./components/TopNavbar";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Increased threshold to catch tablets
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      if (!experienceSection || !skillsSection || !projectsSection || !contactSection) return;

      const verticalScroll = window.scrollY;
      const experienceSectionTop = experienceSection.offsetTop;
      const skillsSectionTop = skillsSection.offsetTop;
      const projectsSectionTop = projectsSection.offsetTop;
      const contactSectionTop = contactSection.offsetTop;

      // Active Section Tracking
      if (verticalScroll < experienceSectionTop - 100) setActiveSectionId("home");
      else if (verticalScroll < skillsSectionTop - 100) setActiveSectionId("experience");
      else if (verticalScroll < projectsSectionTop - 100) setActiveSectionId("skills");
      else if (verticalScroll < contactSectionTop - 200) setActiveSectionId("projects");
      else setActiveSectionId("contact");

      // SideNav vs TopNav Orchestration
      // On desktop, show side nav only after scrolling past landing
      // On mobile, show side nav always (or based on preference)
      if (isMobile) {
        setShowSideNavbar(true); 
      } else {
        setShowSideNavbar(verticalScroll >= 500); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);
  return (
    <>
      {/* Sidenav Dock: Vertically Centered on Left */}
      <AnimatePresence>
        {showSideNavbar && (
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: '1rem', 
              height: '100vh', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 100,
              pointerEvents: 'none'
            }}
          >
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              style={{ pointerEvents: 'auto', padding: '0.5rem' }}
            >
              <SideNavbar
                showSideNavbar={showSideNavbar}
                activeSectionId={activeSectionId}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="main-container relative w-full min-w-[360px]">
        {/* Top Navbar: only show when Side Nav is hidden */}
        <AnimatePresence>
          {!showSideNavbar && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="z-[100] fixed top-0 w-full"
            >
              <TopNavbar />
            </motion.div>
          )}
        </AnimatePresence>

        <section id="home">
          <Landing />
        </section>

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
        <section id="contact">
          <ContactContextProvider>
            <Contact />
          </ContactContextProvider>
        </section>
      </div>
      <Toaster />
    </>
  );
}
