"use client";
import React, { useState } from "react";
import ProjectContext from "./ProjectContext";

const ProjectContextProvider = ({ children }) => {
  const [Project, setProject] = useState([
    {
      projectName: "Project 1",
      projectLink: "https://www.google.com",
      projectTechStack: ["React", "JavaScript", "SPFx"],
      date: "Oct-2023",
      color: "#1a4480",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident, accusamus est vero cum, dolor ducimus mollitia voluptatem quae ullam iusto exercitationem, illo nesciunt. Quo est corrupti officia error ut, accusantium in, dolores doloremque laudantium perspiciatis consectetur excepturi possimus sed optio ea voluptatum. Voluptatem facilis nostrum sunt est laudantium provident rem eligendi, amet debitis adipisci quaerat assumenda. Labore fugit temporibus voluptates quisquam itaque ratione, doloremque porro sed quo animi totam nihil, nam alias minus expedita est a, ab ea facere debitis vel voluptate autem recusandae officiis. Libero quo natus recusandae magni excepturi animi, rem fugiat aliquid reprehenderit voluptate, dolorem amet?",
      ],
    },
    {
      projectName: "Project 2",
      projectLink: "https://www.google.com",
      projectTechStack: ["React", "JavaScript", "SPFx"],
      date: "Oct-2023",
      color: "#dddddd",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
      ],
    },
    {
      projectName: "Project 3",
      projectLink: "https://www.google.com",
      projectTechStack: ["React", "JavaScript", "SPFx"],
      date: "Oct-2023",
      color: "#b26c78",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
      ],
    },
    {
      projectName: "Project 4",
      projectLink: "https://www.google.com",
      projectTechStack: ["React", "JavaScript", "SPFx"],
      date: "Oct-2023",
      color: "#f794a5",
      projectPicture:
        "https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg",
      projectDescription: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
      ],
    },
    {
      projectName: "Project 5",
      projectLink: "https://www.google.com",
      projectTechStack: ["React", "JavaScript", "SPFx"],
      date: "Oct-2023",
      color: "#b3d4cf",
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
