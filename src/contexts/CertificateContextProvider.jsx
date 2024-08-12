"use client";
import React, { useState } from "react";
import CertificateContext from "./CertificateContext";

const CertificateContextProvider = ({ children }) => {
  const [Certificate, setCertificate] = useState([
    {
      name: "The Complete Web Development Bootcamp",
      year: "2023",
      url: "https://www.google.com",
      urlFlag: true,
      image: "/fullstack.jpg",
    },
    {
      name: "C# Basics for Beginners",
      year: "2023",
      url: "https://www.google.com",
      urlFlag: true,
      image: "/cbasics.jpg",
    },
    {
      name: "C# Intermediate for Beginners",
      year: "2023",
      url: "https://www.google.com",
      urlFlag: true,
      image: "/cintermediate.jpg",
    },
    {
      name: "User Experience Design Fundamentals",
      year: "2023",
      url: "https://www.google.com",
      urlFlag: true,
      image: "/uxfund.jpg",
    },
    {
      name: "Build Responsive Websites with HTML and CSS",
      year: "2023",
      url: "https://www.google.com",
      urlFlag: true,
      image: "/htmlcss.jpg",
    },
  ]);

  return (
    <CertificateContext.Provider value={Certificate}>
      {children}
    </CertificateContext.Provider>
  );
};

export default CertificateContextProvider;
