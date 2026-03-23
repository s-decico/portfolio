"use client";
import React, { useRef, useContext } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../globals.scss";
import ExperienceContext from "@/contexts/ExperienceContext";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const ExperienceObj = useContext(ExperienceContext);
  return (
    <>
      <div
        ref={targetRef}
        id="experience"
        className="experience-container relative h-[300vh] bg-transparent"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute top-20 left-10 z-10">
            <h2 className="heading-font text-8xl opacity-10 select-none">
              EXPERIENCE
            </h2>
          </div>
          
          <motion.div
            className="flex gap-12 px-[10%] w-max"
            style={{ x }}
          >
            {ExperienceObj.map((experience, index) => {
              if (experience) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-[75vw] md:w-[60vw]"
                  >
                    <ExperienceCard experience={experience} />
                  </motion.div>
                );
              }
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Experience;

