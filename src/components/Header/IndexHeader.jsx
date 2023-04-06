import React from 'react';
import './bg.css';
import Hero from './Hero';

import Nav from './Nav';
const IndexHeader = () => {
  return (
    <div className="w-full min-h-screen bg-lis">
      <Nav />
      <Hero />
    </div>
  );
};

export default IndexHeader;
