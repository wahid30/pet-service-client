import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../../images/blog1.jpg";
import blog2 from "../../../images/blog2.jpg";
import blog3 from "../../../images/blog3.jpg";

const RecentPosts = () => {
  return (
    <div className="my-5 px-5">
      <div className="grid gap-5 text-center">
        <h1 className="text-4xl font-semibold">Recent Posts</h1>
        <p className="text-2xl">
          Lorem Ipsum available, but the majority have <br /> suffered
          alteration in some form.
        </p>
      </div>
      {/* cards   */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card 01  */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">
              As a veterinarian and lover of animals
            </h2>
            <h3 className="text-[#00BED5] text-2xl">FEBRUARY 09, 2023</h3>
            <p className="text-2xl">
              Lorem Ipsum available, but the majo rity have suffered alteration
              in some words which look.
            </p>
            <div className="card-actions justify-start text-2xl">
              <Link className="text-[#00BED5]">Read More+</Link>
            </div>
          </div>
        </div>
        {/* card 02  */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={blog2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">
              As a veterinarian and lover of animals
            </h2>
            <h3 className="text-[#00BED5] text-2xl">FEBRUARY 09, 2023</h3>
            <p className="text-2xl">
              Lorem Ipsum available, but the majo rity have suffered alteration
              in some words which look.
            </p>
            <div className="card-actions justify-start text-2xl">
              <Link className="text-[#00BED5]">Read More+</Link>
            </div>
          </div>
        </div>
        {/* card 03  */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={blog3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">
              As a veterinarian and lover of animals
            </h2>
            <h3 className="text-[#00BED5] text-2xl">FEBRUARY 09, 2023</h3>
            <p className="text-2xl">
              Lorem Ipsum available, but the majo rity have suffered alteration
              in some words which look.
            </p>
            <div className="card-actions justify-start text-2xl">
              <Link className="text-[#00BED5]">Read More+</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
