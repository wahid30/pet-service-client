import React from "react";
import "./DogCareService.css";
const DogCareService = () => {
  return (
    <div className="px-5 my-5 dog-care-bg bg-slate-100">
      <div className="p-5">
        <h1 className="text-4xl text-center  font-bold">Dog Care Service</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
          {/* 001  */}
          <div className="flex flex-col gap-2 p-5 rounded-2xl text-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            <h1 className="text-3xl font-semibold">Phone</h1>
            <span className="text-2xl">(281 809-7748)</span>
            <span className="text-2xl">(281)715-4029(Fax)</span>
          </div>
          {/* 002  */}
          <div className="flex flex-col gap-2 p-5 rounded-2xl text-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            <h1 className="text-3xl font-semibold">Hours of Operation</h1>
            <span className="text-2xl">Monday-Friday: 7 a.m. - 7p.m</span>
            <span className="text-2xl">Saturday: 9 a.m.-6 p.m.</span>
            <span className="text-2xl">Sunday: 10 a.m.-6 p.m.</span>
          </div>
          {/* 003  */}
          <div className="flex flex-col gap-2 p-5 rounded-2xl text-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            <h1 className="text-3xl font-semibold">Check Out Times</h1>
            <span className="text-2xl">Monday-Sunday: 1 p.m</span>
          </div>
          {/* 004  */}
          <div className="flex flex-col gap-2 p-5 rounded-2xl text-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            <h1 className="text-3xl font-semibold">Address</h1>
            <span className="text-2xl">
              9040 Highway 6 N Houston, TX 77095-2303
            </span>
          </div>
          {/* 005  */}
          <div className="flex flex-col gap-2 p-5 rounded-2xl text-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
            <h1 className="text-3xl font-semibold">Service Areas</h1>
            <span className="text-2xl">
              Cypress, Houston, Jersey Katy, Spring Valley, Village
            </span>
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
