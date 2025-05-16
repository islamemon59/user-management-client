import React from 'react';
import Header from './Header';
import { Link } from 'react-router';

const Users = () => {
    return (
        <div>
            <Header></Header>
            <div className='my-10'>
                <Link className='text-blue-700 underline' to="/">Add User</Link>
            </div>
            <div className='mt-10'>
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
      <tr>
        <th>
          <label>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td></td>
        <td></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Users;