"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ProjectCard = ({
  i,
  color,
  progress,
  range,
  targetScale,
  projectName,
  projectLink,
  projectTechStack,
  date,
  projectPicture,
  projectDescription,
}) => {
  console.log("Index:", projectLink);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <>
      <div
        ref={container}
        className="card-container h-dvh flex justify-center items-center sticky top-10"
      >
        <motion.div
          style={{
            backgroundColor: color,
            scale,
            top: `calc(${i * 25}px)`,
          }}
          className="project-card relative w-[80vw] h-[70vh] bg-red-900 flex items-center justify-center px-10 gap-5 origin-top"
        >
          <div className="project-details bg-emerald-600 w-[60%]">
            <div className="project-name">{projectName}</div>
            <div className="project-tech">{projectTechStack}</div>
            <div className="project-description">{projectDescription}</div>
            <button
              onClick={() => {
                window.open({ projectLink }, "_blank", "noopener noreferrer");
              }}
            >
              Go to Project
            </button>
          </div>
          <div className="project-image relative w-[40%] bg-slate-950 overflow-hidden ">
            <motion.div className="w-full" style={{ scale: imageScale }}>
              <img
                src={projectPicture}
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCard;
