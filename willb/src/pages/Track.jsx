import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import Navbarpro from './Navbarpro';
const  Track=()=>{
    return(
        <>
        <Navbarpro />
        <div className="container mt-5">
        <div className="row" style={{marginTop: '-50px'}}>
          <div className="col-sm">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              eventClick={
                function (arg) {
                  alert(arg.event.title)
                  alert(arg.event.start)
                }
              }
              moods={[
                { title: 'Sad', date: '2021-07-13' },
                { title: 'Happy', date: '2021-07-15' },
                { title: 'Happy', date: '2021-07-15' },
                { title: 'Happy', date: '2021-07-15' },
                { title: 'Happy', date: '2021-07-15' },
                { title: 'Happy', date: '2021-07-15' },
                { title: 'Happy', date: '2021-07-15' }
              ]}
            />
            <div className="mt-5"></div>
            <div className="buttons" style={{marginTop: '-20px'}}>
            <button type="button" class="btn btn-warning" disabled >Happy </button>
            <span className="badge badge-info">   </span>
            <button type="button" class="btn btn-info" disabled >Sad   </button>
            <span className="badge badge-info">   </span>

            <button type="button" class="btn btn-danger " disabled>Angry </button>
            <span className="badge badge-info">   </span>

            <button type="button" class="btn btn-secondary" disabled>Depressed</button>
            </div>
          </div>
          <div className="col-sm" style={{marginLeft: '50px'}}>
            <div class="shadow p-3 mb-5 bg-white rounded"><h4>Today's Quote:</h4>
              <p className="text-wrap">"Take your time healing, as long as you want. Nobody else knows what you've been through. How could they know how long it will take to heal you?"
              </p>
              <h6>- Abertoli</h6></div>

          </div>

        </div>
      </div>
        </>
    )
}

export default Track;