import React from "react";
import { Link } from "react-router";

const AddUser = () => {

    const handleAddUser = e => {
        e.preventDefault()
        const form = e.target
        console.log(form);
        const formData = new FormData(form)
        const newUser = Object.fromEntries(formData.entries())

        console.log(newUser);

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId){
                
                console.log("after added data", data);
            }
        })
    }

  return (
    <div>
      <Link className="hover:text-blue-800 hover:underline" to="/users">
        All Users
      </Link>
      <div className="text-center p-6 text-gray-500">
        <h1 className="text-2xl font-semibold text-blue-950">New User</h1>
        <p>Use the below form to create </p>
      </div>
      <div className="w-full">
        <form onSubmit={handleAddUser} className="fieldset  rounded-box mx-auto w-5xl p-4">
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
