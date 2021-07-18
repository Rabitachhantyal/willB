import React from 'react';
import './Home.css';
// import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';

import hug from "../images/hugwhite.png";
import phone from "../images/backhug.png";
import Moodpage from './Moodpage';
import homeimg from "../images/homeimg.png"
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Home=()=>{
    return(
        <>
        <Navbar />
        <section className="header" >
        <div className="container-fluid " >
            <div className='row'>
                <div className="col-12 mx-auto">
                  <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">

                     <h1 className='quote' >
                        <strong>
                         IT'S OKAY NOT TO BE OKAY
                         </strong>
                     </h1>
                     <div style={{marginLeft:"80px", marginTop:"40px"}}>
                         <h5 style={{fontSize:"30px"}}>
                             I will be:
                         </h5>
                         <img src={homeimg} alt ="homeimg" style={{width:"300px"}}/>
                     </div>
                     <div className=" button-go">
                     <NavLink to ="/moodpage" className= "btn-get-started" style={{color: "white",textDecoration:"none", marginTop:"0px"}}> 
                      Let's go 
                     </NavLink>

                     </div>
                     

                   </div>
                   
                   <div className="col-lg-6 order-1 order-lg-2 header-img" >
                     {/* Name */}
                    <div className="slide-img">
                    
                    <Carousel>
                        <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={hug}
                            alt="hug"
                        />
                        {/* <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={phone}
                            alt="phone"
                        />
                        
                        </Carousel.Item>
                    </Carousel>
                    </div>
                       
                   </div>
                   </div>
                   
                    
                </div>
            </div>
        </div>

        </section>
        
        
        </>
    )
}

export default Home;