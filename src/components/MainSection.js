// src/components/MainSection.js

import React, { useEffect, useState } from 'react';
import data from '../data.json';

const MainSection = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Fetch data from JSON
    setContent(data.mainSection);
  }, []);

  const scrollToPathFollowing = () => {
    document.getElementById('path-following-section').scrollIntoView({ behavior: 'smooth' });
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className="main-section">
      <h1 className="title">{content.title}</h1>
      <p className="description">{content.description}</p>
      <div className="button-container">
        <button className="button" onClick={scrollToPathFollowing}>Learn More</button>
      </div>
    </section>
  );
};

export default MainSection;
