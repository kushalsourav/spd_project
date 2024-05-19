import React from 'react';
import "./ExamCard.css";

const ExamCard = () => {
    return (
        <div className='examcard'>
            <div className="examcard_body-1">
                <div className="examcard_details">
                    <h4 className="examcard_head">Exam 4 Oct</h4>
                    <span className="examcard_info">14days before the exam</span>
                </div>
                <div className="examcard_acc">
                    <span className="examcard_go">
                        <span className="acc_text">Go</span>
                        <span className="acc_icon">+</span>
                    </span>
                    <span className="examcard_tests">8 / 12</span>
                </div>
            </div>
            <div className="examcard_rangebar">
                <div class="examcard_pro examcard_pro-color">
                    <span className='examcard_bar'></span>
                </div>
            </div>
        </div>
    );
}

export default ExamCard;
