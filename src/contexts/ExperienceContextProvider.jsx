"use client";
import React, { useState } from "react";
import ExperienceContext from "./ExperienceContext";

const ExperienceContextProvider = ({ children }) => {
  const [Experience, setExperience] = useState([
    {
      companyname: "Infosys",
      designation: "Senior Associate Consultant",
      // skills: ["React", "TypeScript", "C#", "REST APIs", "SPFx"],
      skills: [
        {
          skillname: "React",
          logo: "https://skillicons.dev/icons?i=react",
        },
        {
          skillname: "TypeScript",
          logo: "https://skillicons.dev/icons?i=ts",
        },
        {
          skillname: "Node",
          logo: "https://skillicons.dev/icons?i=nodejs",
        },
        {
          skillname: "MongoDB",
          logo: "https://skillicons.dev/icons?i=mongodb",
        },
        {
          skillname: "ExpressJs",
          logo: "https://skillicons.dev/icons?i=express",
        },
      ],
      from: "Dec-2024",
      to: "Present",
      companylogo:
        "https://cdn.worldvectorlogo.com/logos/infosys.svg",
      details: [
        "Collaborated with UI/UX and Product teams to launch new features and optimize application performance.",
        "Engineered an OAuth 2.0 system with test-user mapping, enhancing audit traceability and developer security.",
        "Reduced load times by 20% through code splitting, memoization, and legacy refactoring.",
        "Achieved a 40% gain in responsiveness by offloading heavy initial-load tasks to Web Workers and removed page unresponsive issue.",
        "Improved inclusivity by resolving screen reader and keyboard navigation issues (WCAG compliance).",
        "Gained additional 5% speed improvement by eliminating orphaned DOM nodes and redundant event handlers.",
      ],
    },
    {
      companyname: "Cognizant",
      designation: "Associate",
      // skills: ["React", "TypeScript", "C#", "REST APIs", "SPFx"],
      skills: [
        {
          skillname: "React",
          logo: "https://skillicons.dev/icons?i=react",
        },
        {
          skillname: "TypeScript",
          logo: "https://skillicons.dev/icons?i=ts",
        },
        {
          skillname: "C#",
          logo: "https://skillicons.dev/icons?i=cs",
        },
        {
          skillname: "REST APIs",
          logo: "https://skillicons.dev/icons?i=postman",
        },
        {
          skillname: "OAuth",
          logo: "https://cdn.simpleicons.org/auth0",
        },
      ],
      from: "Oct-2023",
      to: "Dec-2023",
      companylogo:
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Cognizant.svg",
      details: [
        "Reduced react app load time by 40% by implementing lazy loading and memoization(caching)",
        "Integrated OAuth for better security and enhance user experience and increase signup rates by 40%",
        "Demonstrated leadership skill by managing a team to enhance and maintain an application",
        "Collaborated with cross-functional teams( UI/UX designers, Product Managers ) to understand user flows and optimize the app, reducing tickets by 35%",
        "Improved performance of React app by using state management techniques and useEffect hook reducing unnecessary re-renders",
        "Implemented Multilanguage support in React application increasing app reach by 2x",
      ],
    },
    {
      companyname: "Cognizant",
      designation: "Programmer Analyst",
      // skills: ["React", "TypeScript", "JavaScript", "C#", "SPFx", "Powershell"],
      skills: [
        {
          skillname: "React",
          logo: "https://skillicons.dev/icons?i=react",
        },

        {
          skillname: "TypeScript",
          logo: "https://skillicons.dev/icons?i=ts",
        },

        {
          skillname: "JavaScript",
          logo: "https://skillicons.dev/icons?i=js",
        },
        {
          skillname: "C#",
          logo: "https://skillicons.dev/icons?i=cs",
        },
        {
          skillname: "Powershell",
          logo: "https://skillicons.dev/icons?i=powershell",
        },
      ],
      from: "Aug-2022",
      to: "Aug-2023",
      companylogo:
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Cognizant.svg",
      details: [
        "Delivered Azure Webjob to automate user task saving $5000/month",
        "Implemented middlewares to increase security and handle business logics",
        "Reduced React app load time by 20% by refactoring code and reducing REST calls",
        "Optimized MongoDB performance by 30% by implementing indexing and embedding frequently fetched data together",
        "Proficient in writing clean, efficient code and debugging for high-quality applications following SDLC(Agile)",
      ],
    },
    {
      companyname: "Cognizant",
      designation: "Programmer Analyst Trainee",
      // skills: ["React", "JavaScript", "SPFx", "Power Automate"],
      skills: [
        {
          skillname: "React",
          logo: "https://skillicons.dev/icons?i=react",
        },
        {
          skillname: "JavaScript",
          logo: "https://skillicons.dev/icons?i=js",
        },
      ],
      from: "Aug-2021",
      to: "Aug-2022",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",

      details: [
        "Developed and maintained UI components using React.js, resulting in improved user experience and enhanced interactivity",
        "Integrated React front-end with APIs to fetch and display dynamic content from backend systems",
        "Implemented reusable components to optimize performance and reduce load times",
        "Skilled in debugging and troubleshooting to ensure smooth performance of web applications",
      ],
    },
  ]);

  return (
    <ExperienceContext.Provider value={Experience}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
