import React from 'react';
import "./GradeCard.css"
const GradeCard = () => {
    return (
        <div className='gradecard'>
            <h4 className="gradecard_head">Grades <span className="gradecard_avg">9,26</span> </h4>
            <div className="gradecard_grades">
                <span className="grades">9</span>
                <span className="grades">5</span>
                <span className="grades">2</span>
                <span className="grades">8</span>
                <span className="grades">8</span>
                <span className="grades">9</span>
                <span className="grades">7</span>
                <span className="grades">9</span>
                <span className="grades">9</span>
                <span className="grades">7</span>
                <span className="grades">9</span>
                <span className="grades">9</span>
                <span className="grades">9</span>
                <span className="grades">9</span>
                <span className="grades">9</span>
            </div>
        </div>
    );
}

export default GradeCard;
