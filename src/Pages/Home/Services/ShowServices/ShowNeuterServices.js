import React from "react";

const ShowNeuterServices = ({ data }) => {
  const { animalName, animalAge, location } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Animal Name : {animalName} </h2>
          <p>
            <span className="font-bold">Animal Age:</span> {animalAge}
          </p>

          <p>
            <span className="font-bold">Location: </span>
            {location}
          </p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShowNeuterServices;
