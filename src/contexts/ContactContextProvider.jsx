"use client";
import React, { useState } from "react";
import ContactContext from "./ContactContext";

const ContactContextProvider = ({ children }) => {
  const [Contact, setContact] = useState({
    email: "srkr.9298@gmail.com",
    socials: {
      github: { url: "https://github.com/s-decico", color: "#2b3137" },
      linkedin: {
        url: "https://www.linkedin.com/in/syamantak-sarkar",
        color: "#0077b5",
      },
      instagram: {
        url: "https://www.instagram.com/thisisrkr",
        color: "#E1306C",
      },
    },
  });

  return (
    <ContactContext.Provider value={Contact}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
