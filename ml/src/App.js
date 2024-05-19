import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Recommendations from './components/Recommendations/Recommendations';
import PreferenceRecommendations from './components/Recommendations/PreferenceRecommendations';
import axios from 'axios';

function App() {

//   const getResults  = async () => { await axios.get("http://localhost:5000/api/recommendations/6621051f780811d1cad85b62").then((res) => console.log(res))}
//   useEffect(() => {
// getResults()
//   },[])
    return (
    <div className="App">
      <Recommendations />
      <PreferenceRecommendations />
    </div>
  );
}

export default App;