"use client";
import React, { useContext } from "react";
import SkillContext from "@/contexts/SkillContext";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import { SECTION_HEADINGS } from "@/constants";

const Skills = () => {
  const skillObj = useContext(SkillContext);

  return (
    <section id="skills" className="relative w-full py-32 px-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6cb545] opacity-5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="heading-font text-6xl md:text-7xl text-center">
            {SECTION_HEADINGS.SKILLS}
          </h2>
          <div className="w-24 h-1 bg-[#6cb545] mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-items-center">
          {skillObj &&
            skillObj.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

