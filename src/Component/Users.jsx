import React, { use, useEffect } from "react";
import Header from "./Header";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const { users, setUsers } = use(AuthContext);
  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          const remainingUser = users.filter(
            (deleteUser) => deleteUser._id != id
          );
          setUsers(remainingUser);
          console.log("response after user delete", data);
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="my-10">
        <Link className="text-blue-700 underline" to="/">
          Add User
        </Link>
      </div>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <p>No</p>
                  </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar"></div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td></td>
                  <td></td>
                  <th className="space-x-2">
                    <Link>
                      {" "}
                      <button className="btn btn-xs font-bold text-xl">
                        <img
                          className="w-5 rounded-full"
                          src="https://img.icons8.com/?size=64&id=56304&format=png"
                        />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-xs font-bold text-xl pb-2 text-purple-500"
                    >
                      x
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
