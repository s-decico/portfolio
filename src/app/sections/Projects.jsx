"use client";
import React, { useContext, useRef } from "react";
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
    <section 
      ref={container} 
      id="projects"
      className="relative w-full py-32 flex flex-col items-center gap-32"
    >
      <div className="sticky top-20 z-0 opacity-10 pointer-events-none">
        <h2 className="heading-font text-8xl md:text-[15rem] leading-none">
          PROJECTS
        </h2>
      </div>

      <div className="w-full flex flex-col items-center gap-[10vh] px-4 md:px-0 relative z-10">
        {ProjectObj.map((project, index) => {
          const targetScale = 1 - (ProjectObj.length - index) * 0.05;
          return (
            <ProjectCard
              key={index}
              i={index}
              progress={scrollYProgress}
              range={[index * 0.2, 1]}
              targetScale={targetScale}
              {...project}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

