"use client";
import React, { useState } from "react";
import ProjectContext from "./ProjectContext";

const ProjectContextProvider = ({ children }) => {
  const [Project, setProject] = useState([
    {
      projectName: "Resumate",
      projectLinkFlag: true,
      projectLink: "https://resumatebys.vercel.app/",
      projectTechStack: [
        "React",
        "JavaScript",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "JWT",
        "Bcrypt",
      ],
      date: "Oct-2023",
      color: "#4e7b36",
      projectPicture: "/resumate_proj.jpg",
      projectDescription: [
        "Full stack responsive resume creation website",
        "Implemented user authentication with JWT and password encryption using bcrypt",
        "Built RESTful APIs with Express.js to handle operations for user data and resumes",
        "Used MongoDB for efficient storage and retrieval of user information and resumes",
      ],
    },
    {
      projectName: "Portfolio Website",
      projectLinkFlag: true,
      projectLink: "https://syamantaksarkar.vercel.app/",
      projectTechStack: ["NextJS", "Tailwind CSS", "Context API"],
      date: "Oct-2023",
      color: "#5e8e45",
      projectPicture: "/portfolio_proj.jpg",
      projectDescription: [
        "A portfolio website designed to showcase all my work",
        "Used NextJS for Server Side Rendering",
        "Used Tailwind CSS for efficient code and better performance",
      ],
    },
    {
      projectName: "Weather App",
      projectLinkFlag: true,
      projectLink: "https://s-decico.github.io/WeatherApp/",
      projectTechStack: ["HTML", "CSS", "JavaSxript", "OpenWeatherMap API"],
      date: "Oct-2023",
      color: "#6d9e53",
      projectPicture: "/weather_proj.jpg",
      projectDescription: [
        "A responsive weather website",
        "Uses OpenWeatherMap API to fetch current data based on location",
      ],
    },
    {
      projectName: "Patient Management Dashboard UI",
      projectLinkFlag: false,
      projectLink: "",
      projectTechStack: ["React", "Material UI"],
      date: "Oct-2023",
      color: "#7daf63",
      projectPicture: "/patient_proj.jpg",

      projectDescription: [
        "Designed dashboard UI based on design given by UI team",
        "Used reusable component for faster loading",
        "Used Context API for state management and seamless data sharing among components",
      ],
    },
  ]);

  return (
    <ProjectContext.Provider value={Project}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
