import React, { useState, useContext } from "react";
import { motion, useMotionValue } from "framer-motion";
import ExperienceMobileCard from "./ExperienceMobileCard";
import ExperienceContext from "@/contexts/ExperienceContext";
import "../globals.scss";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 0.5,
  stiffness: 300,
  damping: 30,
};

export const ExperienceMobile = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const ExperienceObj = useContext(ExperienceContext);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -20 && imgIndex < ExperienceObj.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= 20 && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full py-20 px-4">
      <div className="flex flex-col items-center mb-10">
        <h2 className="heading-font text-5xl text-white">EXPERIENCE</h2>
        <div className="w-16 h-1 bg-[#6cb545] mt-2 rounded-full" />
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-stretch active:cursor-grabbing"
      >
        {ExperienceObj.map((experience, index) => (
          <div key={index} className="w-full shrink-0 px-2 flex">
            <div className="glass-morphism w-full p-6 flex flex-col items-center border-white/5 shadow-xl">
              <ExperienceMobileCard experience={experience} />
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center gap-3 mt-8">
        {ExperienceObj.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${
              idx === imgIndex ? "w-8 bg-[#6cb545]" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
