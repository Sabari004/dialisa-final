import React, { useState, useEffect } from 'react';
import styles from "../Styles/Doctors.module.css"
import {Link} from 'react-router-dom';
import DoctorNavBar from '../Components/DoctorNavBar';
import axios from 'axios'
function DoctorAppoinment() {
        axios.get('http://localhost:8080').
    then((response)=>{
        console.log(response.data)
    })
    const [details, setDetails] = useState([
        {   Id:1,
            patientId: 10,
            patientName: "Sabari",
            symptom:"fever",
        },
        {   Id:2,
            patientId: 12,
            patientName: "Sanjeevi",
            symptom:"cough",
        },
        {
            Id:3,
            patientId: 13,
            patientName: "Jagadeesh",
            symptom:"cold",
        }
    ]);
   
    return (
        <>
        <DoctorNavBar/>
            <div className={styles.appoinmentContainer}>
                <div>
            <h1 className={styles.containerHeading}>Today's Appoinment</h1>
            <table className={styles.containerTable}>
                <tr>
                    <th>Slot No</th>
                    <th>Patient Id</th>
                    <th>Patient Name</th>
                    <th>Symptoms</th>
                    <th>Status</th>
                </tr>
                
                    {
                        details.map((det)=>
                        <tr>
                            <td style={{backgroundColor:"white"}}>{det.Id}</td>
                            <td style={{backgroundColor:"white"}}>{det.patientId}</td>
                            <td style={{backgroundColor:"white"}}>{det.patientName}</td>
                            <td style={{backgroundColor:"white"}}>{det.symptom}</td>
                            <td style={{backgroundColor:"white"}}><input type="checkbox"></input></td>
                        </tr>)
                    }
            </table>
            </div>
            </div>
        </>
    );
}

export default DoctorAppoinment;