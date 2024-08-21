import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Link, Stack } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const teamMembers = [
  {
    name: 'Hamid Habib Syed',
    photo: '/images/Hamid.jpeg',
    website: 'hamidsyed298.github.io',
    email: 'hhs0015@auburn.edu',
    linkedin: 'linkedin.com/in/hamid-habib-syed'
  },
  {
    name: 'Faraz Ahmed',
    photo: '/images/Faraz.jpeg',
    website: '',
    email: 'fza0070@auburn.edu',
    linkedin: 'linkedin.com/in/mfaraz-ahmad'
  },
  {
    name: 'Mesbahul Maruf',
    photo: '/images/Maruf.jpeg',
    website: '',
    email: 'mzm0411@auburn.edu',
    linkedin: 'linkedin.com/in/mesbah-maruf'
  },
  {
    name: 'Mohtasim Hadi Rafi',
    photo: '/images/Mohtasim.png',
    website: 'moho.blog',
    email: 'mzr0167@auburn.edu',
    linkedin: 'linkedin.com/in/mohtasim-hadi-rafi'
  }
];

function TheTeam() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={member.photo}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {member.name}
                </Typography>

                {/* Website Link with Icon and Text */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <LanguageIcon />
                  <Link href={member.website} target="_blank" rel="noopener noreferrer">
                    {member.website.replace('https://', '')}
                  </Link>
                </Stack>

                {/* LinkedIn Link with Icon and Text */}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                  <LinkedInIcon />
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    {member.linkedin.replace('https://', '')}
                  </Link>
                </Stack>

                {/* Email Link with Icon and Text */}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                  <EmailIcon />
                  <Link href={`mailto:${member.email}`}>
                    {member.email}
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TheTeam;
