import React, { useState } from 'react';
import "./EventForm.css";
import { postEvent } from '../../apis/apis';

const EventForm = ({data,setData}) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDays, setEventDays] = useState('');
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('10:00');
    const token = localStorage.getItem("token");

    const startTimes = [
        { value: '09:00', label: '9:00 AM' },
        { value: '10:00', label: '10:00 AM' },
        { value: '11:00', label: '11:00 AM' },
        { value: '12:00', label: '12:00 PM' },
        { value: '13:00', label: '1:00 PM' },
        { value: '14:00', label: '2:00 PM' },
        { value: '15:00', label: '3:00 PM' },
        { value: '16:00', label: '4:00 PM' },
        { value: '17:00', label: '5:00 PM' }
    ];

    const endTimes = [
        { value: '10:00', label: '10:00 AM' },
        { value: '11:00', label: '11:00 AM' },
        { value: '12:00', label: '12:00 PM' },
        { value: '13:00', label: '1:00 PM' },
        { value: '14:00', label: '2:00 PM' },
        { value: '15:00', label: '3:00 PM' },
        { value: '16:00', label: '4:00 PM' },
        { value: '17:00', label: '5:00 PM' },
        { value: '18:00', label: '6:00 PM' }
    ];

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handleSubmit = (e) => {
        e.preventDefault();
        const events  = {
            day: eventDays.join(', '), // Convert array to string
            date: eventDate,
            eventData: {
                title: eventTitle,
                start: startTime,
                end: endTime
            }
        }
        postEvent(events, token)
        console.log({
            eventTitle,
            eventDate,
            eventDays,
            startTime,
            endTime
        });
         setEventDate('')
         setEventDays([])
         setEventTitle('')
         setStartTime("09:00")
         setEndTime("10:00")
    };

    const handleDateChange = (e) => {
        setEventDate(e.target.value);
        const selectedDate = new Date(e.target.value);
        const selectedDay = days[selectedDate.getDay()];
        setEventDays([selectedDay]);
    };

    return (
        <div className="eventFormContainer">
            <h2 className="eventFormTitle">Create Event</h2>
            <form className="eventForm" onSubmit={handleSubmit}>
                <label htmlFor="eventTitle" className="eventFormLabel">Event Title:</label><br />
                <input type="text" id="eventTitle" className="eventFormInput" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required />

                <label htmlFor="eventDate" className="eventFormLabel">Select Date:</label><br />
                <select id="eventDate" className="eventFormSelect" value={eventDate} onChange={handleDateChange}>
                    {data.currentWeekData.map((day) => (
                        <option key={day.date} value={day.date}>{day.date}</option>
                    ))}
                </select>

                <label htmlFor="eventDays" className="eventFormLabel">Select Days:</label><br />
                <select id="eventDays" className="eventFormSelect" value={eventDays} onChange={(e) => setEventDays(e.target.value)} disabled>
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                 <div className='flex'>
                <>
                 <label htmlFor="startTime" className="eventFormLabel">Start Time:</label>
                <select id="startTime" className="eventFormSelect" value={startTime} onChange={(e) => setStartTime(e.target.value)} required>
                    {startTimes.map(time => (
                        <option key={time.value} value={time.value}>{time.label}</option>
                    ))}
                </select>
                </>
                <>
                <label htmlFor="endTime" className="eventFormLabel">End Time:</label>
                <select id="endTime" className="eventFormSelect" value={endTime} onChange={(e) => setEndTime(e.target.value)} required>
                    {endTimes.map(time => (
                        <option key={time.value} value={time.value}>{time.label}</option>
                    ))}
                </select>
                </>
                 </div>

                <input type="submit" value="Submit" className="eventFormSubmit" />
            </form>
        </div>
    );
}


export default EventForm;
