import React from "react";

const ShowDayCareServices = ({ service }) => {
  const {
    animalName,
    animalType,
    animalAge,
    ownerName,
    contactNumber,
    location,
    date,
    SpecialRequirements,
  } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body ">
        <h2>
          Animal Name: <span className="font-bold">{animalName}</span>
        </h2>
        <h2>
          Animal Type: <span className="font-bold">{animalType}</span>
        </h2>
        <h2>
          Animal Age: <span className="font-bold">{animalAge}</span>
        </h2>
        <h2>
          Owner Name: <span className="font-bold">{ownerName}</span>
        </h2>
        <h2>
          Contact Number: <span className="font-bold">{contactNumber}</span>
        </h2>
        <h2>
          Location: <span className="font-bold">{location}</span>
        </h2>
        <h2>
          Date: <span className="font-bold">{date}</span>
        </h2>
        <p>Special Requirements: {SpecialRequirements}</p>
      </div>
    </div>
  );
};

export default ShowDayCareServices;
