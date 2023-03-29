import React, { useState } from 'react'
import PatientNavBar from '../Components/PatientNavBar'
import Style from '../Styles/Patients.module.css'
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
function Complaint() {
  const [count,setCount]=useState(4);
  const [comp,setComp]=useState("")
  console.log(comp)
  const [getfeedbacks, setGetFeedbacks] = useState([
    {
      hospitalId: 1,
      complaints: "Long Wait Times. ..."
    },
    {
      hospitalId: 2,
      complaints: "Issues with Staff Members.Amount of Time Spent with Doctor. ..."
    },
    {
      hospitalId: 3,
      complaints: "Lack of Communication and Dismissiveness."
    }
  ])
  const [postfeedbacks, setFeedBacks] = useState('');
  return (
    <div>

      <div>
        <PatientNavBar />
        <div className={Style.patientTable}>
          <div>

            <h3>
              FeedBacks:
            </h3>
            <div>

              <textarea name="Complaints" type="text"rows={5} value={comp} onChange={(e)=>{setFeedBacks(e.target.value)}} cols={60} style={{textAlign:'center'}}placeholder="Give your Complaints Here"  />
            </div>
            <div>

              <button className={Style.buttons} onClick={() => {
                setGetFeedbacks([{hospitalId:count,complaints:comp},...getfeedbacks])
               } }>Post</button>
            </div>
          </div>
        </div>
        {/* <div className={Style.patientTable}>
        <div>
        <h2 className={Style.heading}>Other Complaints:</h2>
        <div className={Style.patientTable}>

        <table className={Style.Table}>
          <thead >
              <tr>
             
              <th>Complaints</th>
              </tr>
             </thead>
        {
        getcomplaints.map((co,index)=>
             <tbody >
              <tr>
                
                <td>{co.complaints}</td>
              </tr>
             </tbody>
        
        )
      }
      </table>
        </div>
      </div>
      </div> */}
        <div className={Style.patientTable} style={{marginTop:60}}>
         <div>

         
          <h3>OthersFeedbacks:</h3>
          <div className={Style.complaintBox}>

          
          {
          getfeedbacks.map((get,ind)=>
          <div>
              <div className={ ind%2 ===0 ? Style.container : Style.darker}>
                <p className={ind % 2 === 0 ? Style.timeright : Style.timeleft}>{get.complaints}</p>
                {/* <span className={ind % 2 === 0 ? Style.timeright : Style.timeleft}>11:00</span> */}
                <Link style={{ color: 'black' }} to='/patient/profile'><Icon.PersonCircle size="25px" className={ind % 2 === 0 ? Style.icon : Style.iconright} /></Link>
                
        </div>
          
            </div>
        
          )
          }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complaint