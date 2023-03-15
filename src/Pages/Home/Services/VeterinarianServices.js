import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import service01 from "../../../images/services.jpg";
import ShowVeterinarianServices from "./ShowServices/ShowVeterinarianServices";
// import { Link } from "react-router-dom";

const VeterinarianServices = () => {
  const datas = useLoaderData();
  // console.log(data);
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/VeterinarianServices", {
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
        <span className="font-bold">Veterinary Services</span>
      </h2>
      {/* ////////////////////// */}
      <div className="card shadow-xl">
        <figure>
          <img src={service01} alt="Shoes" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Veterinarian</h2>
          <p>
            Your beloved pet is suffering from any kind of diseases or illness?
            contact with a professional Vet.
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

                    <textarea
                      onBlur={handleInputBlur}
                      type="text"
                      name="problemDescriptions"
                      placeholder="Write a descriptions...."
                      required
                      className="textarea textarea-bordered textarea-lg w-full"
                    />
                    <br />

                    <br />
                    <input
                      onBlur={handleInputBlur}
                      type="text"
                      name="previouslyVaccinated"
                      placeholder="Vaccination status"
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
          All Services for Veterinary Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {datas.map((data) => (
            <ShowVeterinarianServices
              data={data}
              key={data._id}
            ></ShowVeterinarianServices>
          ))}
        </div>
      </div>
      {/* ////////////////////// */}
    </div>
  );
};

export default VeterinarianServices;
