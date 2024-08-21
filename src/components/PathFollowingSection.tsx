import React from 'react';
import { Box, Typography } from '@mui/material';

const PathFollowingSection: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Path Following
      </Typography>
      <Box component="iframe" width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="YouTube video player" frameBorder="0" allowFullScreen></Box>
      <Box>
        <img src="image1.jpg" alt="Image 1" style={{ width: '48%', marginRight: '2%' }} />
        <img src="image2.jpg" alt="Image 2" style={{ width: '48%' }} />
      </Box>
      <Typography variant="h6" gutterBottom>
        Heading 3
      </Typography>
    </Box>
  );
};

export default PathFollowingSection;
