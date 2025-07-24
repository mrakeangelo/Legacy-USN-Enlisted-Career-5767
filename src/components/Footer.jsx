import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiChevronLeft, FiChevronRight } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "All gave some. He gave it every single day.",
      author: "A Fellow Sailor"
    },
    {
      text: "A chief never really retires — he just teaches more quietly.",
      author: "Navy Tradition"
    },
    {
      text: "The sea doesn't care about your rank. It only cares about your character.",
      author: "Master Chief Ruiz"
    },
    {
      text: "Leadership is not about being served, but about serving others.",
      author: "Naval Leadership"
    },
    {
      text: "Honor, Courage, Commitment — not just words, but a way of life.",
      author: "Navy Core Values"
    }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <footer className="bg-fleet-blue text-anchor-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-anchor-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Anchor Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-6xl text-khaki"
              >
                <SafeIcon icon={FiAnchor} />
              </motion.div>
              <div>
                <h3 className="font-heading text-2xl text-khaki">
                  NAVAL LEGACY
                </h3>
                <p className="text-silver-insignia text-sm">
                  Honoring Service
                </p>
              </div>
            </div>
            <p className="text-silver-insignia leading-relaxed">
              A digital memorial preserving the legacy of those who served 
              with honor, courage, and commitment.
            </p>
          </motion.div>

          {/* Center Column - Quote Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="font-heading text-xl text-khaki mb-6">
              WORDS TO REMEMBER
            </h3>
            
            <div className="relative bg-anchor-white/5 backdrop-blur-sm rounded-lg p-6 border border-silver-insignia/20">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={prevQuote}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  <SafeIcon icon={FiChevronLeft} className="text-khaki" />
                </button>
                
                <div className="flex space-x-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuote(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentQuote ? 'bg-khaki' : 'bg-silver-insignia/30'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextQuote}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  <SafeIcon icon={FiChevronRight} className="text-khaki" />
                </button>
              </div>
              
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <blockquote className="text-anchor-white italic mb-3 leading-relaxed">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="text-khaki text-sm font-semibold">
                  — {quotes[currentQuote].author}
                </cite>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact/Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-right"
          >
            <h3 className="font-heading text-xl text-khaki mb-6">
              LEGACY DETAILS
            </h3>
            
            <div className="space-y-3 text-silver-insignia">
              <div>
                <span className="font-semibold">Service:</span> 2001 - 2023
              </div>
              <div>
                <span className="font-semibold">Final Rank:</span> Master Chief Petty Officer
              </div>
              <div>
                <span className="font-semibold">Rating:</span> Information Systems Technician
              </div>
              <div>
                <span className="font-semibold">Years:</span> 22 Years of Honor
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-silver-insignia/20">
              <p className="text-sm text-silver-insignia">
                For questions about this memorial, please contact the family 
                through the admin portal.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-silver-insignia/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-silver-insignia text-sm">
                © 2024 Naval Legacy Memorial. Built with honor and respect.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-silver-insignia text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <SafeIcon icon={FiHeart} className="text-red-400" />
              </motion.div>
              <span>for those who served</span>
            </div>
          </div>
        </div>

        {/* White Label Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 pt-8 border-t border-silver-insignia/20"
        >
          <p className="text-silver-insignia/60 text-xs">
            This memorial template can be customized for any service member. 
            <br />
            Contact us to create a lasting digital legacy.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;