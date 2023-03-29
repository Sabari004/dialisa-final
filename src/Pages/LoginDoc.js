import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LoginDoc() {
  const [listOfUsers, setlistOfUsers] = useState(0);
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/lab").then((r) => {
      setlistOfUsers(r.data);
    });
  }, []);
  const validateUser = async (e) => {
    e.preventDefault();
    let x = 0;
    let j = 0;
    for (let i = 0; i < listOfUsers.length; i++) {
      if (
        listOfUsers[i].labId == username &&
        listOfUsers[i].password === password
      ) {
        x = 1;
        j = i;
        break;
      }
    }
    if (x === 0) {
      alert("Invalid credentials");
    } else {
      alert("Login successful");
      localStorage.setItem("labKey", JSON.stringify(listOfUsers[j]));
      navigate(`/lab/home`);
    }
  };
  return (
    <form>
      <h3>Laboratory Sign In</h3>

      <div className="mb-3">
        <label>Lab Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Doctor Id"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <p>
        Don't have an account <Link to="/lab/signup">Sign Up</Link>
      </p>
    </form>
  );
}
