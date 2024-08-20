import React from 'react';

const PathFollowing = ({ data }) => {
  return (
    <section id="path-following" className="path-following-section">
      <div className="description">
        <p>{data.description}</p>
      </div>
      <div className="media">
        <div className="images">
          <img src={data.images[0]} alt="Path Following 1" />
          <img src={data.images[1]} alt="Path Following 2" />
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="315"
            src={data.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PathFollowing;
