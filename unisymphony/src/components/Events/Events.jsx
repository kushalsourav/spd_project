import React from 'react';
import "./Events.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Events = () => {
    return (
    //     <div className='event'>
    //          <h4 className='event_title'>Computer Science</h4>
    // <p className='event_type'>workshop</p>
    // <p className='event_date'>12/01/2024</p>

    // {/* <p><strong>Time:</strong> [Event Time]</p>
    // <p><strong>Location:</strong> [Event Location]</p>
    // <p><strong>Description:</strong> [Brief Event Description]</p> */}
    //     </div>
      <div className='event'>
        <img src="https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?size=626&ext=jpg" alt="" className='event_img' />
           <div className="event_body">
           <h4 className='event_title'>Computer Science</h4>
           <p className='event_date'>thu, sep 30, 5:00 pm</p>
            <FontAwesomeIcon icon={faArrowRight} className="event_icon" />
           </div>
       </div>
    );
}

export default Events;
