// RecommendationCard.js
import axios from 'axios';
import React from 'react';

function RecommendationCard({ recommendation }) {
  
    return (
        <div className="recommendation-card">
            <h3>{recommendation}</h3>
            {/* Additional information or styling can be added here */}
        </div>
    );

}

export default RecommendationCard;
