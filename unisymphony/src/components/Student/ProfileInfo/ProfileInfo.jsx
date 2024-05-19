import React from 'react';
import "./ProfileInfo.css"
const ProfileInfo = () => {
    return (
        
        <div className='profile_info'>
            <div className="profile_info-header">
                <h5 className="profile_info-heading">
                   Personal Information
                </h5>
                <small className="profilee_info-smalltext">
                    Upload your personal information here
                </small>
            </div>
            <div className="personal_info-form">
                <div className="personal_info-form-control">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" id='fullname' className='personal_info-form-fullname' />
                </div>
                <div className="personal_info-form-control">
                    <label htmlFor="email">email</label>
                    <input type="text" id='email' className='personal_info-form-email' />
                </div>
                <div className="personal_info-form-control">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" id='fullname' className='personal_info-form-fullname' />
                </div>
                <div className="personal_info-form-control">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" id='fullname' className='personal_info-form-fullname' />
                </div>


                
            </div>
        

        </div>
    );
}

export default ProfileInfo;
