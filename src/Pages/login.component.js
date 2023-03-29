// import React, { Component } from 'react'

// export default class Login extends Component {
//   render() {
//     return (
//       <form>
//         <h3>Patien Sign In</h3>

//         <div className="mb-3">
//           <label>User Name</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="User Name"
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Forgot <a href="#">password?</a>
//         </p>
//       </form>
//     )
//   }
// }
import axios from "axios";
import React, { useState, useEffect, state } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {getAuth, createUserWithEmailandPassword} from "firebase/auth"
export default function Login() {
  // let auth = getAuth();
  const navigate = useNavigate();
  const [listOfUsers, setlistOfUsers] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/patient")
      .then((response) => [setlistOfUsers(response.data)]);
  }, []);
  const validateUser = async (e) => {
    e.preventDefault();
    let x = 0;
    for (let i = 0; i < listOfUsers.length; i++) {
      if (
        listOfUsers[i].patId == username &&
        listOfUsers[i].password === password
      ) {
        x = 1;
        break;
      }
    }
    if (x === 0) {
      alert("Invalid credentials");
    } else {
      alert("Login successful");
      navigate(`/patient/${username}`);
    }
  };
  return (
    <form>
      <h3>Patient Sign In</h3>

      <div className="mb-3">
        <label>Patient Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Patient Id"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={validateUser}
        >
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Don't have an account <Link to="/patient/signup">Sign Up</Link>
      </p>
    </form>
  );
}
