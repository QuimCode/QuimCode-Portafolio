// import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroIMG from './components/HeroIMG';

function App() {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <HeroIMG />
      <Hero />
    </main>
  );
}

export default App;