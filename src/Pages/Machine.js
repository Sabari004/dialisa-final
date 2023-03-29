import PatientNavBar from "../Components/PatientNavBar";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Styles from "../Styles/Machines.module.css";
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
    </>
  );
}

export default Machine;
