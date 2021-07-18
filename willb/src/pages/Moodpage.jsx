import React from 'react';
import Navbarpro from "../pages/Navbarpro";
import "./App.css";
import happy from "../images/Happy.png";
import sad from "../images/Sademoji.png";
import depressed from "../images/Depressed.png";
import angry from "../images/Angry.png";
import { NavLink } from 'react-router-dom';
const Moodpage=()=>{
    return(
        <>
        <Navbarpro />
       <h2 className="text-center text-success text-capitalize font-monospace  fw-bold" style={{color:"seagreen",marginTop:"90px",fontSize:"50px"}}>{""}<strong> How do you feel today?{""} </strong></h2>
    <div className="container">
      <div className="row">
        <div className="mt-5"></div>
        <div className="col-sm mt-5">
          <div className="image-box">
            <NavLink to="/preference">
              <img className="img-fluid" src={happy} alt="logo" roundedCircle />
              <p className="text-center fs-3" style={{fontSize:"14px"}}>Happy</p>
            </NavLink>

          </div>
        </div>
        <div className="col-sm mt-5">
          <div className="image-box">
            <NavLink to="/preference">
              <img className="img-fluid" src={sad} alt="logo" roundedCircle />
              <p className="text-center fs-3" style={{fontSize:"14px"}}>Sad</p>
            </NavLink>
          </div>
        </div>
        <div className="col-sm mt-5">
          <div className="image-box">
            <NavLink to="/preference">

              <img className="img-fluid" src={depressed} alt="logo" roundedCircle />
              <p className="text-center fs-3" style={{fontSize:"14px"}}>Depressed</p>
            </NavLink>
          </div>
        </div>
        <div className="col-sm mt-5">


          <div className="image-box">
            <NavLink to="/preference">
              <img className="img-fluid" src={angry} alt="logo" roundedCircle />
              <p className="text-center fs-3" style={{fontSize:"14px"}} >Angry</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Moodpage;