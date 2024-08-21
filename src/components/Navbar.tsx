import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: 'green' }}>
      <Toolbar>
        <img 
          src="/logo192.png" 
          alt="Logo" 
          style={{ height: 40, marginRight: 'auto' }} 
        />
        <Button color="inherit" href="#home">Home</Button>
        <Button color="inherit" href="#path-following">Path Following</Button>
        <Button color="inherit" href="#plant-counting">Plant Counting</Button>
        <Button color="inherit" href="#quality-assessment">Quality Assessment</Button>
        <Button color="inherit" href="#team">Team</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
