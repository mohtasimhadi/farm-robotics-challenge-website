import React from 'react';
import data from '../data.json'; // Correct path to data.json

const PathFollowing = () => {
  const { images, description, video } = data.pathFollowing;

  return (
    <div className="path-following-section">
      <div className="description-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Path Following ${index}`} className="path-image" />
        ))}
        <p className="description">{description}</p>
      </div>
      <div className="video">
        <iframe
          title="Path Following Video"
          src={video}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PathFollowing;
