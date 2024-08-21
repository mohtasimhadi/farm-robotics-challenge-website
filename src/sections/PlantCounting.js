import React from 'react';
import './PlantCounting.css'; // Import the scoped CSS file

function PlantCounting() {
  return (
    <div className="container">
      <h1 className="title">Plant Counting</h1>
      <div className="video-header-container">
        <h3 className="header-text">
          This is a long header that goes alongside the YouTube video
        </h3>
      </div>
      <div className="images-container">
        <img
          className="image"
          src="path_to_your_first_image.jpg"
          alt="First"
        />
        <img
          className="image"
          src="path_to_your_second_image.jpg"
          alt="Second"
        />
      </div>
    </div>
  );
}

export default PlantCounting;
