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
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          skillname: "TypeScript",
          logo: "https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png",
        },
        {
          skillname: "Node",
          logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
          skillname: "MongoDB",
          logo: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        },
        {
          skillname: "ExpressJs",
          logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
        },
      ],
      from: "Dec-2024",
      to: "Present",
      companylogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOb0W_vzx_kj-Ty0DDoRHMf1k7MFpajnMKVA&s",
      details: [
        "Resolved critical screen reader and keyboard navigation issues, significantly boosting user inclusivity",
        "Created a flexible authentication solution, seamlessly integrating OAuth with traditional login methods for broader user choice",
        "Improved application responsiveness through strategic memoization and efficient re-render control",
        "Optimized global state management for minimized re-renders and enhanced data flow efficiency",
      ],
    },
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
          skillname: "OAuth",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhh7jt2KAnGn2VSYB9P-Z5ETReMXwsWowkwA&s",
        },
      ],
      from: "Oct-2023",
      to: "Dec-2023",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",
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
          skillname: "Powershell",
          logo: "https://cdn.iconscout.com/icon/free/png-256/free-powershell-3521649-2945093.png",
        },
      ],
      from: "Aug-2022",
      to: "Aug-2023",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          skillname: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
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
