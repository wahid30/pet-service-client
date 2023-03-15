import React from "react";

const ShowVaccinationCareServices = ({ data }) => {
  const { animalName, animalAge, previouslyVaccinated, location } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">animal Name : {animalName} </h2>
          <p>Animal Age: {animalAge}</p>
          <p>previously Vaccinated: {previouslyVaccinated}</p>
          <p>Location: {location}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShowVaccinationCareServices;
