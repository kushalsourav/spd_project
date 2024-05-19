import React from 'react';
import "./CourseCard.css"
const CourseCard = ({title, uni, difficulty, link, description, rating}) => {
    return (
        <div>
            <div class="course-card">
                <h2>{title}</h2>
                <p><strong>University:</strong>{uni}</p>
                <p><strong>Difficulty Level:</strong>{difficulty}</p>
                <p><strong>Course Rating:</strong>{rating}</p>
                <a href={`${link}`} target="_blank">Course URL</a>
                <p><strong>Course Description:</strong>{description}</p>
            </div>

        </div>
    );
}

export default CourseCard;
