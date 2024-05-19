import React, { useEffect, useRef } from 'react';
import "./CalendarBody.css";
import Modal from '../Modal/Modal';
import EventForm from '../EventForm/EventForm';

const Calendar = ({data, openModal, setCloseModal, setData}) => {

  const elemnetRef = useRef();

  useEffect(() => {

    const divs = elemnetRef.current.children;

    const targetDiv = divs[0];
    if (targetDiv) {
      console.log(targetDiv)
      
    }
  }, []);
     console.log()


     const filteredEvents = data.events_dates.filter(event => {
      // Convert the event date string to a Date object
      const eventDate = new Date(event.date);
      // Define the start and end dates
      const startDate = new Date(data.currentWeekData[0]?.date);
      const endDate = new Date(data.currentWeekData[4]?.date);
      // Check if the event date is between the start and end dates
      return eventDate >= startDate && eventDate <= endDate;
  });
  console.log(filteredEvents)
  return (
    <>

      <div className="calendar_body">
        <div className="timeline">
          <div className="spacer"></div>
          <div className="time-marker">9 AM</div>
          <div className="time-marker">10 AM</div>
          <div className="time-marker">11 AM</div>
          <div className="time-marker">12 PM</div>
          <div className="time-marker">1 PM</div>
          <div className="time-marker">2 PM</div>
          <div className="time-marker">3 PM</div>
          <div className="time-marker">4 PM</div>
          <div className="time-marker">5 PM</div>
          <div className="time-marker">6 PM</div>
        </div>
        <div className="days"  ref={elemnetRef}>
            {data.events_dates.map((dates, i) => {
                 return(
                  <div className="day mon">
                  <div className="date">
            
                    <p className="date-day">{dates?.day.substring(0,3)}</p>
                  </div>
                  <div className="calendar_events">
                    {
                      
                    //  data.currentWeekData[i]?.date === dates?.events.map(({date}) => date)[1] &&
                    //   dates?.events.map
                    dates?.events.filter((dat) => dat?.date === data.currentWeekData[i]?.date).map((event) => {
                        console.log(event.start)
                        return(
                          <div className={`calendar_event start-${event.start.substring(0,2)} end-${event.end.substring(0,2)} securities`}>
                          <p className="title">{event.title}</p>
                          <p className="time">{event.start} - {event.end}</p>
                        </div>
                        )
                      })
                    }
                  </div>
                </div>
                 )
            })}


        </div>
      </div>
      <div className='overlay_for'>
      <Modal openModal={openModal} setCloseModal={setCloseModal}>
        <EventForm data={data} setData={setData} />
      </Modal>
      </div>
    </>
  );
}

export default Calendar;
