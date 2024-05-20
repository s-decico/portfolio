"use client";
import React, { useState } from "react";
import ExperienceContext from "./ExperienceContext";

const ExperienceContextProvider = ({ children }) => {
  const [Experience, setExperience] = useState([
    {
      companyname: "Cognizant",
      designation: "Associate",
      skills: ["React", "TypeScript", "C#", "REST APIs", "SPFx"],
      from: "Oct-2023",
      to: "Present",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",
      details: [
        "Managed a team of 3 to maintain and improve the applications and meet deadlines",
        "Optimized Azure webjob reducing turnaround time by 30%",
        "Improved app performance by implementing lazy loading and memoization",
        "Improved the user experience by studing user flows and problems",
        "Improved performance of React app by using state management techniques reducing unnecessary re-renders",
        "Implemented multilanguage support in react application enhancing reach and usability",
      ],
    },
    {
      companyname: "Cognizant",
      designation: "Programmer Analyst",
      skills: ["React", "TypeScript", "JavaScript", "C#", "SPFx", "Powershell"],
      from: "Aug-2022",
      to: "Aug-2023",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",
      details: [
        "Learnt and Built a Azure Webjob using C# to connect with backend and automate task",
        "Added multilanguage support to C# Azure webjob for it to be used in all regions",
        "Reduced load times by implementing optimization techniques such as code refactoring and restructuring code for lesser REST calls",
        "Proven track record of delivering high-quality software solutions within tight deadlines",
        "Actively participated in code reviews and provided constructive feedback to team members to ensure code quality",
      ],
    },
    {
      companyname: "Cognizant",
      designation: "Programmer Analyst Trainee",
      skills: ["React", "JavaScript", "SPFx", "Power Automate"],
      from: "Aug-2021",
      to: "Aug-2022",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",

      details: [
        "Developed and maintained UI components using React.js, resulting in improved user experience and enhanced interactivity",
        "Integrated React front-end with APIs to fetch and display dynamic content from backend systems",
        "Implemented reusable components to optimize performance and reduce load times",
        "Skilled in debugging and troubleshooting to ensure smooth performance of web applications",
        "Built good understanding of HTML, CSS, and JavaScript for web development",
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
