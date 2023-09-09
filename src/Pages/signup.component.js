import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/signupdoc.css';
export default function SignUp() {
  const [patId, setPatId] = useState("");
  const [PatientName, setPatientName] = useState("");
  const [password, setPassword] = useState("");
  const [PatientAge, setPatientAge] = useState();
  const [sex, setSex] = useState("");
  const [patPhNo, setPatPhNo] = useState("");
  const [post, setPost] = useState();
  let navigate = useNavigate();
  const [listOfUsers, setlistOfUsers] = useState({});
  async function validateUser(e) {
    e.preventDefault();
    setlistOfUsers();
    axios.post("http://localhost:8080/patient", {
      patId: patId,
      patientName: PatientName,
      password: password,
      patientAge: PatientAge,
      sex: sex,
      patPhNo: patPhNo,
    });
    localStorage.setItem(
      "patientKey",
      JSON.stringify({
        patId: patId,
        patientName: PatientName,
        password: password,
        patientAge: PatientAge,
        sex: sex,
        patPhNo: patPhNo,
      })
    );
    navigate(`/patient/home`);
    alert("PatientRegister Successfully");
    setPatId();
    setPatientName();
    setPassword();
    setPatientAge();
    setSex();
    setPatPhNo();
  }
  return (
    <form  className="signdoc-input-form">
      <h3 className="signdoc-in">Patient Sign Up</h3>

      <div className="mb-3">
        <label className="signdoc-label">Patient Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Patient Id"
          value={patId}
          onChange={(e) => setPatId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="signdoc-label">Patient Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Patient Name"
          value={PatientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="signdoc-label">Patient Age</label>
        <input
          type="number"
          className="form-control"
          placeholder="Patient Age"
          value={PatientAge}
          onChange={(e) => setPatientAge(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="signdoc-label">Sex</label>
        <input
          type="text"
          className="form-control"
          placeholder="Sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="signdoc-label">Phone Number</label>
        <input
          type="number"
          className="form-control"
          placeholder="Phone number"
          value={patPhNo}
          onChange={(e) => setPatPhNo(e.target.value)}
        />
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

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={validateUser}
        >
          Sign Up
        </button>
      </div>
      <br />
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}
