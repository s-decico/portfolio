"use client";
import React, { useState } from "react";
import SkillContext from "./SkillContext";

const SkillContextProvider = ({ children }) => {
  const [Skills, setSkills] = useState([
    {
      skillName: "NextJS",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "React",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "JavaScript",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "TypeScript",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "HTML",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "CSS",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "NodeJS",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "ExpressJs",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "MongoDB",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "JWT",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "OAuth",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "C++",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
    {
      skillName: "C#",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    },
  ]);

  return (
    <SkillContext.Provider value={Skills}>{children}</SkillContext.Provider>
  );
};

export default SkillContextProvider;
