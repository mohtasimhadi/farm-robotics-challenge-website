import React from 'react';

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
    website: 'linkedin.com/in/mfaraz-ahmad',
    email: 'fza0070@auburn.edu'
  },
  {
    name: 'Mesbahul Maruf',
    photo: '/images/Maruf.jpeg',
    website: 'linkedin.com/in/mesbah-maruf',
    email: 'mzm0411@auburn.edu'
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