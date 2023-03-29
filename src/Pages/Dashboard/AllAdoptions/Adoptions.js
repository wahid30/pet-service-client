import React, { useEffect, useState } from "react";

const Adoptions = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/animalAdoptions/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services.image);
  return (
    <div>
      <h1 className="text-center font-bold my-5">Adoptions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div className="card  glass">
            {/* <figure>
              <img src={service.image} alt="" className="w-full" />
            </figure> */}
            <div className="card-body">
              <h2 className="text-center">Name: {service.name}</h2>
              <h2 className="text-center">type: {service.type}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adoptions;
