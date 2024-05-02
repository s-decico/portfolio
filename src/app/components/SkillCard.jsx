import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../globals.css";

const SkillCard = ({ skill }, key) => {
  return (
    <div className="bg-green-400 w-40 h-40 flex flex-col">
      <div className="skill-logo h-28 bg-green-500 flex justify-center items-center">
        <img src={skill.logoURL} alt="" className="h-24" />
      </div>
      <div className="skill-name flex-grow bg-red-500 flex items-center justify-center  ">
        {skill.skillName}
      </div>
    </div>
  );
};

export default SkillCard;
