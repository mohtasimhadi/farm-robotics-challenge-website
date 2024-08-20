import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import PathFollowing from './components/PathFollowing'; 
import data from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection data={data.main} />
      <PathFollowing data={data.pathFollowing} />
      {/* Add other sections here */}
      <Footer />
    </div>
  );
}

export default App;
