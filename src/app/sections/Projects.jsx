import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="projects-container w-full h-[500dvh] bg-[#323232] text-white flex flex-col items-center justify-center gap-16 bg-lime-900">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
