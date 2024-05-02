import React from "react";
import "../globals.css";
import { motion, useTransform, useScroll } from "framer-motion";

const TopNavbar = () => {
  const navbarMenus = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <>
      <div className="navbar-menus flex justify-evenly items-center w-1/2 h-full ">
        {navbarMenus.map((item) => {
          return (
            <div
              className="navbar-item box-border p-3 text-white text-lg transition ease-in-out delay-50 hover:text-[#ce4e4e] hover:cursor-pointer hover:border-b-2 border-[#ce4e4e] origin-center  focus:text-[#993a3a] "
              id={item.id}
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
