import React from 'react';

function QualityAssessment() {
  return (
    <div className="container">
      <h1 className="title">Quality Assessment</h1>
      <div className="images-container">
        <img
          className="image"
          src="path_to_your_first_image.jpg"
          alt="First"
        />
        <img
          className="image"
          src="path_to_your_first_image.jpg"
          alt="First"
        />
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
      <div className="video-header-container">
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h3 className="header-text">
          This is a long header that goes alongside the YouTube video
        </h3>
      </div>
    </div>
  );
}

export default QualityAssessment;
