"use client";
import React, { useState } from "react";
import ProjectContext from "./ProjectContext";

const ProjectContextProvider = ({ children }) => {
  const [Project, setProject] = useState([
    {
      projectName: "RESUMATE",
      projectLinkFlag: true,
      projectLink: "https://resumatebys.vercel.app/",
      projectTechStack: [
        "React",
        "JavaScript",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Authentication",
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
      projectName: "PORTFOLIO WEBSITE",
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
      projectName: "TAB GROUPER CHROME EXTENSION",
      projectLinkFlag: true,
      projectLink: "https://github.com/s-decico/tabs-group-extension",
      projectTechStack: ["JavaScript", "Chrome APIs"],
      date: "July-2024",
      color: "#6d9e53",
      projectPicture: "/tabextension_proj.jpg",

      projectDescription: [
        "Designed a simple easy to use extension",
        "Just with one click group all the tabs based on domain",
        "With one click you can ungroup also at your convenience",
      ],
    },
    {
      projectName: "WEATHER APP",
      projectLinkFlag: true,
      projectLink: "https://weatherwebtoday.vercel.app/",
      projectTechStack: ["HTML", "CSS", "JavaSxript", "OpenWeatherMap API"],
      date: "Oct-2023",
      color: "#7daf63",
      projectPicture: "/weather_proj.jpg",
      projectDescription: [
        "A responsive weather website",
        "Uses OpenWeatherMap API to fetch current data based on location",
      ],
    },
    {
      projectName: "PATIENT MANAGEMENT DASHBOARD UI",
      projectLinkFlag: false,
      projectLink: "",
      projectTechStack: ["React", "Material UI"],
      date: "Oct-2023",
      color: "#7dbf63",
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
