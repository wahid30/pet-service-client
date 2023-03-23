import React from "react";
import "./DogCareService.css";
const DogCareService = () => {
  return (
    <div className="px-5 my-5 dog-care-bg bg-slate-100">
      <div className="p-5">
        <h1 className="text-4xl text-center  font-bold">Day Care Service</h1>
        <div className="grid gap-5 my-12">
          {/* 001  */}
          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Phone
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>(281 809-7748)</p>
              <p>(281)715-4029(Fax)</p>
            </div>
          </div>
          {/* 002  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Hours of Operation
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p> Monday-Friday: 7 a.m. - 7p.m</p>
              <p>Saturday: 9 a.m.-6 p.m.</p>
              <p>Sunday: 10 a.m.-6 p.m.</p>
            </div>
          </div>
          {/* 003  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Check Out Times
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>Monday-Sunday: 1 p.m</p>
            </div>
          </div>
          {/* 004  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Address
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>9040 Highway 6 N Houston, TX 77095-2303</p>
            </div>
          </div>
          {/* 005  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Service Areas
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>Cypress, Houston, Jersey Katy, Spring Valley, Village</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="primary-custom-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DogCareService;
