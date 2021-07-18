import React from 'react';
import Navbarpro from "../pages/Navbarpro";
import { NavLink } from 'react-router-dom';
import badge from '../images/badge.png';
import jd from '../images/jd.png';
import emoji from '../images/sad.png'
import streak from '../images/monument.png';

const Profile=()=>{
    return(
        <>
        <Navbarpro />
        <div class="p-5 mb-2" style={{backgroundColor:"#52b788",height:"597px",marginBottom:"0px"}}>
        <div className="card" style={{width: "270px",height:"300px",marginTop:"100px",marginLeft:"400px",marginRight:"200px",borderRadius:"20px"}}>
        <img src={jd} className="rounded-circle" style={{width: "150px",height:"150px",marginLeft:"60px",marginTop:"-40px"}}  alt="jd img" />
        <p style={{textDecoration:"underline",textAlign:"center",fontSize:"25px",marginTop:"20px"}}> John Doe </p>

        <h3 style={{color:"#7C0707",marginLeft:"20px",marginTop:"20px"}}>Today:<NavLink to="/track"><img src ={emoji} alt="emoji img" style={{marginTop:"-15px",marginLeft:"-100px",width:"40px"}}/></NavLink></h3>
        
     
        
        <div className="card big" style={{width: "350px",marginTop:"-350px",marginLeft:"400px",borderRadius:"20px"}}>
        <h2 style={{color:"red",marginTop:"20px",marginLeft:"20px"}}>BADGES</h2>
        <div>
        <img style={{height:"90px",width:"80px",marginLeft:"20px"}}src={badge} alt="badge img" />
        <img style={{height:"90px",width:"80px",marginLeft:"20px"}}src={badge} alt="badge img" />
        <img style={{height:"90px",width:"80px",marginLeft:"20px"}}src={badge} alt="badge img" />
        <p style={{marginLeft:"150px",fontSize:"15px",marginTop:"20px"}}><NavLink to ="/claimpage" style={{color:"red"}}>Claim your prize>> </NavLink> </p>
        </div>
        <div className="card-body">
            <h5 className="card-title "style={{marginTop:"19px",marginBottom:"0px",marginLeft:"5px"}}><strong>Streaks</strong>
            <img style={{height:"68px",width:"60px",marginLeft:"20px",marginBottom:"20px",marginTop:"-20px"}} src={streak} alt="sreak img"/>
            </h5>
            
           
        </div>
        <ul className="list-group list-group-flush" style={{margin:"10px"}}>
            <li className="list-group-item" style={{marginLeft:"20px"}} >Happy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 </li>
            <li className="list-group-item" style={{marginLeft:"20px"}} >Sad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</li>
            <li className="list-group-item"style={{marginLeft:"20px"}} >Angry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0</li>
            <li className="list-group-item"style={{marginLeft:"20px"}} >Depressed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</li>
        </ul>
      
        </div>
        </div>
        </div>
        </>
    )
}

export default Profile;