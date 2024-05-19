import React from 'react';
import "./SubjectCard.css";

const SubjectCard = () => {
    return (
        <div className='subjectcard'>
            <div className="subjectcard_body">
                <span className="subjectcard_day">Today</span>
                <h4 className="subjectcard_name">History</h4>
                <span className="subjectcard_performance"> <span className="subjectcard_icon">+</span>1% performance</span>
            </div>
        </div>
    );
}

export default SubjectCard;
