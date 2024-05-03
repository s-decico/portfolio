"use client";
import React, { useRef, useContext } from "react";
import SkillContext from "@/contexts/SkillContext";
import SkillCard from "../components/SkillCard";
import { motion, useTransform, useScroll } from "framer-motion";

const staggeredAnimationVariant = {
  animate: ({ scrollProgress, index }) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.1 * index },
  }),
};

const Skills = () => {
  const skillObj = useContext(SkillContext);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <div
        ref={targetRef}
        className="skills-container relative w-full bg-[#e68b8b] p-20"
      >
        <div className="skill-heading">Skills</div>
        <div className="skill-card-container flex flex-wrap gap-4 items-center justify-center sticky top-0 bg-green-300 py-4">
          {skillObj &&
            skillObj.map((skill, index) => {
              return (
                <motion.div
                  className="skill-card-wrapper"
                  custom={{ scrollProgress, index }}
                  variants={staggeredAnimationVariant}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView="animate"
                  viewport={{ once: true }}
                  // animate={{
                  //   scale: 1,
                  //   opacity: 1,
                  //   transition: { delay: 0.5 * index },
                  // }}
                >
                  <SkillCard skill={skill} key={index} />
                </motion.div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Skills;
