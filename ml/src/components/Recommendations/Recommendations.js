// Recommendations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecommendationCard from '../RecommendationCard/RecommendationCard';

function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [userInput, setUserInput] = useState('');

  const getResults = async () => {
    try {
      // const res = await axios.get(`http://localhost:5000/api/recommendations/input?input=java`).then((res) => {
      //   console.log(res)
      // })
      // setRecommendations(res.data);
     // Assuming 'java' is the user input
      const res = await axios.get(`http://localhost:5500/api/recommendations/?input=${userInput}`);
      console.log(res.data); // Logging the response data to the console
      console.log(res.data); // Logging the response data to the console
      setRecommendations(res.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();
  };
  console.log(recommendations)

  return (
    <div className="recommendations-container">
      <h2>Recommendations</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your search term"
          value={userInput}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={() => getResults()}>Search</button>
      </form>
      <div className="recommendation-grid">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard key={index} recommendation={recommendation} />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;