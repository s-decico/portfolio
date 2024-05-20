"use client";
import React, { useContext, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectContext from "@/contexts/ProjectContext";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const ProjectObj = useContext(ProjectContext);

  return (
    <>
      <div
        ref={container}
        className="projects-container relative w-full h-[400dvh] bg-[#323232] text-white flex flex-col items-center justify-center gap-24 py-32"
      >
        {ProjectObj.map((project, index) => {
          const targetScale = 1 - (ProjectObj.length - index) * 0.05;
          if (project) {
            return (
              <ProjectCard
                key={index}
                i={index}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
                color={project.color}
                {...project}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Projects;
