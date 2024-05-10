"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "../globals.scss";
import { list } from "postcss";

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
  // console.log("Index:", projectLink);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  //const opacity = useTransform(progress, range, [1, 0.5]);
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
            // opacity: opacity,
            top: `calc(${i * 25}px)`,
          }}
          className="project-card relative w-[80vw] h-[70vh] bg-red-900 flex items-center justify-center px-10 gap-5 origin-top shadow-lg"
        >
          <div className="project-details overflow-hidden  w-[60%] h-[80%] flex flex-col items-start gap-2">
            <div className="project-name text-4xl">{projectName}</div>
            <div className="project-tech flex gap-2">
              {projectTechStack.map((tech, index) => {
                return <li key={index}>{tech}</li>;
              })}
            </div>
            <div className="project-description">{projectDescription}</div>
            <button
              onClick={() => {
                window.open(projectLink, "_blank", "noopener noreferrer");
              }}
            >
              Go to Project
            </button>
          </div>
          <div className="project-image relative w-[40%] h-full  overflow-hidden flex justify-center items-center">
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
