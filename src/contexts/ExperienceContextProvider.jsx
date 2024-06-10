"use client";
import React, { useState } from "react";
import ExperienceContext from "./ExperienceContext";

const ExperienceContextProvider = ({ children }) => {
  const [Experience, setExperience] = useState([
    {
      companyname: "Cognizant",
      designation: "Associate",
      // skills: ["React", "TypeScript", "C#", "REST APIs", "SPFx"],
      skills: [
        {
          skillname: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          skillname: "TypeScript",
          logo: "https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png",
        },
        {
          skillname: "C#",
          logo: "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png",
        },
        {
          skillname: "REST APIs",
          logo: "https://media.licdn.com/dms/image/D4D12AQEeNNHq05k7MA/article-cover_image-shrink_720_1280/0/1687786979245?e=2147483647&v=beta&t=AVc2G-hvHNjTMklQtEt6qlby2l79Bf5dBBkUB5DBRe0",
        },
        {
          skillname: "SPFx",
          logo: "https://www.tatvasoft.com/blog/wp-content/uploads/2020/07/SPFx-Extensions-%E2%80%93-ListView-Command-Set.jpg",
        },
      ],
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
      // skills: ["React", "TypeScript", "JavaScript", "C#", "SPFx", "Powershell"],
      skills: [
        {
          skillname: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },

        {
          skillname: "TypeScript",
          logo: "https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png",
        },

        {
          skillname: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          skillname: "C#",
          logo: "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png",
        },
        {
          skillname: "SPFx",
          logo: "https://www.tatvasoft.com/blog/wp-content/uploads/2020/07/SPFx-Extensions-%E2%80%93-ListView-Command-Set.jpg",
        },
        {
          skillname: "Powershell",
          logo: "https://cdn.iconscout.com/icon/free/png-256/free-powershell-3521649-2945093.png",
        },
      ],
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
      // skills: ["React", "JavaScript", "SPFx", "Power Automate"],
      skills: [
        {
          skillname: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          skillname: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          skillname: "SPFx",
          logo: "https://www.tatvasoft.com/blog/wp-content/uploads/2020/07/SPFx-Extensions-%E2%80%93-ListView-Command-Set.jpg",
        },
        {
          skillname: "Power Automate",
          logo: "https://play-lh.googleusercontent.com/aeXs0qriXwmHVWtq9u4zVUO6SifULKtJOQdtBg6wDQqaNEaaJKl6b2oiABMmHn6yLH8",
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
