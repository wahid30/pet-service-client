import React from "react";
import cat01 from "../../../images/cat1.jpg";
import cat02 from "../../../images/cat3a.jpg";
import dog from "../../../images/dog5.jpg";

const Adoption = () => {
  return (
    <div className="p-5 my-5 service-bg grid gap-5">
      <div className="grid gap-3 text-center">
        <h1 className="text-4xl">Adoption</h1>
        <h4 className="text-2xl">
          If you are looking to adopt any kinds of pets. Feel free to check
          here.
        </h4>
      </div>
      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card01 */}
        <div className="card  glass">
          <figure>
            <img src={cat01} alt="car!" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-center">Name: Lucy</h2>
            <div className="card-actions justify-center">
              <button className="primary-custom-btn">Adopt Now</button>
            </div>
          </div>
        </div>
        {/* card02 */}
        <div className="card  glass">
          <figure>
            <img src={cat02} alt="car!" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-center">Name: Cookie</h2>

            <div className="card-actions justify-center">
              <button className="primary-custom-btn">Adopt Now</button>
            </div>
          </div>
        </div>
        {/* card03 */}
        <div className="card  glass">
          <figure>
            <img src={dog} alt="car!" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-center">Name: Tucker</h2>

            <div className="card-actions justify-center">
              <button className="primary-custom-btn">Adopt Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoption;
