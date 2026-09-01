import React from 'react';
import Hero from '../components/HeroSection/Hero';

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[90vh] py-10">
      {/* Decorative gradient glow behind the hero section */}
      <div className="absolute -z-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <Hero />
    </div>
  );
};

export default Home;