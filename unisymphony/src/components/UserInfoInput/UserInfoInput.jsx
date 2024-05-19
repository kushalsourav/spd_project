// UserInfoInput.js
import React, { useState } from 'react';
import './UserInfoInput.css';
import { useNavigate } from 'react-router-dom';

const UserInfoInput = ({ data, setData }) => {
    const [userInfo, setUserInfo] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setUserInfo(event.target.value);
    };

    const handleSubmit = () => {
        setData({
            ...data.userProfile,
            type: "SETUP",
            about: userInfo
        });
        setData({type:"SET_PATH" , currentPath:"experience"})
    };

    return (
        <div className="user-info-container prof-item-center">
            <p className="user-info-header">Tell us about yourself:</p>
            <textarea
                className="user-info-input"
                value={userInfo}
                onChange={handleInputChange}
                placeholder="Type here..."
            />
            <button className='submit-prf-btn' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UserInfoInput;
