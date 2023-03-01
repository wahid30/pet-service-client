import React from "react";
import "./Branding.css";
import { FaBriefcaseMedical, FaHandHoldingHeart } from "react-icons/fa";
import { GiMedicalThermometer } from "react-icons/gi";

const Branding = () => {
  return (
    <div className="branding-bg flex items-center justify-around custom-responsive">
      {/* 001  */}
      <div className="grid gap-5 text-white my-5 p-5 text-center">
        <div className="ml-[60px]">
          <FaHandHoldingHeart className="text-9xl"></FaHandHoldingHeart>
        </div>
        <h1 className="text-4xl font-bold">+34793</h1>
        <h1 className="text-4xl font-bold">Happy Clients</h1>
      </div>
      {/* 002  */}
      <div className="grid gap-5 text-white my-5 p-5 text-center">
        <div className="ml-[60px]">
          <FaBriefcaseMedical className="text-9xl"></FaBriefcaseMedical>
        </div>
        <h1 className="text-4xl font-bold">+45382</h1>
        <h1 className="text-4xl font-bold">Departament</h1>
      </div>
      {/* 003  */}
      <div className="grid gap-5 text-white my-5 p-5 text-center">
        <div className="ml-[60px]">
          <GiMedicalThermometer className="text-9xl"></GiMedicalThermometer>
        </div>
        <h1 className="text-4xl font-bold">+54762</h1>
        <h1 className="text-4xl font-bold">Vaccinations</h1>
      </div>
    </div>
  );
};

export default Branding;
