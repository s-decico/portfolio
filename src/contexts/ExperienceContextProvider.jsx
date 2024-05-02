"use client";
import React, { useState } from "react";
import ExperienceContext from "./ExperienceContext";

const ExperienceContextProvider = ({ children }) => {
  const [Experience, setExperience] = useState([
    {
      companyname: "Cognizant",
      designation: "Associate",
      skills: ["React", "JavaScript", "SPFx"],
      from: "Oct-2023",
      to: "Present",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",
      details: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
      ],
    },
    {
      companyname: "Cognizant",
      designation: "Programmer Analyst",
      skills: ["React", "JavaScript", "SPFx"],
      from: "Aug-2022",
      to: "Aug-2023",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",
      details: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
      ],
    },
    {
      companyname: "Cognizant",
      designation: "Programmer Analyst Trainee",
      skills: ["React", "JavaScript", "SPFx"],
      from: "Aug-2021",
      to: "Aug-2022",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Cognizant.png",

      details: [
        "Lorem ipsum dolor sit amet consectetur  molestias",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis harum illum error.",
        "Ratione, nulla. Totam iste neque inventore. Eligendi omnis corporis tempore est in voluptatem obcaecati. Fuga, laborum iusto.",
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
