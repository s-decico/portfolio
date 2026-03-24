import React from "react";
import TopNavbar from "../components/TopNavbar";
import "../globals.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <div className="landing-container w-full h-dvh relative flex flex-col justify-center items-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6cb545] opacity-20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6cb545] opacity-10 blur-[120px] rounded-full animate-pulse" />


        <div className="landing-hero flex justify-between items-center w-full px-[10%] z-10 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text flex flex-col"
          >
            <div className="hero-text-top overflow-hidden p-0 text-[#6cb545] text-6xl md:text-7xl">
              <TypeAnimation
                sequence={[
                  "Hi! I am Syamantak",
                  2000,
                  "Hi! I am a Full Stack Developer",
                  2000,
                  "Hi! I Build Digital Experiences",
                  2000,
                ]}
                wrapper="div"
                speed={50}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  fontFamily: "Anton",
                }}
                repeat={Infinity}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hero-text-bottom overflow-hidden text-white opacity-80 mt-4 text-2xl md:text-3xl font-light tracking-wider"
            >
              Let&apos;s code your way online
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10"
            >
              <button 
                className="button-submit"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="hero-avatar relative group"
          >
            <div className="absolute inset-0 bg-[#6cb545] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative p-1 bg-gradient-to-br from-[#6cb545] to-transparent rounded-full">
              <Image
                src="/dp.jpg"
                alt="Display pic"
                width={320}
                height={320}
                className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="scroll-icon absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
          onClick={() => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 text-white opacity-30 hover:opacity-100 transition-opacity"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
