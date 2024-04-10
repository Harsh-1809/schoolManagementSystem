import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const StudentLogin = () => {
    const history = useNavigate();

    const [usn, setUsn] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/student-login", {
                usn, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        history("/dashboard-student")
                    }
                    else if (res.data == "notexist") {
                        alert("User have not sign up")
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
    <div>
          <div >

              <form action="POST" method='POST'>
                  <div className="bg-blue-900 h-screen flex justify-center items-center">
                      <div className="bg-white p-8 rounded-lg shadow-md w-80">
                          <h2 className="text-3xl text-purple-900 font-semibold mb-6 text-center">Student Login</h2>
                          <div className="mb-4">
                              <label htmlFor="text" className="block text-sm text-gray-700 mb-2">USN</label>
                              <input type="text" id="text" className="w-full p-2 border border-gray-300 rounded-md" value={usn} onChange={(e) => setUsn(e.target.value)} />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="password" className="block text-sm text-gray-700 mb-2">Password</label>
                              <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
                          </div>
                          <button className="bg-purple-900 text-white py-2 px-4 rounded-md w-full mb-4 hover:bg-purple-800 focus:outline-none focus:bg-purple-800" onClick={handleSignup}>Sign up</button>
                          <p className="text-sm text-center">create an Account <Link to="/student-signup" className="text-purple-900">Sign Up</Link></p>
                      </div>
                  </div>
              </form>

          </div>
    </div>
  )
}

export default StudentLogin
