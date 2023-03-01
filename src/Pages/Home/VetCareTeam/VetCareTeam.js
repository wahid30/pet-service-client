import React from "react";
import { Link } from "react-router-dom";
import team1 from "../../../images/team1.jpg";
import team2 from "../../../images/team2.jpg";
import team3 from "../../../images/team3.jpg";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";

const VetCareTeam = () => {
  return (
    <div className="px-5">
      <div className="grid gap-5 text-center my-5">
        <h1 className="text-5xl">The Head Vet Care team</h1>
        <p className="text-2xl">
          Lorem Ipsum available, but the majority have <br /> suffered
          alteration in some form.
        </p>
      </div>
      {/* cards  */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card01  */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={team1} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Emma Sano</h2>
            <p>SENIOR VETERINARY</p>
            <div className="card-actions justify-center">
              <Link className="custom-icon primary-custom-btn">
                <AiOutlineInstagram className="custom-icon-size"></AiOutlineInstagram>
              </Link>
              <Link className="custom-icon primary-custom-btn">
                <CiFacebook className="custom-icon-size"></CiFacebook>
              </Link>
              <Link className="custom-icon primary-custom-btn">
                <FiTwitter className="custom-icon-size"></FiTwitter>
              </Link>
            </div>
          </div>
        </div>
        {/* card02  */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={team2} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Flora Sopa</h2>
            <p>SENIOR VETERINARY</p>
            <div className="card-actions justify-center">
              <Link className="custom-icon primary-custom-btn">
                <AiOutlineInstagram className="custom-icon-size"></AiOutlineInstagram>
              </Link>
              <Link className="custom-icon primary-custom-btn">
                <CiFacebook className="custom-icon-size"></CiFacebook>
              </Link>
              <Link className="custom-icon primary-custom-btn">
                <FiTwitter className="custom-icon-size"></FiTwitter>
              </Link>
            </div>
          </div>
        </div>
        {/* card03  */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={team3} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Gal Gatot</h2>
            <p>SENIOR VETERINARY</p>
            <div className="card-actions justify-center">
              <Link className="custom-icon primary-custom-btn">
                <AiOutlineInstagram className="custom-icon-size"></AiOutlineInstagram>
              </Link>
              <Link className="custom-icon primary-custom-btn">
                <CiFacebook className="custom-icon-size"></CiFacebook>
              </Link>
              <Link className="custom-icon primary-custom-btn">
                <FiTwitter className="custom-icon-size"></FiTwitter>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetCareTeam;
