import React from "react";
import Adoption from "../Adoption/Adoption";
import Banner from "../Banner/Banner";
import Branding from "../Branding/Branding";
import DogCareService from "../DogCareService/DogCareService";
import LoverOfAnimals from "../LoverOfAnimals/LoverOfAnimals";
import RecentPosts from "../RecentPosts/RecentPosts";
import Services from "../Services/Services";
import VetCareTeam from "../VetCareTeam/VetCareTeam";
import Veterinarian from "../Veterinarian/Veterinarian";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Veterinarian></Veterinarian>
      <Services></Services>
      <LoverOfAnimals></LoverOfAnimals>
      <DogCareService></DogCareService>
      <Adoption></Adoption>
      <VetCareTeam></VetCareTeam>
      <Branding></Branding>
      <RecentPosts></RecentPosts>
    </div>
  );
};

export default Homepage;
