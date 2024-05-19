import React from 'react';
import "./ProfileCard.css";
import ProfileImgCard from '../ProfileImgCard/ProfileImgCard';
const ProfileCard = () => {
    return (
        <div className='profile_card'>
            <ProfileImgCard />

            <div class="interview-card">
    <h2>Candidate Information</h2>
    <p><strong>Name:</strong> John Doe</p>
    <p><strong>Position:</strong> Software Engineer</p>

    <h2>Interview Summary</h2>
    <p>The candidate demonstrated strong problem-solving skills and excellent communication during the interview.</p>

    <h2>Next Steps</h2>
    <p>Schedule a follow-up technical interview to assess coding abilities.</p>

    <h2>Interviewer Feedback</h2>
    <p>The candidate showed promise and would be a good fit for the team with further assessment.</p>
</div>

<div class="dashboard">
    <div class="widget">
        <h2>Recent Interview Insights</h2>
        <div class="widget-content">
       
        </div>
    </div>
    <div class="widget">
        <h2>Upcoming Events</h2>
        <div class="widget-content">
     
        </div>
    </div>
    <div class="widget">
        <h2>Project Opportunities</h2>
        <div class="widget-content">
            
        </div>
    </div>
</div>
<div class="dashboard-links">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Interview Insights</a></li>
        <li><a href="#">Discussion Forums</a></li>
        <li><a href="#">Job Postings</a></li>
    </ul>
</div>

        </div>
    );
}

export default ProfileCard;
