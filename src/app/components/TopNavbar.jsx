"use client";
import React, { useState, useEffect } from "react";
import "../globals.scss";
import { motion, AnimatePresence } from "framer-motion";
import { NAVBAR_MENUS } from "@/constants";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarMenus = NAVBAR_MENUS;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
        scrolled ? "w-[90%] md:w-max" : "w-[95%] md:w-max"
      }`}
    >
      <div className="glass-morphism px-8 py-4 flex items-center justify-between gap-12 border-white/5 shadow-2xl">
        <div className="text-[#6cb545] font-bold tracking-tighter text-2xl select-none">
          SYAMANTAK<span className="text-white">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navbarMenus.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-white/60 hover:text-[#6cb545] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6cb545] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 glass-morphism p-6 flex flex-col gap-4 border-white/5 shadow-2xl"
          >
            {navbarMenus.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="text-left py-2 text-lg text-white/80 hover:text-[#6cb545] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopNavbar;
