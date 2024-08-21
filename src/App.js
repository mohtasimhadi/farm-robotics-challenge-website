import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import PathFollowing from './components/PathFollowing';
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
        {/* Other sections */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
