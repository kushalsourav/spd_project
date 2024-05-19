import React from 'react';
import "./TimeBar.css";

const TimeBar = () => {
    const data = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
    return (
        <div className='timebar'>
          {
            data.map((time, i) => {
                return <span className={`timebar_time timebar_time-${i + 1}`}>{time}</span>
            })
          }
        </div>
    );
}

export default TimeBar;
