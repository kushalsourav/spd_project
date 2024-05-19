import React from 'react';
import "./PeriodCard.css";


const PeriodCard = () => {
    return (
        <div className='period_card'>
            <div className="period_body-1">
                <span className='period_time'>12:00</span>
                <h5 className='period_heading'>Computer Science</h5>
                <p className='period_professor'>Dr. Nisha  <span className='period_room'>808</span></p>
            </div>
            <div className="period_body-2">
                <span className='period_label'>Homework</span>
            </div>
        </div>
    );
}

export default PeriodCard;
