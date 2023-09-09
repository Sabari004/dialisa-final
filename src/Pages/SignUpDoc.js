import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../Styles/signupdoc.css';
export default function SignUpDoc() {
  const navigate = useNavigate();
  const [labName, setLabName] = useState("");
  const [password, setPassword] = useState("");
  const [labPhNo, setPhNo] = useState();
  const [labId, setLabId] = useState();
  const [labLocation, setLabLocation] = useState("");
  const [error, setError] = useState("");
  const [price, setPrice] = useState();

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
};

  async function validateUser(e) {
    e.preventDefault();
    await axios.post("http://localhost:8080/lab/addlab", {
      labId: labId,
      labName: labName,
      labLocation: labLocation,
      password: password,
      labPhNo: labPhNo,
      price: price,
      rating: 0
    });
    alert("success");

    localStorage.setItem(
      "labKey",
      JSON.stringify({
        labId: labId,
        labName: labName,
        labLocation: labLocation,
        password: password,
        labPhNo: labPhNo,
        rating: 0,
        price: price,
      })
    );
    navigate(`/lab/home`);

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
    <form  className="signdoc-input-form">
      <h3 className="signdoc-in">Labaratory Sign Up</h3>

      <div className="mb-3">
        <label className="signdoc-label">Lab Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Doctor Id"
          value={labId}
          onChange={(e) => {
            // validate(docId);
            setLabId(e.target.value);
            // console.log(labId);
            // if (doctors.docId != docId) {
            //   setError("User Id is taken");
            // }
            //  else {
            //   setError("User Id is not taken");
            // }
          }}
        />
      </div>
      <p>{error}</p>
      <div className="mb-3">
        <label className="signdoc-label">Lab Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={labName}
          onChange={(e) => {
            setLabName(e.target.value);
            // console.log(labName);
          }}
          
        />
        {/* console.log(labName); */}
      </div>

      <div className="mb-3">
        <label className="signdoc-label">LabLocation</label>
        <input
          className="form-control"
          value={labLocation}
          placeholder="Enter Location"
          onChange={(e) => {
            setLabLocation(e.target.value);
            
          }}
        ></input>
        {/* console.log(labLocation); */}
      </div>
      <div className="mb-3">
        <label className="signdoc-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="signdoc-label">Lab Phone No</label>
        <input
          type="number"
          className="form-control"
          placeholder="Phone Number"
          value={labPhNo}
          onChange={(e) => setPhNo(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="signdoc-label">Price</label>
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
