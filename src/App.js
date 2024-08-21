import React from 'react';
import './App.css';
import Home from './sections/Home';
import PathFollowing from './sections/PathFollowing';
import PlantCounting from './sections/PlantCounting';
import QualityAssessment from './sections/QualityAssessment';
import TheTeam from './sections/TheTeam';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#pathFollowing">Path Following</a></li>
          <li><a href="#plantCounting">Plant Counting</a></li>
          <li><a href="#qualityAssessment">Quality Assessment</a></li>
          <li><a href="#theTeam">The Team</a></li>
        </ul>
      </nav>

      <div className="content">
        <Home />
        <PathFollowing />
        <PlantCounting />
        <QualityAssessment />
        <TheTeam />
      </div>

      <footer className="footer">
        <p>&copy; 2024 Smart Systems Lab, Auburn University. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
