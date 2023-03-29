import React, { useState } from "react";
import PatientNavBar from "../Components/PatientNavBar";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Styles from "../Styles/Patients.module.css";
function BookAppointment() {
  // let location =useLocation();
  const [symptoms, setSymptoms] = useState("");
  const [days, setDays] = useState("");
  let { patId, id } = useParams();
  console.log(patId + id);
  async function bookApp() {
    alert("Appointment booked successfully");
  }
  return (
    <>
      <PatientNavBar />
      <div className={Styles.symptomContainer}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Book Your Appoinment</h1>
          <div className={Styles.symptomContainerIn}>
            <table>
              <tr>
                <td style={{ backgroundColor: "#0febff" }}>
                  <h4> Symptoms :</h4>
                </td>
                <td style={{ backgroundColor: "#0febff" }}>
                  <textarea
                    type="text"
                    placeholder="Enter your symptoms"
                    className={Styles.inputs}
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "#0febff" }}>
                  <h4>Days you Suffered :</h4>
                </td>
                <td style={{ backgroundColor: "#0febff" }}>
                  <input
                    type="number"
                    placeholder="Enter days"
                    className={Styles.inputs}
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                  ></input>
                </td>
              </tr>
            </table>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#007FFF" }}
              onClick={bookApp}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
