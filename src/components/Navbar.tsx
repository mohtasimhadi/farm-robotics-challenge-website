import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'lightgreen' }}>
      <Toolbar>
        <Typography variant="h6">My Application</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
