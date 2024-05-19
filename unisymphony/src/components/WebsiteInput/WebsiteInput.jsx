// WebsiteInput.js
import React, { useState } from 'react';
import './WebsiteInput.css';
import { useNavigate } from 'react-router-dom';
import { createProfile } from '../../apis/apis';

const WebsiteInput = ({data, setData , setAuth}) => {
    const [website, setWebsite] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const handleInputChange = (event) => {
        setWebsite(event.target.value);
    };

    const handleSubmit = () => {
        setData({
            ...data.userProfile,
            type: "SETUP",
            website:website
        });
        createProfile(data.userProfile, token, setAuth)
        navigate('/Home')
    };


    return (
        <div className="website-container prof-item-center">
            <p className="website-header">Share your website:</p>
            <input
                type="text"
                className="website-input"
                value={website}
                onChange={handleInputChange}
                placeholder="Enter your website URL..."
            />
            <button className='submit-prf-btn' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default WebsiteInput;
