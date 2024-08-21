import React from 'react';
import { Box } from '@mui/material';

const PlantCountingSection: React.FC = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <img src="long-image1.jpg" alt="Plant Counting 1" style={{ width: '48%' }} />
        <img src="long-image2.jpg" alt="Plant Counting 2" style={{ width: '48%' }} />
      </Box>
    </Box>
  );
};

export default PlantCountingSection;
