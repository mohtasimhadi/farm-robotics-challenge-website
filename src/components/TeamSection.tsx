import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const TeamSection: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Meet the Team
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <Box width="25%" p={2}>
          <img src="person1.jpg" alt="Person 1" style={{ width: '100%' }} />
          <Typography variant="body1">Name 1</Typography>
          <Typography variant="body2">email1@example.com</Typography>
          <Link href="http://website1.com" target="_blank">Website</Link>
          <Link href="http://linkedin.com/in/person1" target="_blank">LinkedIn</Link>
        </Box>
        {/* Repeat for other team members */}
      </Box>
    </Box>
  );
};

export default TeamSection;
