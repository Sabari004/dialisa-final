import React from "react";
import { Navigate, useParams } from "react-router-dom";
import PatientNavBar from "../Components/PatientNavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function BookPatientAppointment() {
  const navigate = useNavigate();
  let { macId } = useParams();
  let { labId } = useParams();
  const [slots, setSlots] = useState([]);
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("patientKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const fetchdata = async () => {
    axios.get(`http://localhost:8080/shift/macid/${macId}`).then((response) => {
      console.log(response.data);
      setSlots(response.data);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <PatientNavBar />
      {/* <h1>ghuio</h1> */}
      <div>
        {slots.map((slot) => (
          <>
            <input
              type="radio"
              disabled={slot.flag}
              name="check"
              for="check"
              onClick={(e) => {
                axios.post(`http://localhost:8080/shift`, {
                  shiftId: slot.shiftId,
                  macId: slot.macId,
                  patId: userName.patId,
                  flag: true,
                  labId: slot.labId,
                  stTime: slot.stTime,
                  endTime: slot.endTime,
                });
                alert("Slot is booked");
                navigate("/patient/home");
              }}
            ></input>
            <label>
              {slot.stTime}-{slot.endTime}
            </label>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default BookPatientAppointment;
