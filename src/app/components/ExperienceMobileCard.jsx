import React from "react";

const ExperienceMobileCard = ({ experience }) => {
  const { companyname, designation, skills, from, to, companylogo } = experience;

  const formatDate = (dateStr) => {
    if (dateStr === "Present") return "Present";
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="flex flex-col items-center w-full text-white">
      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 p-2 mb-6 shadow-lg">
        {companylogo && <img src={companylogo} alt={companyname} className="w-full h-full object-contain" />}
      </div>
      
      <h3 className="card-heading-font text-3xl text-center mb-2">{companyname}</h3>
      <p className="text-[#6cb545] text-lg font-medium text-center mb-1">{designation}</p>
      <p className="text-white/40 text-sm mb-8">{formatDate(from)} — {formatDate(to)}</p>

      <div className="flex flex-wrap justify-center gap-4 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl glass-morphism border-white/10 p-2 flex items-center justify-center">
              <img src={skill.logo} alt={skill.skillname} className="w-full h-full object-contain" />
            </div>
            <span className="text-[10px] text-white/50">{skill.skillname}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceMobileCard;
