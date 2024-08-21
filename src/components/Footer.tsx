import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box textAlign="center" padding={2} style={{ backgroundColor: 'lightgray' }}>
      <Typography variant="body2">© 2024 My Application</Typography>
    </Box>
  );
};

export default Footer;
