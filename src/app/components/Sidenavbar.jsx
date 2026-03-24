"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { NAVBAR_MENUS } from "@/constants";

const SideNavbar = ({ showSideNavbar, activeSectionId }) => {
  const iconMap = {
    home: <HomeIcon />,
    experience: <BriefcaseIcon />,
    skills: <CpuIcon />,
    projects: <FolderIcon />,
    contact: <MailIcon />
  };
  const navbarMenus = NAVBAR_MENUS.map(menu => ({
    ...menu,
    icon: iconMap[menu.id]
  }));

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="glass-morphism flex flex-row md:flex-col items-center py-3 px-6 md:py-6 md:px-3 gap-4 md:gap-6 border-white/5 shadow-2xl rounded-full md:rounded-2xl">
      {navbarMenus.map((item) => {
        const isActive = activeSectionId === item.id;
        return (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`relative group p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? "bg-[#6cb545] text-black shadow-[0_0_20px_rgba(108,181,69,0.4)]" 
                : "text-white/40 hover:text-white hover:bg-white/5"
            }`}
          >
            <div className="w-6 h-6">
              {item.icon}
            </div>
            
            {/* Tooltip */}
            <div className="hidden md:block absolute left-16 px-3 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap shadow-xl">
              {item.label}
              <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
            </div>

            {isActive && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -bottom-1 left-2 right-2 h-1 md:-left-1 md:top-2 md:bottom-2 md:w-1 md:h-auto bg-white rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

// Simplified Icons
const HomeIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CpuIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const FolderIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default SideNavbar;
