import React from 'react';
import { Box, Typography } from '@mui/material';

const QualityAssessmentSection: React.FC = () => {
  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <img src="image1.jpg" alt="Quality Assessment 1" style={{ width: '23%', marginBottom: '1%' }} />
        <img src="image2.jpg" alt="Quality Assessment 2" style={{ width: '23%', marginBottom: '1%' }} />
        <img src="image3.jpg" alt="Quality Assessment 3" style={{ width: '23%', marginBottom: '1%' }} />
        <img src="image4.jpg" alt="Quality Assessment 4" style={{ width: '23%', marginBottom: '1%' }} />
      </Box>
      <Typography variant="h6" gutterBottom>
        Heading 3
      </Typography>
      <img src="image5.jpg" alt="Quality Assessment Extra" style={{ width: '100%' }} />
    </Box>
  );
};

export default QualityAssessmentSection;
