import CertificateContext from "@/contexts/CertificateContext";
import React, { useRef, useContext } from "react";
import CertificateCard from "../components/CertificateCard";

const Certificate = () => {
  const CertificateObj = useContext(CertificateContext);

  return (
    <>
      <div className="certificate-container bg-[#323232] h-max-content w-full flex flex-col justify-center items-center py-8 overflow-x-hidden ">
        <div className="heading-font text-5xl text-white py-10">
          CERTIFICATIONS
        </div>

        <div className="certificate-cards-container flex justify-center items-center flex-wrap h-max w-full gap-4 px-20 py-8 overflow-x-hidden">
          {CertificateObj.map((x, id) => {
            return <CertificateCard CertificateObj={x} key={id} id={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Certificate;
