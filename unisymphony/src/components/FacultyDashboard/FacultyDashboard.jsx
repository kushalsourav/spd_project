import React from 'react';
import './FacultyDashboard.css'; // Import CSS file for styling
import ResearchCard from '../ResearchCard/ResearchCard';

const FacultyDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Faculty Dashboard</h1>
      <div className="card recent-opportunities">
        <h2 className="card-title">Recent Research/Project Opportunities Feed</h2>
        {/* Render recent research/project opportunities feed */}
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
      </div>
      <div className="card upcoming-events">
        <h2 className="card-title">Upcoming Events Section</h2>
        {/* Render upcoming events */}
        <p>Content for upcoming events...</p>
      </div>
      <div className="card discussion-forums">
        <h2 className="card-title">Discussion Forums Feed</h2>
        {/* Render discussion forums feed */}
        <p>Content for discussion forums feed...</p>
      </div>
      <div className="quick-links card">
        <h2 className="card-title">Quick Links</h2>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Research Opportunities</a></li>
          <li><a href="#">Discussion Forums</a></li>
          <li><a href="#">Academic Resources</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FacultyDashboard;
