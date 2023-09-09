import React from "react";
import MainNavBar from "../Components/MainNavBar";
import Style from "../Styles/About.module.css";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
function BasicPage() {
  return (
    <div>
      <MainNavBar />
      <div className={Style.dmain}>
        <div className={Style.doctor}>
          <div className={Style.image}>
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600"
              width="100%"
              alt="logo"
              // style={{ marginLeft: 100 }}
            />
          </div>
          <div className={Style.docLink}>
            <Link to="/lab/signin" className={Style.link}>
            DIALYSIS CENTER
              
            </Link>
          </div>
        </div>
        <div className={Style.doctor}>
          <img
            src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600"
            height="auto"
            width="100%"
            alt="logo"
            // size="100"
            // style={{ marginLeft: 100 }}
          />
          <div className={Style.docLink}>
            <Link to="/patient/signin" className={Style.link}>
              PATIENT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicPage;
