import React from 'react';
import './ActiveCourse.css';
import imgL from "../../assets/img/7408.jpg";
const ActiveCourse = ({title}) => {
    return (
        <div className="course_body">
            <span className='course_img' style={{
  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imgL})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'}}></span>
            <div className="course_details">
                <h5 className="course_title">{title}</h5>
                <div className="course_rangebar">
                    <div class="course_pro course_pro-color">
                        <span className="course_bar"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveCourse;
