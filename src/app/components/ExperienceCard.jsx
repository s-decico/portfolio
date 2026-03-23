import React from "react";
import "../globals.scss";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  const { companyname, designation, skills, from, to, companylogo, details } =
    experience;

  const formatDate = (dateStr) => {
    if (dateStr === "Present") return "Present";
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="glass-morphism p-8 md:p-12 w-full h-full flex flex-col gap-8 transition-all duration-300 hover:border-[#6cb545] group">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="card-heading-font text-4xl md:text-5xl text-[#6cb545] tracking-tight">
            {companyname}
          </h3>
          <p className="text-xl md:text-2xl font-medium text-white/90">
            {designation}
          </p>
          <p className="text-sm md:text-md text-white/50 font-light mt-1 uppercase tracking-widest">
            {formatDate(from)} — {formatDate(to)}
          </p>
        </div>
        {companylogo && (
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-xl p-3 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
            <img 
              src={companylogo} 
              alt={companyname} 
              className="w-full h-full object-contain filter brightness-110"
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-white/70 group-hover:border-[#6cb545]/30 group-hover:text-[#6cb545] transition-colors"
          >
            {skill.skillname}
          </span>
        ))}
      </div>

      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex gap-4 text-white/70 text-base md:text-lg leading-relaxed"
          >
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6cb545] shrink-0" />
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
