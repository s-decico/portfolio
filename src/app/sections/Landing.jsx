import React from "react";
import TopNavbar from "../components/TopNavbar";
import "../globals.scss";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <>
      <div className="landing-container w-full h-dvh relative flex flex-col justify-center items-center">
        <nav className="navbar-container absolute top-0 w-full h-20 flex justify-center">
          <TopNavbar />
        </nav>
        <div className="landing-hero flex justify-between items-center w-full h-80 px-[10%] overflow-hidden absolute top-1/2 -translate-y-40">
          <div className="hero-text flex flex-col text-5xl ">
            {/* <div className="hero-text-top overflow-hidden p-0 text-[#6cb545] min-h-14 ">
              Idea to Online Impact
            </div> */}
            <div className="hero-text-top overflow-hidden p-0 text-[#6cb545] min-h-14">
              <TypeAnimation
                sequence={[
                  "Hi! I am Syamantak",
                  1000,
                  "Hi! I am a full stack developer",
                  1000,
                ]}
                wrapper="div"
                speed={50}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  fontFamily: "Anton",
                }}
                repeat={Infinity}
              />
            </div>

            <div
              className="hero-text-bottom overflow-hidden text-[#323232] min-h-14 "
              style={{
                fontFamily: "Anton",
              }}
            >
              Lets code your way online
            </div>
          </div>
          <div className="hero-avatar ">
            <Image
              src="/dp.jpg"
              alt="Display pic"
              width={280}
              height={280}
              className="rounded-full"
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
