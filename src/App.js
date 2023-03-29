import logo from "./logo.svg";
import "./App.css";
import Main from "./main";
import BasicPage from "./Pages/BasicPage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginDoc from "./Pages/LoginDoc";
import SignUpDoc from "./Pages/SignUpDoc";
import Login from "./Pages/login.component";
import SignUp from "./Pages/signup.component";
import PatientHome from "./Pages/PatientHome";
import LabHome from "./Pages/LabHome";
import LabAbout from "./Pages/LabAbout";
import PatientAbout from "./Pages/PatientAbout";
import PatientComplaint from "./Pages/Complaint.";
import Appointment from "./Pages/DoctorAppoinment";
import Machine from "./Pages/Machine";
import LabAppoinment from "./Pages/LabAppointment";
import MachineSlot from "./Pages/MachineSlot";
import Hospitals from "./Pages/Hospitals";
import BookPatientAppointment from "./Pages/BookPatientAppointment";
import PatientBookedSlots from "./Pages/PatientBookedSlots";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicPage />}></Route>
        <Route path="/lab/signin" element={<LoginDoc />}></Route>
        <Route path="/lab/signup" element={<SignUpDoc />}></Route>
        <Route path="/lab/home" element={<LabHome />}></Route>
        <Route path="/lab/aboutus" element={<LabAbout />}></Route>
        <Route path="/patient/appoinment/:labId" element={<Machine />}></Route>
        <Route
          path="/patient/appoinment/:labId/:macId"
          element={<BookPatientAppointment />}
        ></Route>
        <Route path="/patient/aboutus" element={<PatientAbout />}></Route>
        <Route path="/patient/complaint" element={<PatientComplaint />}></Route>
        <Route
          path="/patient/bookedappointments"
          element={<PatientBookedSlots />}
        ></Route>
        <Route path="/lab/appoinment" element={<LabAppoinment />}></Route>
        <Route path="/lab/appoinment/:macId" element={<MachineSlot />}></Route>
        <Route path="/patient/home" element={<PatientHome />}></Route>
        <Route path="/patient/appoinment" element={<Hospitals />}></Route>
        <Route path="/patient/signup" element={<SignUp />}></Route>
        <Route path="/patient/signin" element={<Login />}></Route>

        {/* <Route path="/patient//signin" element={<Login />}></Route> */}
        {/* <Route path="/lab/:labId/home" element={<LabHome />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
