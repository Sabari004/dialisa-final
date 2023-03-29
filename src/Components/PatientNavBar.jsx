import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
function PatientNavBar() {
  let { patId } = useParams;
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img
            src="https://res.cloudinary.com/dobtf02zs/image/upload/v1679632344/logo_gwiuby.png"
            alt="Logo"
            width="36"
            height="30"
            class="d-inline-block align-text-top"
          />

          <a class="navbar-brand" href="#" style={{ fontSize: 30 }}>
            Dializa
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/patient/home">
                  <span style={{ fontSize: 20 }}>Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/patient/appoinment"
                  style={{ paddingLeft: 25 }}
                >
                  <span style={{ fontSize: 20 }}>Appointment</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/patient/aboutus"
                  style={{ paddingLeft: 25 }}
                >
                  <span style={{ fontSize: 20 }}>About</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/patient/complaint"
                  style={{ paddingLeft: 25 }}
                >
                  <span style={{ fontSize: 20 }}>FeedBacks</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/patient/bookedappointments"
                  style={{ paddingLeft: 25 }}
                >
                  <span style={{ fontSize: 20 }}>BookedAppointments</span>
                </Link>
              </li>

              <div style={{ marginLeft: "100px" }}></div>
              <li class="nav-item">
                <span class="glyphicon glyphicon-user"></span>

                <Link
                  class="nav-link active"
                  style={{ padding: 10 }}
                  to="/patient/profile"
                >
                  <Icon.PersonCircle width="30" size="20" />
                  <span style={{ fontSize: 20 }}>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PatientNavBar;
