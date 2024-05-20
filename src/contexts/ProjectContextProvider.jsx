"use client";
import React, { useState } from "react";
import ProjectContext from "./ProjectContext";

const ProjectContextProvider = ({ children }) => {
  const [Project, setProject] = useState([
    {
      projectName: "Resumate",
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
      color: "#417326",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "Full stack responsive resume creation website",
        "Implemented user authentication with JWT and password encryption using bcrypt",
        "Built RESTful APIs with Node.js and Express.js to handle operations for user data and resumes",
        "Integrated MongoDB for efficient storage and retrieval of user information and resumes",
      ],
    },
    {
      projectName: "Portfolio Website",
      projectLink: "https://syamantaksarkar.vercel.app/",
      projectTechStack: ["NextJS", "Tailwind CSS", "Context API"],
      date: "Oct-2023",
      color: "#528636",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "A portfolio website designed to showcase all my work",
        "Used NextJS for Server Side Rendering",
        "Used Tailwind CSS for efficient code and better performance",
      ],
    },
    {
      projectName: "Weather App",
      projectLink: "https://s-decico.github.io/WeatherApp/",
      projectTechStack: ["HTML", "CSS", "JavaSxript", "OpenWeatherMap API"],
      date: "Oct-2023",
      color: "#639945",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "A responsive weather website",
        "Uses OpenWeatherMap API to fetch current data based on location",
      ],
    },
    {
      projectName: "Patient Management Dashboard",
      projectLink: "",
      projectTechStack: ["React", "Material UI"],
      date: "Oct-2023",
      color: "#79b15b",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
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
