import React from "react";
import loveImg from "../../../images/dog2.png";

const LoverOfAnimals = () => {
  return (
    <div
      className="my-5
flex justify-center items-center gap-5 px-5 custom-responsive"
    >
      {" "}
      <div>
        {" "}
        <img src={loveImg} alt="" />
      </div>
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
    </div>
  );
};

export default LoverOfAnimals;
