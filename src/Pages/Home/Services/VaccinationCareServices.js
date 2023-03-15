import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import service02 from "../../../images/services1.jpg";
import ShowVaccinationCareServices from "./ShowServices/ShowVaccinationCareServices";

const VaccinationCareServices = () => {
  const datas = useLoaderData();
  // console.log(data);
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("https://pet-service-server-eta.vercel.app/VaccinationCareServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Added Successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-center text-4xl my-5">
        Tell us about the Services of{" "}
        <span className="font-bold">Vaccination Care</span>
      </h2>
      {/* ////////////////////// */}
      <div className="card shadow-xl">
        <figure>
          <img src={service02} alt="Shoes" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vaccination Care</h2>
          <p>
            Your pets need to be Vaccinated once or more. Try our Vaccine
            service for beloved pets.
          </p>
          {/* modal  */}
          <div className="card-actions justify-center">
            <label
              htmlFor="VeterinarianServices"
              className="primary-custom-btn"
            >
              Book Now
            </label>
            <input
              type="checkbox"
              id="VeterinarianServices"
              className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <div className="my-5">
                  <label
                    htmlFor="VeterinarianServices"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                </div>
                <div>
                  <form onSubmit={handleAddUser}>
                    <input
                      onBlur={handleInputBlur}
                      type="text"
                      name="animalName"
                      placeholder="Enter Animal type"
                      className="mb-2 input input-bordered w-full"
                    />
                    <br />
                    <input
                      onBlur={handleInputBlur}
                      type="text"
                      name="animalAge"
                      placeholder="Enter Animal age"
                      className="mb-2 input input-bordered w-full "
                    />
                    <br />
                    <input
                      onBlur={handleInputBlur}
                      type="text"
                      name="previouslyVaccinated"
                      placeholder="Previously vaccinated?"
                      className="mb-2 input input-bordered w-full "
                    />
                    <br />
                    <input
                      onBlur={handleInputBlur}
                      type="text"
                      name="location"
                      placeholder="Enter Location"
                      className="mb-2 input input-bordered w-full "
                    />
                    <br />
                    <button
                      htmlFor="VeterinarianServices"
                      className="modal-action btn btn-info"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                {/* <div className="modal-action justify-center">
                  <label
                    htmlFor="VeterinarianServices"
                    className="btn btn-success"
                  >
                    Submit
                  </label>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center font-bold">
          All Services for Vaccination Care
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {datas.map((data) => (
            <ShowVaccinationCareServices
              data={data}
              key={data._id}
            ></ShowVaccinationCareServices>
          ))}
        </div>
      </div>
      {/* ////////////////////// */}
    </div>
  );
};

export default VaccinationCareServices;
