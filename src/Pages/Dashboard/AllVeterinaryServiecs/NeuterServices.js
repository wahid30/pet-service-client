import React, { useEffect, useState } from "react";

const NeuterServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/VaccinationCareServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 font-bold">Neuter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2>
                Animal Name:
                <span className="font-bold"> {service.animalName}</span>
              </h2>
              <h2>
                Animal Age:
                <span className="font-bold"> {service.animalAge}</span>
              </h2>
              {/* <h2>
              Problem Descriptions:
              <span className="font-bold"> {service.problemDescriptions}</span>
            </h2> */}
              {/* <h2>
              Previously Vaccinated:
              <span className="font-bold"> {service.previouslyVaccinated}</span>
            </h2> */}
              <h2>
                Location:
                <span className="font-bold"> {service.location}</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeuterServices;
