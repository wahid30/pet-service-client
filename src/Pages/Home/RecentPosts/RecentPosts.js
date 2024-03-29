import React from "react";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  return (
    <div className="my-5 px-5">
      <div className="grid gap-5 text-center">
        <h1 className="text-4xl font-semibold">
          Service Feedback From Clients
        </h1>
        <p className="text-2xl">
          Leave a feedback how was your experience with us.
        </p>
      </div>
      {/* cards   */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card 01  */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Hanma Shuji Wrote</h2>
            <h3 className="text-[#00BED5] text-2xl">FEBRUARY 09, 2023</h3>
            <p className="text-2xl">
              I really liked your daycare service. My cat was safe and sound
              when you guys returned it to me. Its in good mood too, i guess he
              had some friends to play with. Looking forward to use your service
              again.
            </p>
          </div>
        </div>
        {/* card 02  */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Hanagaki Takemichi Wrote</h2>
            <h3 className="text-[#00BED5] text-2xl">FEBRUARY 09, 2023</h3>
            <p className="text-2xl">
              Thanks to your good Vet's my dog is felling better and started to
              play like before. He was in really bad condition when i asked
              advice from your doctors.But now he is all good again. Thank You.
            </p>
          </div>
        </div>
        {/* card 03  */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">AKen Ryuguji Wrote</h2>
            <h3 className="text-[#00BED5] text-2xl">FEBRUARY 09, 2023</h3>
            <p className="text-2xl">
              My cat is got Vaccinated properly thanks to your doctors. They
              complete the whole things with such good care, which was really
              wonderful.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/commentSections">
          <button
            className="text-2xl bg-cyan-700 text-white p-5 rounded-lg"
            type="submit"
          >
            Place A Comment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentPosts;
