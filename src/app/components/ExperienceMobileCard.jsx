import React from "react";

const ExperienceMobileCard = ({ experience }, key) => {
  const { companyname, designation, skills, from, to, companylogo, details } =
    experience;

  let parsedFromDate = new Date(from);
  let fromMonth = parsedFromDate.getMonth() + 1;
  let fromYear = parsedFromDate.getFullYear();
  let parsedToDate;
  let toMonth;
  let toYear;
  if (to !== "Present") {
    parsedToDate = new Date(to);
    toMonth = parsedToDate.getMonth() + 1;
    toYear = parsedToDate.getFullYear();
  }
  return (
    <div className="exp-mobile-card flex flex-col text-[#323232] p-8 overflow-hidden">
      <div className="exp-mobile-company-details flex flex-col gap-2 justify-between items-center">
        <div className="exp-mobile-company-logo w-40 h-40 rounded-full overflow-hidden">
          <img src={companylogo != null && companylogo} alt="" />
        </div>
        <div className="exp-mobile-company-name text-5xl py-6">
          {companyname != null && companyname}
        </div>
      </div>
      <div className="exp-mobile-company-designation text-3xl pt-2 pb-1 flex justify-center items-center text-center">
        {designation != null && designation}
      </div>
      <div className="exp-mobile-company-date flex justify-center items-center pb-10">
        {fromMonth != null && fromMonth}/{fromYear != null && fromYear} -{" "}
        {to == "Present"
          ? to
          : `${toMonth != null && toMonth} / ${toYear != null && toYear}`}
      </div>
      <div className="exp-mobile-company-skills flex justify-center items-center gap-2 flex-wrap">
        {skills.map((skill, index) => {
          if (skill) {
            return (
              <div
                className="skill-bubble flex flex-col items-center justify-center gap-2"
                key={index}
              >
                <img
                  src={skill.logo}
                  alt=""
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
                <div className="skill-bubble-text text-sm">
                  {skill.skillname}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ExperienceMobileCard;
