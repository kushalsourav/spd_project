import React, { useState, useEffect } from 'react';
import "./CalendarHead.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CalendarHead = ({data,setData, setCloseModal}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentWeekData, setCurrentWeekData] = useState([]);

    const generateCurrentWeekData = (date) => {
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay() + 1);
        const weekData = [];
        for (let i = 0; i < 5; i++) { 
            const currentDate = new Date(weekStart);
            currentDate.setDate(weekStart.getDate() + i);
            const formattedDate = currentDate.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: '2-digit',
                year: 'numeric'
            });
            weekData.push({
                date: formattedDate,
            });
        }
        setData({type:"GET_WEEKDATA", weekData:weekData})
        setCurrentWeekData(weekData);
    };

    const goToNextWeek = () => {
        setCurrentDate(prevDate => {
            const nextWeekDate = new Date(prevDate);
            nextWeekDate.setDate(prevDate.getDate() + 7); 
            generateCurrentWeekData(nextWeekDate);
            return nextWeekDate;
        });
    };


    const goToPreviousWeek = () => {
        setCurrentDate(prevDate => {
            const previousWeekDate = new Date(prevDate);
            previousWeekDate.setDate(prevDate.getDate() - 7); 
            generateCurrentWeekData(previousWeekDate);
            return previousWeekDate;
        });
    };

    useEffect(() => {
        generateCurrentWeekData(currentDate);
        console.log(currentWeekData)
    }, []); 

    return (
        <div className='calendarhead'>
            <h2 className='calendarhead_heading'>Calendar</h2>
            <div className="calendarhead_body">
                <div className="calendarhead_toggle">
                    <span className='calendarhead_toggler'>week</span>
                </div>
                <div className="calendarhead_dates">
                    <button className='calendarhead_icon' onClick={goToPreviousWeek}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>
                    <span className='calendarhead_date' onLoadStart={() => {
                        setData({type:"GET_WEEKDATA", weekData:currentWeekData})
                    }} >{currentWeekData[0]?.date} - {currentWeekData[4]?.date}</span>
                    <button className='calendarhead_icon' onClick={goToNextWeek}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </div>
                <button className='calendarhead_btn' onClick={() => {
                       setCloseModal()
                }}>
                    <FontAwesomeIcon icon={faPlus} className='calendarhead_btn-icon' />
                    create event
                </button>
            </div>
        </div>
    );
}

export default CalendarHead;
