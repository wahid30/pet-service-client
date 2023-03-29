import React from "react";
import Adoptions from "./AllAdoptions/Adoptions";
import DayCareServices from "./DayCareServices";
import VeterinaryServices from "./VeterinaryServices";

const DashBoardViews = () => {
  return (
    <div
      className="w-[90%] mx-auto my-5
    "
    >
      {/* Veterinary Services  */}
      <VeterinaryServices></VeterinaryServices>
      {/* day care services  */}
      <DayCareServices></DayCareServices>
      {/* Adaptions  */}
      <Adoptions></Adoptions>
    </div>
  );
};

export default DashBoardViews;
