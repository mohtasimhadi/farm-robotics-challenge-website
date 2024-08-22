import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box textAlign="center" padding={2} style={{ backgroundColor: 'white' }}>
      <Typography variant="body2">© 2024 Smart Systems Lab, Auburn University</Typography>
    </Box>
  );
};

export default Footer;
