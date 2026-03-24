"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "../globals.scss";

const ProjectCard = ({
  i,
  progress,
  range,
  targetScale,
  projectName,
  projectLinkFlag,
  projectLink,
  projectTechStack,
  projectPicture,
  projectDescription,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="project-card-wrapper h-screen flex justify-center items-center sticky top-0 w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 20}px)`,
        }}
        className="project-card group/card glass-morphism w-[95vw] sm:w-[90vw] md:w-[80vw] h-[75vh] md:h-[70vh] flex flex-col md:flex-row items-center overflow-hidden border-white/5 shadow-2xl relative"
      >
        <div className="p-5 md:p-12 w-full md:w-1/2 flex flex-col gap-3 md:gap-6 h-[55%] md:h-full justify-start overflow-y-auto shrink-0">
          <div className="flex flex-col gap-2">
            <span className="text-[#6cb545] font-mono text-xs md:text-sm tracking-widest uppercase">
              Project {i + 1}
            </span>
            <h3 className="card-heading-font text-3xl md:text-6xl text-white">
              {projectName}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-2">
            {projectTechStack.map((tech, index) => (
              <span 
                key={index} 
                className="bg-white/5 border border-white/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs text-white/70 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 text-white/70 text-[11px] md:text-lg">
            {projectDescription.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="text-[#6cb545] mt-1">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="w-full md:w-1/2 h-[45%] md:h-full overflow-hidden bg-black/20 relative shrink-0">
          <motion.div 
            className="w-full h-full" 
            style={{ scale: imageScale }}
          >
            <img
              src={projectPicture}
              alt={projectName}
              className="prj-img w-full h-full object-cover grayscale-[0.5] group-hover/card:grayscale-0 group-hover/card:blur-md transition-all duration-700"
            />
          </motion.div>
          {projectLinkFlag && (
            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/60 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 pointer-events-none z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (projectLink) window.open(projectLink, "_blank");
                }}
                className="button-submit pointer-events-auto shadow-2xl shadow-black/50 border-white/20"
              >
                View Project
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
