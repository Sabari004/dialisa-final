import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DoctorNavBar from "../Components/DoctorNavBar";
import axios from "axios";
import Styles from "../Styles/Machines.module.css";
function MachineSlot() {
  let { macId } = useParams();
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("labKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [stTime, setStTime] = useState();
  const [endTime, setEnTime] = useState();
  async function addSlot() {
    await axios.post("http://localhost:8080/shift", {
      flag: false,
      stTime: stTime,
      endTime: endTime,
      macId: macId,
      labId: userName.labId,
    });
    setStTime("");
    setEnTime("");
    alert("Slots added");
  }
  return (
    <>
      <DoctorNavBar />
      <div className={Styles.slot_container}>
        <div>
          <h1>Add Slot</h1>
          <div className={Styles.slot_container_in}>
            <div>
              <label for="">StartTime:</label>
              <input
              type="time"
                placeholder="Give Start Time"
                value={stTime}
                onChange={(e) => {
                  setStTime(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label for="">EndTime:</label>
              <input
              type="time"
                placeholder="Give End Time"
                value={endTime}
                onChange={(e) => {
                  setEnTime(e.target.value);
                }}
              ></input>
            </div>
            <button onClick={addSlot}>AddSlot</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MachineSlot;
