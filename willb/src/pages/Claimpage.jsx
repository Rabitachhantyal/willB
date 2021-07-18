import React from 'react';
import check from '../images/check.png';

import Navbarpro from './Navbarpro';
const  Claimpage=()=>{
    return(
        <>
        <Navbarpro />
        <div >
       <img src={check} alt="checkedimg" style={{marginLeft:"700px",marginTop:"100px",width:"95px"}}/>
       </div>
        <h2 style={{textAlign:'center',color:"#2c6e49",marginTop:"60px",fontSize:"50px"}}> 
        <strong>
        You have successfully claimed your prize!!!
        </strong>
        <br/>
        <br/>
        Prize:Netflix Gift Card($15)

        
        </h2>
        </>
    )
}

export default Claimpage;