import Styles from "../Styles/About.module.css";
import DoctorNavBar from "../Components/DoctorNavBar.jsx"
function About() {
  return (
    <>
    <DoctorNavBar/>
      <div className={Styles.aboutContainer}>
        <div className={Styles.aboutContainerIn}>
          <div className={Styles.aboutContainerA}>
            <div className={Styles.aboutContainerAImg}>
              <img
                src="https://res.cloudinary.com/dobtf02zs/image/upload/v1679662912/pexels-christina-morillo-1181625_nesrdg.jpg"
                width="100%"
              />
            </div>
            <div className={Styles.aboutContainerACont}>
              <h1>About us</h1>
              <h5>
                This app helps you to book an Dialysis center location near by you or
                Which you want.
              </h5>
            </div>
          </div>
          <div className={Styles.aboutContainerA}>
            <div className={Styles.aboutContainerACont}>
              <h1>Contact us</h1>
              <table >
                <tr>
                  <td>
                    <h5>Phone :</h5>
                  </td>
                  <td>
                    <h5> 9345335722</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>email :</h5>
                  </td>
                  <td>
                    <h5> technova@gmail.com</h5>
                  </td>
                </tr>
              </table>
            </div>

            <div className={Styles.aboutContainerAImg}>
              <img
                src="https://res.cloudinary.com/dobtf02zs/image/upload/v1679664820/contact-img_comss3.png"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
