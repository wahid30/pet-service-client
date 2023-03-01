import React from "react";
import veterinarianImg from "../../../images/dog1.jpg";

const Veterinarian = () => {
  return (
    <div
      className="my-5
  flex justify-center items-center gap-5 px-5 custom-responsive"
    >
      <div className="grid gap-5">
        <h1 className="text-5xl">Medical care for Dogs & Cats</h1>
        <p className="2xl">
          We receive almost all kind of medical request service for all kinds of
          Cats & Dogs. Sometime we also provide medical service to other kinds
          of animals depending on the situation.
        </p>
      </div>
      <div>
        {" "}
        <img src={veterinarianImg} alt="" />
      </div>
    </div>
  );
};

export default Veterinarian;
