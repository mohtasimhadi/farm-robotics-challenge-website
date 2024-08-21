import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import PathFollowing from './components/PathFollowing';
import TeamSection from './components/TeamSection';
// Import other components

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="main-section">
          <MainSection />
        </section>
        <section id="path-following-section">
          <PathFollowing />
        </section>
        <section id="the-team-section">
          <TeamSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
