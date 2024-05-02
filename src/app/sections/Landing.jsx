import React from "react";
import TopNavbar from "../components/TopNavbar";
import "../globals.css";
// import dp from "../images";
// import dpImage from "../../images/dp.jpg";

const Landing = () => {
  return (
    <>
      <div className="landing-container w-full h-dvh relative">
        <nav className="navbar-container w-full h-20 flex justify-center">
          <TopNavbar />
        </nav>
        <div className="landing-hero flex justify-between items-center w-full h-80 px-56 overflow-hidden absolute top-1/2 -translate-y-40">
          <div className="hero-text flex flex-col text-5xl">
            <div className="hero-text-top overflow-hidden p-0 text-[#ce4e4e]">
              Idea to Online Impact
            </div>
            <div className="hero-text-bottom overflow-hidden text-[#323232]">
              Let's code your way online
            </div>
          </div>
          <div className="hero-avatar w-72">
            <img
              src={"https://avatar.iran.liara.run/public/boy?username=Ash"}
              alt="DP"
            />
          </div>
        </div>
        <div className="scroll-icon absolute bottom-0 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 text-[#323232]"
          >
            <path
              fillRule="evenodd"
              d="M9.47 15.28a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 1 0-1.06-1.06L10 13.69 6.28 9.97a.75.75 0 0 0-1.06 1.06l4.25 4.25ZM5.22 6.03l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 8.69 6.28 4.97a.75.75 0 0 0-1.06 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Landing;
