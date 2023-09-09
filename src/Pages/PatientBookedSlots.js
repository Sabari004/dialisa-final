import axios from "axios";
import React, { useState, useEffect } from "react";
import Styles from "../Styles/Doctors.module.css";
import PatientNavBar from "../Components/PatientNavBar";
function PatientBookedSlots() {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("patientKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [shifts, setShifts] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8080/shift/patid/${userName.patId}`)
      .then((r) => {
        setShifts(r.data);
        console.log(shifts);
        console.log(userName.patId);
      });
  };
  const [n, setN] = useState([]);
  //   const name = async (id) => {
  //     await axios.get(`http://localhost:8080/lab/${id}`).then((r) => {
  //       setN(r.data);
  //       console.log(n.name);
  //     });

  //     return n.name;
  //   };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <PatientNavBar />
      <div className={Styles.appoinmentContainer}>
        <div>
          <h2>Your Appoinment</h2>
          <table className={Styles.containerTable}>
            <tr>
              <th>Lab Id</th>
              <th>Machine id</th>
              <th>Start</th>
              <th>End</th>
            </tr>
            {shifts.map((shift) => (
              <tr>
                <td>{shift.labId}</td>
                <td>{shift.macId}</td>
                <td>{shift.stTime}</td>
                <td>{shift.endTime}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default PatientBookedSlots;
