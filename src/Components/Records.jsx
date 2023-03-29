import React, { useState } from 'react'
import PatientNavBar from './PatientNavBar'
import Styles from '../Styles/Patients.module.css'

function Records() {
    const[records,setRecords]=useState([
        {
            id:1,
            patientId:11,
            Date:"12-01-2004",
            hospitalId:21,
             hospitalName:"Krishna",
             DoctorName: "xyz",
            bloodpressure:"120mmHg",
            weight:58,
            consultant:"Sabari",
            drug:{
                drugId:1,
                drugName:"Parecetomol"
            }
        },
        {
            id: 2,
            patientId: 12,
            Date: "12-01-2004",
            hospitalId: 21,
            hospitalName: "KCT",
            DoctorName: "xyz",
            bloodpressure: "120mmHg",
            weight: 58,
            consultant: "Jega",
            drug: {
                drugId: 2,
                drugName: "Dolo"
            }
        },
        {
            id: 3,
            patientId: 11,
            Date: "12-01-2004",
            hospitalId: 21,
            hospitalName: "kpr",
            DoctorName: "xyz",
            bloodpressure: "120mmHg",
            weight: 58,
            consultant: "rahul",
            drug: {
                drugId: 1,
                drugName: "saridon"
            }
        },
        {
            id: 4,
            patientId: 11,
            Date: "12-01-2004",
            hospitalId: 21,
            hospitalName: "Krishna",
            DoctorName: "xyz",
            bloodpressure: "120mmHg",
            weight: 58,
            consultant: "Sathish",
            drug: {
                drugId: 1,
                drugName: "dolo-650"
            }
        },
        {
            id: 5,
            patientId: 13,
            Date: "10-04-2002",
            hospitalId: 11,
            hospitalName: "Balaraman",
            DoctorName: "xyz",
            bloodpressure: "100mmHg",
            weight: 70,
            consultant: "Gokul",
            drug: {
                drugId: 2,
                drugName: "paracetamol"
            }
        }
    ])

  return (
    <div>
        <PatientNavBar/>
        <center>
            <b><p style={{marginTop: "20px"}}>RECENT RECORDS</p></b>
            <table className={Styles.RecordContainer} cellPadding="30px"cellSpacing="30px">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Hospital</th>
                        <th>Doctor</th>
                        <th>Prescribed Drug</th>
                        <th>More Details</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record)=>{
                        return(
                            <tr style={{backgroundColor:"f0f0f0"}}>
                                <td style={{backgroundColor:"white"}}>{record.Date}</td>
                                <td style={{backgroundColor:"white"}}>{record.hospitalName}</td>
                                <td style={{backgroundColor:"white"}}>{record.DoctorName}</td>
                                <td style={{backgroundColor:"white"}}>{record.drug.drugName}</td>
                                <td style={{backgroundColor:"white"}}><a href="#" style={{textDecoration: "none"}}>View More...</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <a href="#" style={{textDecoration: "none"}}>Load More Records</a>
        </center>
    </div>
  )
}

export default Records