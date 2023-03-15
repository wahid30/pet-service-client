import React from "react";
import loveImg from "../../../images/dog2.png";

const LoverOfAnimals = () => {
  return (
    <div className="my-5 flex justify-center items-center gap-5 px-5 custom-responsive">
      {" "}
      <div>
        {" "}
        <img className="custom-img-size" src={loveImg} alt="" />
      </div>
      <div className="grid gap-5">
        <h1 className="text-5xl">The Perfect Pet Hotel</h1>
        <p className="2xl">
          We know just how important your pet is to you, which is why our highly{" "}
          experienced pet handlers do everything they can to keep your pets safe{" "}
          and happy while they stay with us. With no cage boarding and very{" "}
          competitive rates, you'll feel comfortable turning to our Daycare at{" "}
          any time you need to find a place for you loved one to stay. We've{" "}
          even been featured on Yelp.com™ due to the excellent reviews regarding
          our service!
        </p>
      </div>
    </div>
  );
};

export default LoverOfAnimals;
