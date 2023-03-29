import PatientNavBar from "../Components/PatientNavBar";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Styles from "../Styles/Doctors.module.css";
import axios from "axios";
function PatientAppointment() {
  let location = useLocation();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8080/doctor/hosid/${id}`).then((response) => {
      console.log(response.data);
      setDoctors(response.data);
    });
  }, []);

  return (
    <>
      <PatientNavBar />
      <div className={Styles.appoinmentContainer}>
        <div>
          <h1
            style={{ marginTop: "30px" }}
            className={Styles.appoinmentHeading}
          >
            Select Your Doctor
          </h1>
          <table
            style={{ marginTop: "30px" }}
            className={Styles.containerTable}
          >
            <tr>
              <th style={{ backgroundColor: "white" }}>DoctorId</th>
              <th style={{ backgroundColor: "white" }}>Doctor Name</th>
              <th style={{ backgroundColor: "white" }}>Specialist</th>
              <th style={{ backgroundColor: "white" }}>Submit</th>
            </tr>

            {doctors.map((doc) => (
              <tr>
                <td style={{ backgroundColor: "white" }}>{doc.docId} </td>
                <td style={{ backgroundColor: "white" }}>{doc.doctorName}</td>
                <td style={{ backgroundColor: "white" }}>{doc.specialist}</td>
                <td style={{ backgroundColor: "white" }}>
                  <button
                    onClick={(e) => {
                      navigate(`bookAppointment`, {
                        state: { docId: doc.docId },
                      });
                    }}
                  >
                    BOOK
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default PatientAppointment;
