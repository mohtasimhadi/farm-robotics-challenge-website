import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Home from './sections/Home';
import PathFollowing from './sections/PathFollowing';
import PlantCounting from './sections/PlantCounting';
import QualityAssessment from './sections/QualityAssessment';
import TheTeam from './sections/TheTeam';

function App() {
  return (
    <div className="App">
      <AppBar position="fixed" sx={{ backgroundColor: '#4CAF50' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link href="#home" color="inherit" underline="hover" variant="h6">
              Home
            </Link>
            <Link href="#pathFollowing" color="inherit" underline="hover" variant="h6">
              Path Following
            </Link>
            <Link href="#plantCounting" color="inherit" underline="hover" variant="h6">
              Plant Counting
            </Link>
            <Link href="#qualityAssessment" color="inherit" underline="hover" variant="h6">
              Quality Assessment
            </Link>
            <Link href="#theTeam" color="inherit" underline="hover" variant="h6">
              The Team
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ paddingTop: '80px' }}>
        <Box id="home" py={5}>
          <Home />
        </Box>
        <Box id="pathFollowing" py={5} bgcolor="#eaf2e0">
          <PathFollowing />
        </Box>
        <Box id="plantCounting" py={5}>
          <PlantCounting />
        </Box>
        <Box id="qualityAssessment" py={5} bgcolor="#eaf2e0">
          <QualityAssessment />
        </Box>
        <Box id="theTeam" py={5}>
          <TheTeam />
        </Box>
      </Container>

      <Box component="footer" sx={{ backgroundColor: '#4CAF50', color: 'white', textAlign: 'center', py: 2 }}>
        <Typography variant="body2">&copy; 2024 Smart Systems Lab, Auburn University. All rights reserved.</Typography>
      </Box>
    </div>
  );
}

export default App;
