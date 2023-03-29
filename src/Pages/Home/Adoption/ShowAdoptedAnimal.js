import React from "react";

const ShowAdoptedAnimal = () => {
  return (
    <div>
      <div className="card  glass">
        <figure>
          {/* <img src={cat01} alt="car!" className="w-full" /> */}
        </figure>
        <div className="card-body">
          <h2 className="text-center">Name: Lucy</h2>
          <div className="card-actions justify-center">
            <button className="primary-custom-btn">Adopt Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAdoptedAnimal;
