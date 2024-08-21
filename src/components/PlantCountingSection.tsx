import React from 'react';
import { Box, Typography } from '@mui/material';

const PlantCountingSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Plant Counting
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: '20px' }}
      >
        A multi-camera system is deployed to capture panoramic images of the nursery beds using a novel image stitching technique. Plant counts are then determined by tallying the masks generated through state-of-the-art instance segmentation algorithms. 
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: '45%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="PathPlanningPic.jpeg"
            alt="Path Planning"
            style={{ width: '100%', height: '380px' }}
          />
          <Typography variant="caption" display="block" sx={{ marginTop: '5px' }}>
            Path Planning
          </Typography>
        </Box>
        <Box sx={{ width: '45%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="ZED_PathPlanning.png"
            alt="ZED Path Planning"
            style={{ width: '100%', height: '380px' }}
          />
          <Typography variant="caption" display="block" sx={{ marginTop: '5px' }}>
            ZED Path Planning
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlantCountingSection;
