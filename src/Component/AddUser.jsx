import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";

const AddUser = () => {
  const { users, setUsers } = use(AuthContext);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    console.log(newUser);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setUsers([...users, newUser]);
          Swal.fire({
            title: "User Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset()
          console.log("after added data", data);
        }
      });
  };

  return (
    <div>
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
          onSubmit={handleAddUser}
          className="fieldset  rounded-box mx-auto w-5xl p-4"
        >
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full"
            placeholder="My awesome page"
          />

          <label className="label">Email</label>
          <input
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

export default AddUser;
