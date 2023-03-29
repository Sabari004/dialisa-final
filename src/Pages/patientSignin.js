import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LoginDoc() {
    const [listOfUsers, setlistOfUsers] = useState(0);
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const validateUser = (event) => {
        event.preventDefault();
        axios.get(`http://192.168.222.57:8080/patient/${username}`).then((response) => {
            console.log(response.data);
            setlistOfUsers(response.data);
        });
        if (listOfUsers?.password === password) {
            navigate("/patient/home");
        } else {
            alert("Id / Password is Incorrect");
        }
    };
    return (
        <form>
            <h3>Docter Sign In</h3>

            <div className="mb-3">
                <label>Patient Id</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Patient Id"
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
                Don't have an account <Link to="/patient/signup">Sign Up</Link>
            </p>
        </form>
    );
}
