import React from 'react';

const MainSection = ({ data }) => {
  return (
    <section id="main" className="main-section">
      <img src={data.coverImage} alt="Cover" className="cover-image" />
      <h1 className="title">{data.title}</h1>
      <div className="content">
        <img src={data.content.image} alt="Main Content" />
        <p>{data.content.description}</p>
      </div>
    </section>
  );
};

export default MainSection;
