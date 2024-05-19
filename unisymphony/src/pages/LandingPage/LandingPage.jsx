import React from 'react';
import "./LandingPage.css"
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='landing-btns'>
                <Link className='ln-btn1' to={'/Auth/Signin'} >Signin</Link>
                <Link className='ln-btn2' to={'/auth/signup'}>Signup</Link>
            </div>
            <div className='landing-header'>
            <h1>Unisymphony</h1>
            </div>
            

            <div className='landing-cards'>
                <div className='landing-card'>
                <svg className="border" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="5" y="5" width="90" height="90" fill="none" stroke="#ffffff" strokeWidth="1" rx="10" ry="10" />
                    </svg>
                    <h2>For Students</h2>
                    <p>Get exclusive interview insights, mingle with alumni rockstars, and team up with faculty for epic projects or research ventures.</p>
                   
                </div>
                <div className='landing-card'>
                <svg className="border" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="5" y="5" width="90" height="90" fill="none" stroke="#ffffff" strokeWidth="1" rx="10" ry="10" />
                    </svg>
                    <h2>For Faculty</h2>
                    <p>Post research opportunities, job openings, and keep everyone in the loop with our shared calendar.</p>
                 
                </div>
                <div className='landing-card'>
                <svg className="border" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="5" y="5" width="90" height="90" fill="none" stroke="#ffffff" strokeWidth="1" rx="10" ry="10" />
                    </svg>
                    <h2>For Alumni</h2>
                    <p>Be a mentor, share your wisdom, and drop some knowledge bombs with job leads for the next generation of superstars!</p>
                
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
