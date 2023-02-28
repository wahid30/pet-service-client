import React from "react";
import veterinarianImg from "../../../images/dog1.jpg";

const Veterinarian = () => {
  return (
    <div
      className="my-5
  flex justify-center items-center gap-5 px-5"
    >
      <div className="grid gap-5">
        <h1 className="text-5xl">As a veterinarian and lover of animals.</h1>
        <p className="2xl">
          Lorem Ipsum available but the majoty suffered alteration in some form,
          by humour randomised words.
        </p>
        <div>
          <button className="primary-custom-btn">Our Service</button>
        </div>
      </div>
      <div>
        {" "}
        <img src={veterinarianImg} alt="" />
      </div>
    </div>
  );
};

export default Veterinarian;
