import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignUpDoc() {
  const navigate = useNavigate();
  const [labName, setLabName] = useState("");
  const [password, setPassword] = useState("");
  const [labPhNo, setPhNo] = useState();
  const [labId, setLabId] = useState(1);
  const [labLocation, setLabLocation] = useState("");
  const [error, setError] = useState("");
  const [price, setPrice] = useState();
  async function validateUser(e) {
    e.preventDefault();
    await axios.post("http://localhost:8080/lab", {
      labId: labId,
      labName: labName,
      labLocation: labLocation,
      password: password,
      // gender: gender,
      labPhNo: labPhNo,
      // hosId: hosId,
      price: price,
    });
    alert("success");
    navigate(`/lab/${labId}`);

    // .then(response=>{
    //     console.log(response.data);
    // })
  }
  // useEffect(() => {
  //   axios.get("http://localhost:8080/patient").then((response) => {
  //     setHospitals(response.data);
  //     console.log(response.data);
  //   });
  // }, []);
  // async function validate(id) {
  //   await axios
  //     .get(`http://localhost:8080/doctor/${docId}`)
  //     .then((response) => {
  //       setDoctors(response.data);
  //       console.log(doctors);
  //     });
  // }
  return (
    <form>
      <h3>Labaratory Sign Up</h3>

      <div className="mb-3">
        <label>Lab Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Doctor Id"
          value={labId}
          onChange={(e) => {
            // validate(docId);
            setLabId(e.target.value);
            console.log(labId);
            // if (doctors.docId != docId) {
            //   setError("User Id is taken");
            // } else {
            //   setError("User Id is not taken");
            // }
          }}
        />
      </div>
      <p>{error}</p>
      <div className="mb-3">
        <label>Lab Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={labName}
          onChange={(e) => {
            setLabName(e.target.value);
            console.log(labName);
          }}
        />
      </div>

      {/* <div className="mb-3">
        <label></label>
        <input
          type="text"
          className="form-control"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div> */}
      <div className="mb-3">
        <label>LabLocation</label>
        <input
          className="form-control"
          value={labLocation}
          placeholder="Enter Location"
          onChange={(e) => {
            setLabLocation(e.target.value);
            console.log(labLocation);
          }}
        ></input>
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
        <label>Lab Phone No</label>
        <input
          type="number"
          className="form-control"
          placeholder="Phone Number"
          value={labPhNo}
          onChange={(e) => setPhNo(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={validateUser}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/doctor/signin">sign in?</Link>
      </p>
    </form>
  );
}
