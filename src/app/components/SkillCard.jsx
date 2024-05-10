import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../globals.scss";

const SkillCard = ({ skill }, key) => {
  return (
    <div className=" w-40 h-40 flex flex-col border-2 border-[#ce4e4e] hover:scale-110 transition-all delay-50 ease-out">
      <div className="skill-logo h-28  flex justify-center items-center">
        <img
          src={skill.logoURL}
          alt=""
          className="h-24"
          style={{ fill: "white" }}
        />
      </div>
      <div className="skill-name flex-grow bg-[#ce4e4e] flex items-center justify-center text-white ">
        {skill.skillName}
      </div>
    </div>
  );
};

export default SkillCard;
