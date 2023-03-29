import PatientNavBar from "../Components/PatientNavBar";
import Styles from "../Styles/Home.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
function Home() {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("patientKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  let location = useLocation();
  useEffect(() => {
    axios.get(`http://localhost:8080/shift/patid/${userName.patId}`);
  }, []);
  return (
    <>
      <PatientNavBar />

      <div className={Styles.containerHome}>
        <div className={Styles.containerHomeIn}>
          <div className={Styles.containerHomeImg}>
            <img src="https://res.cloudinary.com/dobtf02zs/image/upload/v1679669172/Female-Doctor-Vector-Illustration-removebg-preview_u31csp.png"></img>
          </div>
          <div className={Styles.containerHomeCont}>
            <h1>Dializa</h1>
            <h2>
              We <span>Care</span> for your <span>Health</span>
            </h2>
          </div>
        </div>
      </div>
      <div className={Styles.container2Home}>
        <div className={Styles.container2HomeIn}>
          <h1>100+</h1>
          <h2>
            <span>Hospitals</span>
          </h2>
        </div>
        <div className={Styles.container2HomeIn}>
          <h1>3000+</h1>
          <h2>
            <span>Labaratories</span>
          </h2>
        </div>
        <div className={Styles.container2HomeIn}>
          <h1>10,000+</h1>
          <h2>
            <span>Staffs</span>
          </h2>
        </div>
      </div>
      <div className={Styles.container3Home}>
        <div className={Styles.container3HomeIn}>
          <div className={Styles.container3HomeCont}>
            <h1>Get Connected</h1>
            <h4>
              Book your Labs ,and get Connected with us <br />
              We will maintain your daily statistical report
            </h4>
          </div>
          <div className={Styles.container3HomeImg}>
            <img src="https://res.cloudinary.com/dobtf02zs/image/upload/v1679671187/data-trends-concept-illustration_114360-1480_z3n1qv.avif"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
