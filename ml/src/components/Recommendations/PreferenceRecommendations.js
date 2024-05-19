import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PreferenceRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [userId, setUserId] = useState('1712351'); 

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/recommendations/6621051f780811d1cad85b62');
        console.log('Response:', response.data); // Log response data
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, [userId]);

  return (
    <div>
      <h2>Recommended Courses Based on Preferences</h2>
      {recommendations.map((course, index) => (
        <div key={index}>
          <h3>{course['Course Name']}</h3>
          <p>University: {course['University']}</p>
          <p>Difficulty Level: {course['Difficulty Level']}</p>
          <p>Course Rating: {course['Course Rating']}</p>
          <p>Course URL: {course['Course URL']}</p>
          <p>Course Description: {course['Course Description']}</p>
        </div>
      ))}
    </div>
  );
}

export default PreferenceRecommendations;
