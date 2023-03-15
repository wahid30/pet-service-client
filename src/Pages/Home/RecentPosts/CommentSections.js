import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowData from "./ShowData";

const CommentSections = () => {
  const datas = useLoaderData();
  // console.log(datas);
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("https://pet-service-server-eta.vercel.app/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Comment Added Successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div
      className="w-9/12 mx-auto
    my-5"
    >
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="mb-2 input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="date"
          name="date"
          placeholder="Enter date"
          className="mb-2 input input-bordered w-full max-w-xs"
        />
        <br />
        <textarea
          onBlur={handleInputBlur}
          type="text"
          name="comments"
          placeholder="Write a comment...."
          required
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        />
        <br />
        <button className="btn btn-info" type="submit">
          Post
        </button>
      </form>
      <div className="my-5">
        <h1 className="text-center">All Comments:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {datas.map((data) => (
            <ShowData key={data._id} data={data}></ShowData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSections;
