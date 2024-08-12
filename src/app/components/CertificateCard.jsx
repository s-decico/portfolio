import React, { useRef, useContext } from "react";
import Image from "next/image";

const CertificateCard = ({ CertificateObj }, id) => {
  const { name, year, url, urlFlag, image } = CertificateObj;
  console.log(name);
  return (
    <div className="certificate-card  flex flex-col h-[45%] w-[30%] min-h-[20rem] min-w-[20rem] overflow-hidden border-2 border-[#6cb545]">
      <div className="certificate-image h-full w-full object-cover bg-green-400">
        <img src={image} alt="certificate image" className="h-full w-full" />
      </div>
      <div className="certificate-details  min-h-28 border-t-2  border-[#6cb545] text-white p-2">
        <div className="certificate-name card-heading-font">{name}</div>
        <div className="certificate-year">{year}</div>
        {urlFlag && (
          <button className="certificate-url hover:text-[#6cb545] transition-all delay-75 flex items-center gap-2">
            Link to certificate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
