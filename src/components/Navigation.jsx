import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiSun, FiMoon, FiAnchor } = FiIcons;

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Career Journey', href: '#timeline' },
    { name: 'Rate Story', href: '#story' },
    { name: 'Photos', href: '#photos' },
    { name: 'Awards', href: '#awards' },
    { name: 'Shipmates', href: '#shipmates' },
    { name: 'Legacy', href: '#legacy' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-fleet-blue/95 backdrop-blur-md border-b border-silver-insignia/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <SafeIcon icon={FiAnchor} className="text-khaki text-xl" />
            <span className="font-heading text-lg text-anchor-white tracking-wider">
              LEGACY
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-anchor-white hover:text-khaki transition-colors duration-200 font-body text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-steel-gray/20 transition-colors duration-200"
            >
              <SafeIcon
                icon={darkMode ? FiSun : FiMoon}
                className="text-khaki text-lg"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-steel-gray/20 transition-colors duration-200"
            >
              <SafeIcon
                icon={darkMode ? FiSun : FiMoon}
                className="text-khaki text-lg"
              />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-steel-gray/20 transition-colors duration-200"
            >
              <SafeIcon
                icon={isOpen ? FiX : FiMenu}
                className="text-anchor-white text-xl"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-fleet-blue/95 backdrop-blur-md border-t border-silver-insignia/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-anchor-white hover:text-khaki hover:bg-steel-gray/10 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;