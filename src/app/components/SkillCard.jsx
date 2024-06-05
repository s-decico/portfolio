import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../globals.scss";

const SkillCard = ({ skill }, key) => {
  const { skillName, logoURL } = skill;
  if (skill) {
    return (
      <div className="skill-box w-40 h-40 flex flex-col border-2 border-[#6cb545] hover:scale-110 transition-all delay-50 ease-out">
        <div className="skill-logo h-28  flex justify-center items-center">
          <img
            src={logoURL}
            alt=""
            className="skill-img h-24"
            style={{ fill: "white" }}
          />
        </div>
        <div className="skill-name flex-grow bg-[#6cb545] flex items-center justify-center text-white ">
          {skillName}
        </div>
      </div>
    );
  }
};

export default SkillCard;
