import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiStar, FiTarget, FiInfo } = FiIcons;

const WarfareAwards = () => {
  const [hoveredAward, setHoveredAward] = useState(null);

  const warfareDevices = [
    {
      id: 1,
      name: 'Enlisted Surface Warfare Specialist',
      abbreviation: 'ESWS',
      description: 'Comprehensive knowledge of surface warfare operations and ship systems',
      icon: FiShield,
      earned: '2005'
    },
    {
      id: 2,
      name: 'Information Dominance Warfare Specialist',
      abbreviation: 'IDWS',
      description: 'Expertise in information systems and cyber warfare operations',
      icon: FiTarget,
      earned: '2010'
    }
  ];

  const ranks = [
    { rank: 'E-1', name: 'Seaman Recruit', year: '2001' },
    { rank: 'E-2', name: 'Seaman Apprentice', year: '2001' },
    { rank: 'E-3', name: 'Seaman', year: '2002' },
    { rank: 'E-4', name: 'Petty Officer Third Class', year: '2004' },
    { rank: 'E-5', name: 'Petty Officer Second Class', year: '2006' },
    { rank: 'E-6', name: 'Petty Officer First Class', year: '2008' },
    { rank: 'E-7', name: 'Chief Petty Officer', year: '2012' },
    { rank: 'E-8', name: 'Senior Chief Petty Officer', year: '2016' },
    { rank: 'E-9', name: 'Master Chief Petty Officer', year: '2020' }
  ];

  const awards = [
    {
      id: 1,
      name: 'Navy and Marine Corps Commendation Medal',
      abbreviation: 'NAVCOM',
      description: 'For meritorious service during Operation Enduring Freedom',
      count: 3
    },
    {
      id: 2,
      name: 'Navy and Marine Corps Achievement Medal',
      abbreviation: 'NAM',
      description: 'For outstanding performance of duties',
      count: 5
    },
    {
      id: 3,
      name: 'Good Conduct Medal',
      abbreviation: 'GCM',
      description: 'For exemplary conduct and efficiency',
      count: 7
    },
    {
      id: 4,
      name: 'Navy Unit Commendation',
      abbreviation: 'NUC',
      description: 'For outstanding performance as a unit',
      count: 2
    },
    {
      id: 5,
      name: 'National Defense Service Medal',
      abbreviation: 'NDSM',
      description: 'For honorable service during national emergency',
      count: 2
    },
    {
      id: 6,
      name: 'Global War on Terrorism Service Medal',
      abbreviation: 'GWOT-SM',
      description: 'For service in support of Operation Enduring Freedom',
      count: 1
    }
  ];

  const specialQualifications = [
    {
      id: 1,
      name: 'Information Systems Technician',
      code: 'IT',
      description: 'Primary rating specializing in communications and computer systems'
    },
    {
      id: 2,
      name: 'Network Systems Administrator',
      code: 'NEC 2780',
      description: 'Advanced qualification in network administration and security'
    },
    {
      id: 3,
      name: 'Cyber Operations Specialist',
      code: 'NEC 2790',
      description: 'Specialized training in cybersecurity and information warfare'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-steel-gray to-fleet-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-anchor-white mb-4">
            WARFARE DEVICES & AWARDS
          </h2>
          <p className="font-body text-lg text-khaki max-w-2xl mx-auto">
            Recognition earned through dedication, expertise, and unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Warfare Devices */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="font-heading text-2xl text-khaki text-center mb-8">
              WARFARE SPECIALIST DEVICES
            </h3>
            
            <div className="space-y-6">
              {warfareDevices.map((device) => (
                <motion.div
                  key={device.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-anchor-white/10 backdrop-blur-sm rounded-lg p-6 border border-silver-insignia/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-khaki rounded-full p-3 flex-shrink-0">
                      <SafeIcon icon={device.icon} className="text-fleet-blue text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-heading text-lg text-anchor-white">
                          {device.name}
                        </h4>
                        <span className="text-khaki text-sm font-semibold">
                          {device.earned}
                        </span>
                      </div>
                      <p className="text-silver-insignia text-sm leading-relaxed">
                        {device.description}
                      </p>
                      <div className="mt-3 inline-block bg-khaki/20 px-3 py-1 rounded-full">
                        <span className="text-khaki text-xs font-semibold">
                          {device.abbreviation}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards & Medals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="font-heading text-2xl text-khaki text-center mb-8">
              MEDALS & RIBBONS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award) => (
                <motion.div
                  key={award.id}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredAward(award.id)}
                  onHoverEnd={() => setHoveredAward(null)}
                  className="relative bg-anchor-white/10 backdrop-blur-sm rounded-lg p-4 border border-silver-insignia/20 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <SafeIcon icon={FiAward} className="text-khaki text-lg" />
                    {award.count > 1 && (
                      <span className="bg-khaki text-fleet-blue text-xs px-2 py-1 rounded-full font-semibold">
                        {award.count}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-heading text-sm text-anchor-white mb-1">
                    {award.abbreviation}
                  </h4>
                  
                  {hoveredAward === award.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-fleet-blue/95 rounded-lg p-3 z-10"
                    >
                      <h5 className="font-heading text-sm text-khaki mb-2">
                        {award.name}
                      </h5>
                      <p className="text-silver-insignia text-xs leading-relaxed">
                        {award.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Rank Progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="font-heading text-2xl text-khaki text-center mb-8">
            RANK PROGRESSION
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-khaki/30"></div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {ranks.map((rank, index) => (
                <motion.div
                  key={rank.rank}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-heading text-sm transition-all duration-300 ${
                    index >= 6 
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-fleet-blue animate-chevron-glow' 
                      : 'bg-khaki/20 text-khaki hover:bg-khaki hover:text-fleet-blue'
                  }`}>
                    {rank.rank}
                  </div>
                  
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-silver-insignia text-xs whitespace-nowrap">
                      {rank.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Special Qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="font-heading text-2xl text-khaki text-center mb-8">
            SPECIAL QUALIFICATIONS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialQualifications.map((qual) => (
              <motion.div
                key={qual.id}
                whileHover={{ scale: 1.05 }}
                className="bg-anchor-white/10 backdrop-blur-sm rounded-lg p-6 border border-silver-insignia/20 text-center"
              >
                <div className="bg-khaki rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiStar} className="text-fleet-blue text-xl" />
                </div>
                <h4 className="font-heading text-lg text-anchor-white mb-2">
                  {qual.code}
                </h4>
                <h5 className="font-body text-sm text-khaki mb-3">
                  {qual.name}
                </h5>
                <p className="text-silver-insignia text-xs leading-relaxed">
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WarfareAwards;