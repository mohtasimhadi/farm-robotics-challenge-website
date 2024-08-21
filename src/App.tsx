import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import PathFollowingSection from './components/PathFollowingSection';
import PlantCountingSection from './components/PlantCountingSection';
import QualityAssessmentSection from './components/QualityAssessmentSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HomeSection />
      <PathFollowingSection />
      <PlantCountingSection />
      <QualityAssessmentSection />
      <TeamSection />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
