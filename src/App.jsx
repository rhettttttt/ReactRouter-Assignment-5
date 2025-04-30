import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Feature />
      </main>
      <Footer />
    </div>
  );
}

export default App;
