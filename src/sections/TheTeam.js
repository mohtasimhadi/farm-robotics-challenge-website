import React from 'react';
import './TheTeam.css'; // Import the CSS file

const teamMembers = [
  {
    name: 'Hamid Habib Syed',
    photo: '/images/Hamid.jpeg',
    website: 'hamidsyed298.github.io',
    email: 'hhs0015@auburn.edu'
  },
  {
    name: 'Faraz Ahmed',
    photo: '/images/Faraz.jpeg',
    website: '',
    email: 'bob@example.com'
  },
  {
    name: 'Mesbahul Maruf',
    photo: '/images/Maruf.jpeg',
    website: '',
    email: 'charlie@example.com'
  },
  {
    name: 'Mohtasim Hadi Rafi',
    photo: '/images/Mohtasim.png',
    website: 'moho.blog',
    email: 'mzr0167@auburn.edu'
  }
];

function TheTeam() {
  return (
    <div className="team-container">
      <h1>Meet the Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2>{member.name}</h2>
            <p>
              <a href={member.website} target="_blank" rel="noopener noreferrer">
                {member.website}
              </a>
            </p>
            <p>
              <a href={`mailto:${member.email}`}>
                {member.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheTeam;