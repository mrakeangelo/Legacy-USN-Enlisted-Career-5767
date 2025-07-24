import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMapPin, FiAward, FiUsers, FiStar } = FiIcons;

const CareerTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineData = [
    {
      id: 1,
      year: '2001',
      rank: 'E-1',
      title: 'Boot Camp - RTC Great Lakes',
      location: 'Great Lakes, IL',
      description: 'Completed Naval Basic Training with honors. Division 001 Honor Graduate.',
      icon: FiUsers,
      type: 'milestone'
    },
    {
      id: 2,
      year: '2001',
      rank: 'E-2',
      title: 'Information Systems Technician A-School',
      location: 'Pensacola, FL',
      description: 'Graduated top 10% of class. Earned IT rate and first advancement.',
      icon: FiStar,
      type: 'education'
    },
    {
      id: 3,
      year: '2002',
      rank: 'E-3',
      title: 'USS Enterprise (CVN-65)',
      location: 'Norfolk, VA',
      description: 'First sea duty assignment. Deployed to Mediterranean and Persian Gulf.',
      icon: FiMapPin,
      type: 'assignment'
    },
    {
      id: 4,
      year: '2004',
      rank: 'E-4',
      title: 'Advanced to IT3',
      location: 'USS Enterprise',
      description: 'Promoted to Petty Officer Third Class. Led IT division night shift.',
      icon: FiAward,
      type: 'promotion'
    },
    {
      id: 5,
      year: '2006',
      rank: 'E-5',
      title: 'Advanced to IT2',
      location: 'USS Enterprise',
      description: 'Promoted to Petty Officer Second Class. Division Leading Petty Officer.',
      icon: FiAward,
      type: 'promotion'
    },
    {
      id: 6,
      year: '2008',
      rank: 'E-6',
      title: 'Advanced to IT1',
      location: 'NAVSTA Norfolk',
      description: 'Shore duty assignment. Advanced to Petty Officer First Class.',
      icon: FiAward,
      type: 'promotion'
    },
    {
      id: 7,
      year: '2012',
      rank: 'E-7',
      title: 'Advanced to ITC',
      location: 'USS Carl Vinson (CVN-70)',
      description: 'Promoted to Chief Petty Officer. IT Division Chief.',
      icon: FiAward,
      type: 'chief'
    },
    {
      id: 8,
      year: '2016',
      rank: 'E-8',
      title: 'Advanced to ITCS',
      location: 'SPAWAR San Diego',
      description: 'Promoted to Senior Chief Petty Officer. Department LCPO.',
      icon: FiAward,
      type: 'senior-chief'
    },
    {
      id: 9,
      year: '2020',
      rank: 'E-9',
      title: 'Advanced to ITCM',
      location: 'USS Gerald R. Ford (CVN-78)',
      description: 'Promoted to Master Chief Petty Officer. Command Master Chief.',
      icon: FiAward,
      type: 'master-chief'
    },
    {
      id: 10,
      year: '2023',
      rank: 'E-9',
      title: 'Retirement',
      location: 'Norfolk, VA',
      description: '22 years of honorable service. Retired with full honors.',
      icon: FiCalendar,
      type: 'retirement'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, parseInt(entry.target.dataset.id)]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'milestone': return 'bg-khaki';
      case 'education': return 'bg-blue-500';
      case 'assignment': return 'bg-steel-gray';
      case 'promotion': return 'bg-yellow-500';
      case 'chief': return 'bg-red-600';
      case 'senior-chief': return 'bg-purple-600';
      case 'master-chief': return 'bg-gold-500';
      case 'retirement': return 'bg-green-600';
      default: return 'bg-steel-gray';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-anchor-white dark:bg-fleet-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-fleet-blue dark:text-anchor-white mb-4">
            CAREER JOURNEY
          </h2>
          <p className="font-body text-lg text-steel-gray dark:text-silver-insignia max-w-2xl mx-auto">
            From recruit to Master Chief — a testament to dedication, leadership, and service to country.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-steel-gray/30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                data-id={item.id}
                className="timeline-item relative flex items-start space-x-8"
                initial={{ opacity: 0, x: -50 }}
                animate={visibleItems.has(item.id) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 ${getTypeColor(item.type)} rounded-full flex items-center justify-center shadow-lg`}>
                  <SafeIcon icon={item.icon} className="text-white text-xl" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-steel-gray/20 rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="font-heading text-2xl text-fleet-blue dark:text-khaki">
                        {item.year}
                      </span>
                      <span className="px-3 py-1 bg-khaki/20 text-fleet-blue dark:text-khaki rounded-full text-sm font-semibold">
                        {item.rank}
                      </span>
                    </div>
                    <div className="flex items-center text-steel-gray dark:text-silver-insignia text-sm mt-2 sm:mt-0">
                      <SafeIcon icon={FiMapPin} className="mr-1" />
                      {item.location}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl text-fleet-blue dark:text-anchor-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-steel-gray dark:text-silver-insignia leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;