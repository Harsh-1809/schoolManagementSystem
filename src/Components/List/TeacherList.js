// TeacherList.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeacherList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/teacher-list')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h2>Teacher List</h2>
      <table className="table-auto w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">USN</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-400 px-4 py-2">{user.id}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
              <td className="border border-gray-400 px-4 py-2">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
