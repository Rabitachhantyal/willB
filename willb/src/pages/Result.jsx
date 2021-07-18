import React from 'react';
import './Result.css';
import jennajulienpodcast from '../images/JennaJulienPodcast.jpeg';
import keyandpeele from '../images/Key&Peele.png';
import jujutsukaisen from '../images/jujutsukaisen.jpg';
import happyandsad from '../images/happyandsad.jpg';

import Navbarpro from './Navbarpro';
const Result=()=>{
    return(
        <>
        <Navbarpro />
        <div className='cards'>
      <h2>Your Results</h2>
      <div className='cards-container1'>
        <h2>Videos</h2>
        <div className='card-content'>
          <div className='card-item1'>
            <a href='https://www.youtube.com/watch?v=Dd7FixvoKBw&ab_channel=ComedyCentral' style={{float: 'left', marginLeft: '20px'}} target="_blank"><img src={keyandpeele} class="img-fluid rounded-start" style={{maxWidth: '200px', maxHeight: '100px'}} /></a>
          </div>
          <div className='card-item2'>
            <h3>KEY & PEELE</h3>
            <p>Substitute Teacher</p>
          </div>
        </div>
        <div className='card-content'>
          <div className='card-item1'>
            <a href='https://www.youtube.com/watch?v=cD2KhbwfZLI&ab_channel=GojoYeager' style={{float: 'left', marginLeft: '20px'}} target="_blank"><img src={jujutsukaisen} class="img-fluid rounded-start" style={{maxWidth: '200px', maxHeight: '100px', marginLeft: '10px', border: '1px solid gray'}} /></a>
          </div>
          <div className='card-item2'>
            <h3>Jujutsu Kaisen</h3>
            <p>Best of JuJu Strolls</p>
          </div>
        </div>
        <a href='#'>Show more >>></a>
      </div> 
      <div className='cards-container2'> 
      <h2>Podcast</h2>
      <div className='card-content'>
          <div className='card-item1'>
            <a href='https://podcasts.apple.com/us/podcast/colin-farrell-vol-ii/id827905050?i=1000528964149&fbclid=IwAR332qr22AUC1MeWa7lXFONRfKAYic-cnbZsU8kRhB17MOPvw9omjGBT9Y4' style={{float: 'left'}} target="_blank" ><img src={happyandsad} class="img-fluid rounded-start" style={{maxWidth: '200px', maxHeight: '100px', marginLeft: '10px'}} /></a>
          </div>
          <div className='card-item2'>
            <h3>Happy Sad Confused</h3>
            <p>Collin Farell, Vol. II</p>
          </div>
        </div>
        <div className='card-content'>
          <div className='card-item1'>
            <a href='https://podcasts.apple.com/us/podcast/podcast-284-missed-connections-w-jcyrus/id909705390?i=1000487703612&fbclid=IwAR342YjY91W61j_mlnv6wbuYHqOKSwmAAdn9jyULtm7fml9mll89Jnc2ze8' style={{float: 'left'}}target="_blank"><img src={jennajulienpodcast} class="img-fluid rounded-start" style={{maxWidth: '200px', maxHeight: '100px', marginLeft: '10px'}} /></a>
          </div>
          <div className='card-item2'>
            <h3>Jenna and Julien Podcast</h3>
            <p>Missed Connections with JCyrus</p>
          </div>
        </div>
      <a href='#'>Show more>>></a>
      </div> 
    </div>
        </>
    )
}

export default Result;