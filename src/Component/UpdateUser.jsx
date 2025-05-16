import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/Context";
import Header from "./Header";

const UpdateUser = () => {
  const { _id, name, email } = useLoaderData();
  const { users, setUsers } = use(AuthContext);

  const handleUpdateUser = (e) => {
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    e.preventDefault();
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setUsers([...users, updatedUser]);
          console.log("data after updated", data);
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="my-10">
        <Link
          className="text-blue-700 w-[135px] font-bold px-4 py-2 shadow flex items-center gap-2"
          to="/users"
        >
          All User
          <img
            className="w-5"
            src="https://img.icons8.com/?size=40&id=41737&format=png"
            alt="user"
          />
        </Link>
      </div>
      <div className="text-center p-6 text-gray-500">
        <h1 className="text-2xl font-semibold text-blue-950">New User</h1>
        <p>Use the below form to create </p>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleUpdateUser}
          className="fieldset  rounded-box mx-auto w-5xl p-4"
        >
          <label className="label">Name</label>
          <input
            defaultValue={name}
            name="name"
            type="text"
            className="input w-full"
            placeholder="My awesome page"
          />

          <label className="label">Email</label>
          <input
            defaultValue={email}
            name="email"
            type="email"
            className="input w-full"
            placeholder="my-awesome-page"
          />
          <div className="flex items-center gap-6 mt-4">
            <p>Gender</p>
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Male
            </label>
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Female
            </label>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <p>Active</p>
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Active
            </label>
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Inactive
            </label>
          </div>
          <br />
          <button className="btn bg-[#06d6a0]" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
