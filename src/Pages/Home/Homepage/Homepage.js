import React from "react";
import Adoption from "../Adoption/Adoption";
import Banner from "../Banner/Banner";
import LoverOfAnimals from "../LoverOfAnimals/LoverOfAnimals";
import Services from "../Services/Services";
import Veterinarian from "../Veterinarian/Veterinarian";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Veterinarian></Veterinarian>
      <Services></Services>
      <LoverOfAnimals></LoverOfAnimals>
      <Adoption></Adoption>
    </div>
  );
};

export default Homepage;
