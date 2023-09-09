
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import LabNavbar from './components/LabNavbar';
import LabNavBar from './components/Navbar/LabNavbar/LabNavbar';
import LabLogin from './pages/login/LabLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={LabNavBar} /> 
        <Route path='/lab/login' Component={LabLogin} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
