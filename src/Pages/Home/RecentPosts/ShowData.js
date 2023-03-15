import React from "react";

const ShowData = ({ data }) => {
  // console.log("hiiiiiiiiiii", data.name);
  const { name, comments, date } = data;
  console.log(data);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <span className="text-[10px]">{date}</span>
          <p>{comments}</p>
          <div className="card-actions justify-center">
            {/* <button className="btn btn-active">Delete</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
