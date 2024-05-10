"use client";
import React from "react";
import "../globals.scss";
import { motion, useTransform, useScroll } from "framer-motion";

const TopNavbar = () => {
  const navbarMenus = [
    { label: "Home", id: "home", navid: "navHome" },
    { label: "Experience", id: "experience", navid: "navExperience" },
    { label: "Skills", id: "skills", navid: "navSkills" },
    { label: "Projects", id: "projects", navid: "navProjects" },
    { label: "Contact", id: "contact", navid: "navcontact" },
  ];

  const scrollToSection = (id, event) => {
    // event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar-menus flex justify-evenly items-center w-1/2 h-full ">
        {navbarMenus.map((item, index) => {
          return (
            <div
              className="navbar-item box-border p-3 text-white text-lg transition ease-in-out delay-50 hover:text-[#ce4e4e] hover:cursor-pointer hover:border-b-2 border-[#ce4e4e] origin-center  focus:text-[#993a3a] "
              id={item.navid}
              key={index}
              onClick={(event) => scrollToSection(item.id, event)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopNavbar;
