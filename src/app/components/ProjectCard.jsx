"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "../globals.scss";
import { list } from "postcss";
import Image from "next/image";

const ProjectCard = ({
  i,
  color,
  progress,
  range,
  targetScale,
  projectName,
  projectLinkFlag,
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
          className="project-card relative w-[80vw] h-[70vh]  flex items-center justify-center px-10 gap-5 origin-top shadow-lg"
        >
          <div className="project-details overflow-hidden  w-[60%] h-[80%] flex flex-col items-start gap-2">
            <div className="project-name card-heading-font text-4xl pb-10">
              {projectName}
            </div>
            <div className="project-tech flex gap-2 flex-wrap">
              {projectTechStack.map((tech, index) => {
                if (tech) {
                  return (
                    <div className="bg-[#00000030] p-1 rounded-sm" key={index}>
                      {tech}
                    </div>
                  );
                }
              })}
            </div>
            <div className="project-description list-style-type: none">
              {projectDescription.map((x, i) => {
                if (x) {
                  return <li key={i}>{x}</li>;
                }
              })}
            </div>
            {projectLinkFlag && (
              <button
                onClick={() => {
                  if (projectLink) {
                    window.open(projectLink, "_blank", "noopener noreferrer");
                  }
                }}
                className="project-button bg-black ml-2 p-2 hover:scale-105 transition-all delay-50 ease-out"
              >
                Go to Project
              </button>
            )}
          </div>
          <div className="project-image relative w-[40%] h-full overflow-hidden flex justify-center items-center object-cover">
            <motion.div className="w-full" style={{ scale: imageScale }}>
              <img
                src={projectPicture}
                alt=""
                className=" prj-img object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCard;
