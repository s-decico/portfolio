"use client";
import React, { useState, useEffect } from "react";
import "../globals.scss";
import { motion, useTransform, useScroll } from "framer-motion";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarMenus = [
    { label: "Home", id: "home", navid: "navHome" },
    { label: "Experience", id: "experience", navid: "navExperience" },
    { label: "Skills", id: "skills", navid: "navSkills" },
    { label: "Projects", id: "projects", navid: "navProjects" },
    { label: "Contact", id: "contact", navid: "navcontact" },
  ];

  const scrollToSection = (id, event) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-menus flex justify-evenly items-center w-1/2 h-full gap-6 ">
          {navbarMenus.map((item, index) => (
            <div
              className="navbar-item box-border p-3 text-white text-lg transition ease-in-out delay-50 hover:text-[#6cb545] hover:cursor-pointer hover:border-b-2 border-[#6cb545] origin-center focus:text-[#993a3a]"
              id={item.navid}
              key={index}
              onClick={(event) => scrollToSection(item.id, event)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="collapsible-navbar w-90% bg-[#00000076] z-20"
          >
            {navbarMenus.map((item, index) => (
              <div
                className="navbar-item box-border p-3 text-white text-lg transition ease-in-out delay-50 hover:text-[#6cb545] hover:cursor-pointer hover:border-b-2 border-[#6cb545] origin-center focus:text-[#993a3a]"
                id={item.navid}
                key={index}
                onClick={(event) => {
                  scrollToSection(item.id, event);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        )}
      </div>
      <style jsx>{`
        .navbar-container {
          position: relative;
        }
        .hamburger-menu {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          cursor: pointer;
          z-index: 10; /* Ensure it is above other elements */
        }
        .bar {
          width: 25px;
          height: 3px;
          background-color: white;
          margin: 4px 0;
          transition: 0.4s;
        }
        .bar.open:nth-child(1) {
          transform: rotate(-45deg) translate(-8px, 6px);
        }
        .bar.open:nth-child(2) {
          opacity: 0;
        }
        .bar.open:nth-child(3) {
          transform: rotate(45deg) translate(-8px, -6px);
        }
        .collapsible-navbar {
          overflow: hidden;
          position: absolute; /* Ensure it doesn't push other content */
          top: 0;
          left: 0;
          width: 100%;
          z-index: 20; /* Increase z-index to ensure it is above other elements */
        }
        @media (max-width: 900px) {
          .navbar-menus {
            display: none;
          }
          .hamburger-menu {
            display: flex;
            z-index: 10;
          }
        }
        @media (max-width: 550px) {
          .hamburger-menu {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default TopNavbar;
