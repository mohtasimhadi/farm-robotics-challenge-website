import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Smart Systems Lab</div>
      <ul>
        <li><button onClick={() => scrollToSection('main-section')}>Main</button></li>
        <li><button onClick={() => scrollToSection('path-following-section')}>Path Following</button></li>
        <li><button onClick={() => scrollToSection('plant-counting-section')}>Plant Counting</button></li>
        <li><button onClick={() => scrollToSection('quality-assessment-section')}>Quality Assessment</button></li>
        <li><button onClick={() => scrollToSection('the-team-section')}>The Team</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
