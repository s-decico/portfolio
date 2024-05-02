import React from "react";
import "../globals.css";

const ExperienceCard = ({ experience }, key) => {
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
    <>
      <div
        className="experience-card relative bg-[#ce4e4e] w-[80vw] h-[90%] p-10 flex flex-col gap-2 text-white overflow-y-hidden"
        key={key}
      >
        <div className="experience-logo flex justify-between items-center">
          <div className="company-name-designation flex flex-col justify-around">
            <div className="company-name text-5xl">{companyname}</div>
            <div className="exp-card-designation text-xl pl-[2px] pt-2">
              {designation}
            </div>
          </div>
          <div className="company-logo w-28 h-28 object-fill  flex flex-col items-center justify-center">
            <img src={companylogo} alt="" />
          </div>
        </div>
        <div className="experience-details flex flex-col gap-2 ">
          <div className="exp-dates ">
            {fromMonth}/{fromYear} -{" "}
            {to == "Present" ? to : `${toMonth} / ${toYear}`}
          </div>

          <div className="exp-card-skills-container flex gap-4 text-2xl ">
            {skills.map((skill) => {
              return <div className="exp-card-skills">{skill}</div>;
            })}
          </div>
          <div className="exp-card-details flex flex-col gap-2">
            {details.map((detail) => {
              return (
                <div className="exp-card-details flex gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4"
                    fill="white"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  {detail}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
