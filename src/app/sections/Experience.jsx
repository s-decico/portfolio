"use client";
import React, { useRef, useContext } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../globals.scss";
import ExperienceContext from "@/contexts/ExperienceContext";
import ExperienceCard from "../components/ExperienceCard";
import HorizontalScrollCarousel from "./Scroll";

const Experience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  const ExperienceObj = useContext(ExperienceContext);
  return (
    <>
      <div
        ref={targetRef}
        className="experience-container relative h-[300vh] bg-[#323232]"
      >
        <div className="experience-card-container sticky top-0 h-screen flex items-center overflow-hidden pt-16 ">
          <div className="section-heading heading-font top-0 mx-10 text-5xl -rotate-90 text-white">
            EXPERIENCE
          </div>
          <motion.div
            className="exp-cards h-full flex gap-8 p-4 w-max pl-20"
            style={{ x }}
          >
            {ExperienceObj.map((experience, index) => {
              if (experience) {
                return <ExperienceCard experience={experience} key={index} />;
              }
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Experience;
