import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CareerTimeline from './components/CareerTimeline';
import RateStory from './components/RateStory';
import PhotoGallery from './components/PhotoGallery';
import WarfareAwards from './components/WarfareAwards';
import ShipmatesWall from './components/ShipmatesWall';
import LegacyMetrics from './components/LegacyMetrics';
import TimeCapsules from './components/TimeCapsules';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-fleet-blue flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-anchor-white"
        >
          <div className="w-16 h-16 border-4 border-khaki border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="font-heading text-xl tracking-wider">Loading Legacy...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-anchor-white dark:bg-fleet-blue transition-colors duration-500`}>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={
            <main className="relative">
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <HeroSection />
              <CareerTimeline />
              <RateStory />
              <PhotoGallery />
              <WarfareAwards />
              <ShipmatesWall />
              <LegacyMetrics />
              <TimeCapsules />
              <Guestbook />
              <Footer />
            </main>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;