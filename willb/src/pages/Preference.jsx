import React from 'react';
import {Button} from './Button';
import './PreferenceSection.css';
import { NavLink } from 'react-router-dom';

import Navbarpro from './Navbarpro';
const Preference=()=>{
    return(
        <>
        <Navbarpro />
        <div className='preference-container' style={{marginTop:"70px"}}>
            <h2 style={{fontSize:"50px"}}>What's your Preferences?</h2>
            <div className='preference-btns1' style={{marginTop:"40px"}}>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Videos
                </Button>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Sketch
                </Button>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Journal
                </Button>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Podcast
                </Button>
            </div>
            <div className='preference-btns2'>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Music
                </Button>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Games
                </Button>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Quotes
                </Button>
            </div>
            <div className='preference-btns3'>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Tiktok
                </Button>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Movie
                </Button>
                <Button 
                   className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn--large'
                >
                    Blog
                </Button>
            </div>
            <div className='preference-btns4 'style={{marginTop:"50px"}}>
                 
                <Button 
                   className='btns'
                   buttonSize='btn--large'
                   
                ><NavLink to="/result" style={{color:"white",textDecoration:"none",paddingRight:"20px"}}>
                    Submit
                    </NavLink>
                </Button>
                
            </div>
            <div className='image'>
                {/* <img className="img-fluid" src={process.env.PUBLIC_URL + '/preference.png'} /> */}
            </div>
        </div>
        </>
    )
}

export default Preference;