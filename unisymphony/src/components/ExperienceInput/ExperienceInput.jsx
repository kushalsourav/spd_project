// ExperienceInput.js
import React, { useState } from 'react';
import './ExperienceInput.css';
import { useNavigate } from 'react-router-dom';

const ExperienceInput = ({ data,setData }) => {
    const [experience, setExperience] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setExperience(event.target.value);
    };

    const handleSubmit = () => {
        setData({
            ...data.userProfile,
            type: "SETUP",
            experience : experience
        });
        setData({type:"SET_PATH" , currentPath:"website"})
    };

    return (
        <div className="experience-container prof-item-center">
            <p className="experience-header">Share your experience:</p>
            <textarea
                className="experience-input"
                value={experience}
                onChange={handleInputChange}
                placeholder="Type here..."
            />
            <button className='submit-prf-btn' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ExperienceInput;
