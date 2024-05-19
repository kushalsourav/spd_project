import React from 'react';
import "./FeaturedCourse.css";
import imgL from "../../assets/img/7408.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';

const FeaturedCourse = ({title, description, rating}) => {
    return (
        <div className="featured_body" style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imgL})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            }}>
       
        <div className="featured_details">
            <h5 className="featured_title">{title}</h5>
            <p className="featured_description">{description.substring(0,50)}</p>
            <span className="featured_duration">
                <FontAwesomeIcon className="featured_icon" icon={faClock} />
                {rating}
            </span>
        </div>
    </div>
    );
}

export default FeaturedCourse;
