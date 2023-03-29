import React, { useEffect, useState } from "react";
import ShowDayCareServices from "./ShowDayCareServices";

const DayCareServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://pet-service-server-wahid30.vercel.app/dayCareServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-center my-5 font-bold text-3xl">Day Care Services</h2>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ShowDayCareServices
            service={service}
            key={service._id}
          ></ShowDayCareServices>
        ))}
      </div>
    </div>
  );
};

export default DayCareServices;
