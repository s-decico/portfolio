"use client";
import React from "react";

const ProjectCard = () => {
  return (
    <>
      <div className="project-card w-[1200px] h-[500px] bg-red-900 flex items-center justify-center px-10 gap-5">
        <div className="project-details bg-emerald-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          quo aut nobis obcaecati dignissimos voluptatibus fuga nesciunt quia
          ratione ut? Quisquam error dicta molestias, nihil nam doloremque
          sapiente repudiandae iure.
        </div>
        <div className="project-image w-[800px]">
          <img
            src="https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
