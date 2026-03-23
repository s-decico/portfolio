"use client";
import React, { useState } from "react";
import SkillContext from "./SkillContext";

const SkillContextProvider = ({ children }) => {
  const [Skills, setSkills] = useState([
    {
      skillName: "NextJS",
      logoURL: "https://skillicons.dev/icons?i=nextjs",
    },
    {
      skillName: "React",
      logoURL: "https://skillicons.dev/icons?i=react",
    },
    {
      skillName: "NodeJS",
      logoURL: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      skillName: "ExpressJs",
      logoURL: "https://skillicons.dev/icons?i=express",
    },
    {
      skillName: "MongoDB",
      logoURL: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      skillName: "JWT",
      logoURL: "https://cdn.simpleicons.org/jsonwebtokens",
    },
    {
      skillName: "OAuth",
      logoURL: "https://cdn.simpleicons.org/auth0",
    },
    {
      skillName: "HTML",
      logoURL: "https://skillicons.dev/icons?i=html",
    },
    {
      skillName: "CSS",
      logoURL: "https://skillicons.dev/icons?i=css",
    },
    {
      skillName: "Tailwind CSS",
      logoURL: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      skillName: "TypeScript",
      logoURL: "https://skillicons.dev/icons?i=typescript",
    },
    {
      skillName: "JavaScript",
      logoURL: "https://skillicons.dev/icons?i=javascript",
    },
    {
      skillName: "C++",
      logoURL: "https://skillicons.dev/icons?i=cpp",
    },
    {
      skillName: "C#",
      logoURL: "https://skillicons.dev/icons?i=cs",
    },
  ]);

  return (
    <SkillContext.Provider value={Skills}>{children}</SkillContext.Provider>
  );
};

export default SkillContextProvider;
