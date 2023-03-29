import PatientNavBar from "../Components/PatientNavBar";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Styles from "../Styles/Machines.module.css";
import axios from "axios";
function Machine() {
  let { labId } = useParams();
  // console.log(labId);
  let navigate = useNavigate();
  let add = 1;
  const [machines, setMachines] = useState([]);
  const fetchdata = async () => {
    await axios
      .get(`http://localhost:8080/machine/labid/${labId}`)
      .then((r) => {
        setMachines(r.data);
        console.log(machines);
        console.log(labId);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <PatientNavBar />
      <div className={Styles.button_container}>
        <div>
          <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
            Choose a Machine
          </h2>
          <div className={Styles.button_container_in}>
            <>
              {machines.map((m) => (
                <button onClick={(e) => navigate(`${m.macId}`)}>
                  machine{add++}
                </button>
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Machine;
