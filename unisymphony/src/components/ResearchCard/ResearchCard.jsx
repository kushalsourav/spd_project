import React from 'react';
import './ResearchCard.css';

const ResearchCard = () => {
  return (
    <div className="research-card">
     
        <h3 className="research-card-title">Opportunity 1 Title</h3>
  
      <div className="research-card-body">
        <p className="research-card-description">
          Description of the opportunity goes here. It should provide a brief overview of what the opportunity entails, including any requirements, benefits, etc.
        </p>
        <p className="research-card-details">
          Deadline: March 31, 2024 | Location: University Campus
        </p>
      </div>
    </div>
  );
};

export default ResearchCard;
