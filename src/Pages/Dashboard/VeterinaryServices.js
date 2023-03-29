import React from "react";
import NeuterServices from "./AllVeterinaryServiecs/NeuterServices";
import VaccinationCareServices from "./AllVeterinaryServiecs/VaccinationCareServices";
import VeterinarianServices from "./AllVeterinaryServiecs/VeterinarianServices";

const VeterinaryServices = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">
        All Veterinary Services
      </h1>
      <div>
        <VeterinarianServices></VeterinarianServices>
        <VaccinationCareServices></VaccinationCareServices>
        <NeuterServices></NeuterServices>
      </div>
    </div>
  );
};

export default VeterinaryServices;
