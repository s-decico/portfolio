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
      skillName: "JavaScript",
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      skillName: "TypeScript",
      logoURL:
        "https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png",
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
      skillName: "NodeJS",
      logoURL:
        "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    },
    {
      skillName: "ExpressJs",
      logoURL:
        "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    },
    {
      skillName: "MongoDB",
      logoURL:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png",
    },
    {
      skillName: "JWT",
      logoURL:
        "https://blog.larapulse.com/files/original/images/d5/a3/d5a367b37c344b9dab323f9a4b1430847d12b403.png",
    },
    {
      skillName: "OAuth",
      logoURL:
        "https://static-00.iconduck.com/assets.00/oauth-icon-2043x2048-72bpfcq4.png",
    },
    {
      skillName: "C++",
      logoURL:
        "https://static-00.iconduck.com/assets.00/c-icon-1822x2048-y6utrv43.png",
    },
    {
      skillName: "C#",
      logoURL:
        "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png",
    },
  ]);

  return (
    <SkillContext.Provider value={Skills}>{children}</SkillContext.Provider>
  );
};

export default SkillContextProvider;
