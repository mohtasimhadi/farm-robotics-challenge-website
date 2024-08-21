import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import PathFollowingSection from './components/PathFollowingSection';
import PlantCountingSection from './components/PlantCountingSection';
import QualityAssessmentSection from './components/QualityAssessmentSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <PathFollowingSection />
      <PlantCountingSection />
      <QualityAssessmentSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default App;
