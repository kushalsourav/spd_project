const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Define an API endpoint to fetch recommendations based on user input
app.get('/api/recommendations/input', async (req, res) => {
  try {
    const userInput = req.query.input;
    // Make a GET request to the Python server
    const response = await axios.get(`http://localhost:5000/api/recommendations/input?input=${userInput}`);
    const recommendations = response.data;
    res.json(recommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'An error occurred while fetching recommendations' });
  }
});

// Define an API endpoint to fetch recommendations based on user preferences
app.get('/api/recommendations/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    // Make a GET request to the Python server
    const response = await axios.get(`http://localhost:5000/api/recommendations/${userId}`);
    const recommendations = response.data;
    res.json(recommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'An error occurred while fetching recommendations' });
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});