// src/components/PathFollowing.js

import React from 'react';
import './PathFollowing.css';
import data from '../data.json';

const PathFollowing = () => {
  const { pathFollowing } = data;

  return (
    <section id="path-following-section" className="path-following-section">
      <h2>{pathFollowing.title}</h2>
      <div className="content">
        <div className="media-container">
          <img src={pathFollowing.image1} alt={pathFollowing.image1Alt} className="media-image" />
          <img src={pathFollowing.image2} alt={pathFollowing.image2Alt} className="media-image" />
          <div className="video-container">
            <iframe
              src={pathFollowing.video}
              title="YouTube video"
              className="video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="description">{pathFollowing.description}</p>
      </div>
    </section>
  );
};

export default PathFollowing;
