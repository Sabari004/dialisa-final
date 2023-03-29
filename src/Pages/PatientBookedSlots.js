import axios from "axios";
import React, { useState, useEffect } from "react";
import PatientNavBar from "../Components/PatientNavBar";
function PatientBookedSlots() {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("patientKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/shift/patid/${userName.patId}`)
      .then((r) => {
        setShifts(r.data);
        console.log(shifts);
        console.log(userName.patId);
      });
  }, []);
  return (
    <div>
      <PatientNavBar />
      <table>
        <tr>
          <th>Lab Name</th>
          <th>Machine id</th>
          <th>Start</th>
          <th>End</th>
        </tr>
        {shifts.map((shifts) => {
          <tr>
            <th>{shifts.macId}</th>
            <th>{shifts.labId}</th>
            <th>{shifts.labId}</th>
            <th>{shifts.labId}</th>
          </tr>;
        })}
      </table>
    </div>
  );
}

export default PatientBookedSlots;
