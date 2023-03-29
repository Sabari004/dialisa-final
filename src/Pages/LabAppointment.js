import DoctorNavBar from "../Components/DoctorNavBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../Styles/Machines.module.css";
function LabAppoinment() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("labKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  let add = 1;
  const [machines, setMachines] = useState([]);
  const fetchdata = async () => {
    await axios
      .get(`http://localhost:8080/machine/labid/${userName.labId}`)
      .then((r) => {
        setMachines(r.data);
        console.log(machines);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <DoctorNavBar />

      <h1>Lab Appoinment</h1>
      <div className={Styles.button_container}>
        <div>
          <button
            onClick={(e) => {
              axios.post("http://localhost:8080/machine", {
                labId: userName.labId,
              });
            }}
          >
            Add Machine
          </button>
          <>
            {machines.map((m) => (
              <div className={Styles.button_container_in}>
                {/* <h1>{add++}</h1> */}
                <button onClick={(e) => navigate(`/lab/appoinment/${m.macId}`)}>
                  machine {add++}
                </button>
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
}

export default LabAppoinment;
