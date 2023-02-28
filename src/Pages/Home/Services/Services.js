import React from "react";
import service01 from "../../../images/services.jpg";
import service02 from "../../../images/services1.jpg";
import service03 from "../../../images/services3.jpg";

const Services = () => {
  return (
    <div className="p-5 my-5 service-bg grid gap-5">
      <div className="grid gap-3 text-center">
        <h1 className="text-4xl">Services</h1>
        <h4 className="text-2xl">
          We provide this kinds of services with expert care.
        </h4>
      </div>
      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card01 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={service01} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Veterinarian</h2>
            <p>
              Your pets need to be Vaccinated once or more. Try our Vaccine
              service for beloved pets.
            </p>
            <div className="card-actions justify-center">
              <button className="primary-custom-btn">Book Service</button>
            </div>
          </div>
        </div>
        {/* card02 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={service02} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vaccination Care</h2>
            <p>
              Your pets need to be Vaccinated once or more. Try our Vaccine
              service for beloved pets.
            </p>
            <div className="card-actions justify-center">
              <button className="primary-custom-btn">Book Service</button>
            </div>
          </div>
        </div>
        {/* card03 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={service03} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dental Care</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="primary-custom-btn">Book Service</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
