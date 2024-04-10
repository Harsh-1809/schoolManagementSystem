import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
const AddGrades = () => {
    const [name, setName] = useState('');
    const [grades, setGrades] = useState('');
    const [usn, setUsn] = useState('')
    const history = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/add-grades ", {
                name, grades, usn
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("Student already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/dashboard-teacher")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }

  return (
      <div className="flex justify-center items-center bg-gray-800 min-h-screen">
          <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                  <h2 className="text-2xl font-semibold mb-4">Add Grades</h2>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                          Name
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grades">
                          Grades
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="grades"
                          type="text"
                          placeholder="Grades"
                          value={grades}
                          onChange={(e) => setGrades(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usn">
                          USN
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="usn"
                          type="text"
                          placeholder="USN"
                          value={usn}
                          onChange={(e) => setUsn(e.target.value)}
                      />
                  </div>
                  <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={handleSubmit}
                  >
                      Add Grades
                  </button>
              </div>
          </div>
      </div>
  )
}

export default AddGrades
