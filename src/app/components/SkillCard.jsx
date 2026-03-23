import React from "react";
import { motion } from "framer-motion";
import "../globals.scss";

const SkillCard = ({ skill }) => {
  const { skillName, logoURL } = skill;
  
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.05 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-[#6cb545] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-2xl" />
      <div className="skill-box w-32 h-32 md:w-36 md:h-36 glass-morphism flex flex-col items-center justify-center p-6 border-white/5 hover:border-[#6cb545]/50 transition-colors duration-300">
        <div className="w-12 h-12 md:w-16 md:h-16 mb-4 relative z-10">
          <img
            src={logoURL}
            alt={skillName}
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
          />
        </div>
        <span className="text-xs md:text-sm font-medium text-white/50 group-hover:text-white transition-colors duration-300 tracking-wide text-center">
          {skillName}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;

