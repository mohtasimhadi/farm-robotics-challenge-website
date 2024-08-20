import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <PathFollowing />
      <PlantCounting />
      <QualityAssessment />
      <TheTeam />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#main">Main</a></li>
        <li><a href="#path-following">Path Following</a></li>
        <li><a href="#plant-counting">Plant Counting</a></li>
        <li><a href="#quality-assessment">Quality Assessment</a></li>
        <li><a href="#the-team">The Team</a></li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <section id="main">
      <h1>Main Section</h1>
      <p>Welcome to the main section of our page.</p>
    </section>
  );
}

function PathFollowing() {
  return (
    <section id="path-following">
      <h1>Path Following</h1>
      <p>Information about path following.</p>
    </section>
  );
}

function PlantCounting() {
  return (
    <section id="plant-counting">
      <h1>Plant Counting</h1>
      <p>Details about plant counting.</p>
    </section>
  );
}

function QualityAssessment() {
  return (
    <section id="quality-assessment">
      <h1>Quality Assessment</h1>
      <p>Insights into quality assessment.</p>
    </section>
  );
}

function TheTeam() {
  return (
    <section id="the-team">
      <h1>The Team</h1>
      <p>Meet the team behind this project.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
}

export default App;
