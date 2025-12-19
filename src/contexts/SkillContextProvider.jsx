"use client";
import React, { useState } from "react";
import SkillContext from "./SkillContext";

const SkillContextProvider = ({ children }) => {
  const [Skills, setSkills] = useState([
    {
      skillName: "NextJS",
      logoURL:
        "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp",
    },
    {
      skillName: "React",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },

    {
      skillName: "NodeJS",
      logoURL: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
    },
    {
      skillName: "ExpressJs",
      logoURL: "https://img.icons8.com/office80/1200/express-js.jpg",
    },
    {
      skillName: "MongoDB",
      logoURL: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      skillName: "JWT",
      logoURL: "https://logo.svgcdn.com/logos/jwt.png",
    },
    {
      skillName: "OAuth",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/500px-Oauth_logo.svg.png",
    },
    {
      skillName: "HTML",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "CSS",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png",
    },
    {
      skillName: "Tailwind CSS",
      logoURL: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    // {
    //   skillName: "Framer Motion",
    //   logoURL:
    //     "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    // },
    {
      skillName: "TypeScript",
      logoURL: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    },
    {
      skillName: "JavaScript",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      skillName: "C++",
      logoURL:
        "https://juststickers.in/wp-content/uploads/2016/09/c-plus-plus.png",
    },
    {
      skillName: "C#",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1067px-Logo_C_sharp.svg.png",
    },
  ]);

  return (
    <SkillContext.Provider value={Skills}>{children}</SkillContext.Provider>
  );
};

export default SkillContextProvider;
