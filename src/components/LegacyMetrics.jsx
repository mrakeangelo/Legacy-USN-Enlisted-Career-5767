import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiGlobe, FiUsers, FiTrendingUp, FiAward, FiTarget } = FiIcons;

const LegacyMetrics = () => {
  const [counters, setCounters] = useState({
    years: 0,
    deployments: 0,
    sailors: 0,
    evolutions: 0
  });

  const finalValues = {
    years: 22,
    deployments: 8,
    sailors: 147,
    evolutions: 23
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(intervals[Object.keys(finalValues).indexOf(key)]);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const metrics = [
    {
      id: 1,
      icon: FiCalendar,
      value: counters.years,
      label: 'Years of Service',
      description: 'From seaman recruit to master chief',
      color: 'text-blue-500'
    },
    {
      id: 2,
      icon: FiGlobe,
      value: counters.deployments,
      label: 'Deployments',
      description: 'Across the seven seas',
      color: 'text-green-500'
    },
    {
      id: 3,
      icon: FiUsers,
      value: counters.sailors,
      label: 'Sailors Mentored',
      description: 'Lives touched and careers shaped',
      color: 'text-purple-500'
    },
    {
      id: 4,
      icon: FiTrendingUp,
      value: counters.evolutions,
      label: 'Major Evolutions',
      description: 'Critical missions led',
      color: 'text-red-500'
    }
  ];

  const achievements = [
    {
      icon: FiAward,
      title: 'Leadership Excellence',
      description: 'Sailor of the Year (2018)',
      year: '2018'
    },
    {
      icon: FiTarget,
      title: 'Mission Critical',
      description: 'Led 15 successful system migrations',
      year: '2015-2020'
    },
    {
      icon: FiUsers,
      title: 'Mentorship Legacy',
      description: '23 sailors advanced under his guidance',
      year: '2012-2023'
    }
  ];

  return (
    <section id="legacy" className="py-20 bg-gradient-to-br from-fleet-blue via-steel-gray to-fleet-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-anchor-white mb-4">
            LEGACY METRICS
          </h2>
          <p className="font-body text-lg text-khaki max-w-2xl mx-auto">
            Numbers that tell the story of a life dedicated to service, leadership, and excellence.
          </p>
        </motion.div>

        {/* Main Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-anchor-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-silver-insignia/20"
            >
              <div className="relative mb-6">
                <div className="bg-khaki/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={metric.icon} className={`text-2xl ${metric.color}`} />
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="font-heading text-5xl text-anchor-white mb-2"
                >
                  {metric.value}
                </motion.div>
                
                <h3 className="font-heading text-xl text-khaki mb-2">
                  {metric.label}
                </h3>
                
                <p className="font-body text-sm text-silver-insignia">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-anchor-white/5 backdrop-blur-sm rounded-2xl p-8 border border-silver-insignia/20"
        >
          <h3 className="font-heading text-2xl text-khaki text-center mb-8">
            KEY ACHIEVEMENTS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-khaki rounded-full p-3 flex-shrink-0">
                  <SafeIcon icon={achievement.icon} className="text-fleet-blue text-xl" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading text-lg text-anchor-white">
                      {achievement.title}
                    </h4>
                    <span className="text-khaki text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-silver-insignia text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-khaki/20 to-khaki/10 rounded-lg p-8 border border-khaki/30">
            <blockquote className="font-body text-xl text-anchor-white italic leading-relaxed max-w-3xl mx-auto">
              "A legacy isn't measured in years served or ranks earned — it's measured in the lives you touch, 
              the sailors you mentor, and the standards you set for those who follow."
            </blockquote>
            <cite className="font-heading text-khaki text-lg mt-4 block">
              — Master Chief Petty Officer Jayson T. Ruiz
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyMetrics;