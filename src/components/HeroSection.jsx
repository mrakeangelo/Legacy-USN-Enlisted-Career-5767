import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiAward } = FiIcons;

const HeroSection = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-fleet-blue via-steel-gray to-fleet-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-chevron-pattern opacity-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-fleet-blue/90 to-fleet-blue/40">
        <img
          src="https://images.unsplash.com/photo-1544717440-6d6c2f35d4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Navy Portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Rank Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-khaki/90 rounded-full"
          >
            <SafeIcon icon={FiAward} className="text-fleet-blue mr-2" />
            <span className="font-heading text-fleet-blue text-sm tracking-wider">
              MASTER CHIEF PETTY OFFICER
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-anchor-white tracking-wider leading-tight"
          >
            JAYSON T. RUIZ
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-xl sm:text-2xl text-khaki tracking-wide"
          >
            U.S. Navy Enlisted Legacy
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-body text-lg sm:text-xl text-anchor-white/90 italic max-w-2xl mx-auto leading-relaxed"
          >
            "From seaman to chief, he led where it mattered — on the deck."
          </motion.blockquote>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTimeline}
            className="inline-flex items-center px-8 py-4 bg-khaki hover:bg-khaki/90 text-fleet-blue font-heading text-lg tracking-wider rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ENTER HIS CAREER LEGACY
            <SafeIcon icon={FiChevronDown} className="ml-2 animate-bounce" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-khaki rounded-full flex justify-center">
          <div className="w-1 h-3 bg-khaki rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;