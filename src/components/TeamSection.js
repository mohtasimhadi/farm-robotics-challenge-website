import React from 'react';
import './TeamSection.css';
import data from '../data.json';

const TeamSection = () => {
  const { team } = data;

  return (
    <section id="team-section" className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={`${member.name}`} className="team-photo" />
            <h3>{member.name}</h3>
            <p className="email">{member.email}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
