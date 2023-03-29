import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DoctorNavBar from "../Components/DoctorNavBar";
import axios from "axios";
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
    alert("Slots added");
  }
  return (
    <>
      <DoctorNavBar />
      <h1>Add Slot</h1>
      <div>
        <div>
          <label for="">StartTime:</label>
          <input
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
            placeholder="Give End Time"
            value={endTime}
            onChange={(e) => {
              setEnTime(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={addSlot}>AddSlot</button>
      </div>
    </>
  );
}

export default MachineSlot;
