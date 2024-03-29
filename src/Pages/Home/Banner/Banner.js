import React from "react";
import { Link } from "react-router-dom";
import bannerDog from "../../../images/dog.png";

const Banner = () => {
  return (
    <div className="banner-bg global-color">
      <div className="flex justify-center items-center gap-5 px-5 custom-responsive">
        <div className="grid gap-5">
          <h1 className="text-6xl">Pet Daycare And Veterinary Service</h1>
          <p className="text-2xl">
            Best online safe & reliable Pet Care Service
          </p>
          <div className="flex gap-3">
            <Link to="/contact">
              <button className="btn btn-outline">Contact Us</button>
            </Link>
            <Link to="/service">
              <button className="btn btn-outline btn-info">Our Service</button>
            </Link>
          </div>
        </div>
        <div>
          <img src={bannerDog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
