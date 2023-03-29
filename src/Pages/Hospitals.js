import React, { useState, useEffect } from "react";
import PatientNavBar from "../Components/PatientNavBar";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// CSS FILES
import styles from "../Styles/Patients.module.css";
import axios from "axios";
// import styles from "../Styles/Doctors.module.css"

function Hospitals() {
  const location = useLocation();
  const navigate = useNavigate();
  let id = 40;
  const [labaratories, setLabaratories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/lab").then((response) => {
      setLabaratories(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <PatientNavBar />
      <center>
        <div className={styles.hospital_cards}>
          {labaratories.map((lab) => (
            <>
              <div className={styles.card}>
                <div className={styles.img_container}>
                  <img src={lab.image} className={styles.image} />
                </div>
                {/* <p className={styles.details} >Name : {hospital.name}</p>
                                        <p className={styles.details}>Location : {hospital.location}</p>
                                        <p className={styles.details}>Rating : {hospital.rating}</p> */}
                <h3>{lab.hosName}</h3>
                <table className={styles.appoinmentTable}>
                  <tr>
                    <th style={{ backgroundColor: "white" }}>Location </th>
                    <td style={{ backgroundColor: "white" }}>
                      : {lab.labLocation}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ backgroundColor: "white" }}>Ratings </th>
                    <td style={{ backgroundColor: "white" }}>: {lab.rating}</td>
                  </tr>
                </table>
                <button
                  style={{ marginTop: "10px" }}
                  className="btn btn-primary"
                  onClick={(e) => navigate(`${lab.labId}`)}
                >
                  VIEW
                </button>
                {/* <Link to={`/patient/40/${hospital.id}`} className={styles.availability}>Doctor's Availability {'-->'}</Link> */}
              </div>
              ;
            </>
          ))}
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Hospitals;
