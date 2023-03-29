import axios from "axios";
import React, { useState, useEffect } from "react";
import Styles from "../Styles/Doctors.module.css";
import DoctorNavBar from "../Components/DoctorNavBar";
export default function TodaysAppointment() {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("labKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [shifts, setShifts] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8080/shift/labid/${userName.labId}`)
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
  function name(s) {
    if (s) {
      return "Booked";
    } else {
      return "Not Booked";
    }
  }
  return (
    <>
      <DoctorNavBar />
      <div className={Styles.appoinmentContainer}>
        <div>
          <h2>Todays Appoinment</h2>
          <table className={Styles.containerTable}>
            <tr>
              <th>Patient Id</th>
              <th>Machine id</th>
              <th>Start</th>
              <th>End</th>
              <th>Flag</th>
            </tr>
            {shifts.map((shift) => (
              <tr>
                <td>{shift.patId}</td>
                <td>{shift.macId}</td>
                <td>{shift.stTime}</td>
                <td>{shift.endTime}</td>
                <td>{name(shift.flag)}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
