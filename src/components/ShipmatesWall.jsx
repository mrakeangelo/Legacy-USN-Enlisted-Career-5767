import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiQuote, FiHeart, FiUsers, FiStar } = FiIcons;

const ShipmatesWall = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'HM2 Sarah Mitchell',
      role: 'Junior Sailor',
      relationship: 'Mentee',
      year: '2015',
      quote: 'Chief Ruiz taught me that leadership isn\'t about rank—it\'s about caring for your people. He always had time to listen and guide us through the tough times.',
      fullTestimonial: 'I was a young HM2 when I first met Chief Ruiz. I was struggling with some personal issues and my work was suffering. Instead of writing me up, he sat me down and talked to me like a human being. He helped me get the resources I needed and checked on me regularly. That\'s the kind of leader he was—he saw potential in people when they couldn\'t see it in themselves.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'IT1 Marcus Johnson',
      role: 'Peer',
      relationship: 'Shipmate',
      year: '2008',
      quote: 'Ruiz was the guy you wanted on your watch. Solid, dependable, and always ready to help solve the impossible problems. A true professional.',
      fullTestimonial: 'We served together on the Enterprise for three years. During our Mediterranean deployment, we had a critical satellite communication failure. While everyone else was panicking, Ruiz calmly worked through the problem step by step. He didn\'t sleep for 18 hours until we had comms back up. That\'s who he was—mission first, always.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'LTJG Amanda Chen',
      role: 'Division Officer',
      relationship: 'Officer',
      year: '2018',
      quote: 'Senior Chief Ruiz was my right hand as a new Division Officer. His experience and wisdom made me a better leader. The sailors respected him, and so did I.',
      fullTestimonial: 'As a brand new Division Officer, I was terrified of making mistakes. Senior Chief Ruiz became my mentor and guide. He taught me how to lead sailors, not just manage them. He showed me that respect is earned through actions, not demanded through rank. He made me the officer I became.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'ITCM Robert Hayes',
      role: 'Chief\'s Mess',
      relationship: 'Fellow Chief',
      year: '2020',
      quote: 'Master Chief Ruiz embodied everything the Chief\'s Mess stands for. He was a mentor, a leader, and a friend. The Navy is better because of sailors like him.',
      fullTestimonial: 'I had the privilege of serving alongside Master Chief Ruiz in the Chief\'s Mess. He was the kind of chief who led by example every single day. He never asked his sailors to do something he wouldn\'t do himself. He was the first one in the office and the last one to leave. He truly cared about every sailor under his charge.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 5,
      name: 'IT3 David Rodriguez',
      role: 'Junior Sailor',
      relationship: 'Mentee',
      year: '2019',
      quote: 'Master Chief believed in me when I didn\'t believe in myself. He helped me advance and become the sailor I am today. I owe my career to his guidance.',
      fullTestimonial: 'I was about to get out of the Navy. I was frustrated and felt like I wasn\'t cut out for military life. Master Chief Ruiz saw something in me that I didn\'t see. He spent extra time with me, helped me with my studies, and pushed me to be better. Because of him, I made IT2 and decided to stay in. He changed my life.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 6,
      name: 'IT2 Jennifer Thompson',
      role: 'Junior Sailor',
      relationship: 'Mentee',
      year: '2021',
      quote: 'Master Chief Ruiz showed me that being a leader means serving others. He always put his sailors first, and that\'s the kind of leader I want to be.',
      fullTestimonial: 'Master Chief Ruiz was my Command Master Chief during my last tour. He had an open door policy and actually meant it. When I was dealing with family issues, he helped me get emergency leave and made sure I knew the Navy cared about me as a person, not just a sailor. That meant everything to me.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Junior Sailor': return FiUser;
      case 'Peer': return FiUsers;
      case 'Division Officer': return FiStar;
      case 'Chief\'s Mess': return FiHeart;
      default: return FiUser;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Junior Sailor': return 'bg-blue-500';
      case 'Peer': return 'bg-green-500';
      case 'Division Officer': return 'bg-purple-500';
      case 'Chief\'s Mess': return 'bg-red-500';
      default: return 'bg-steel-gray';
    }
  };

  return (
    <section id="shipmates" className="py-20 bg-anchor-white dark:bg-fleet-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-fleet-blue dark:text-anchor-white mb-4">
            SHIPMATES' WALL
          </h2>
          <p className="font-body text-lg text-steel-gray dark:text-silver-insignia max-w-2xl mx-auto">
            Voices from the deckplates — testimonials from those who served alongside a true leader.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-steel-gray/20 rounded-lg p-6 shadow-lg border border-silver-insignia/20 cursor-pointer"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getRoleColor(testimonial.role)} rounded-full flex items-center justify-center`}>
                    <SafeIcon icon={getRoleIcon(testimonial.role)} className="text-white text-xs" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-heading text-lg text-fleet-blue dark:text-anchor-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-steel-gray dark:text-silver-insignia text-sm">
                    {testimonial.role} • {testimonial.year}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <SafeIcon icon={FiQuote} className="absolute -top-2 -left-2 text-khaki text-2xl opacity-50" />
                <p className="font-body text-steel-gray dark:text-silver-insignia leading-relaxed pl-4 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Relationship Badge */}
              <div className="mt-4 pt-4 border-t border-silver-insignia/20">
                <span className="inline-block bg-khaki/20 text-fleet-blue dark:text-khaki px-3 py-1 rounded-full text-xs font-semibold">
                  {testimonial.relationship}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Modal */}
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-steel-gray rounded-lg p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading text-2xl text-fleet-blue dark:text-anchor-white">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="text-steel-gray dark:text-silver-insignia">
                    {selectedTestimonial.role} • {selectedTestimonial.year}
                  </p>
                  <span className="inline-block bg-khaki/20 text-fleet-blue dark:text-khaki px-3 py-1 rounded-full text-xs font-semibold mt-2">
                    {selectedTestimonial.relationship}
                  </span>
                </div>
              </div>

              {/* Full Testimonial */}
              <div className="relative">
                <SafeIcon icon={FiQuote} className="absolute -top-4 -left-4 text-khaki text-4xl opacity-30" />
                <p className="font-body text-steel-gray dark:text-silver-insignia leading-relaxed text-lg pl-8">
                  {selectedTestimonial.fullTestimonial}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="mt-6 w-full bg-khaki hover:bg-khaki/90 text-fleet-blue font-heading py-3 rounded-lg transition-colors duration-200"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-fleet-blue to-steel-gray rounded-lg p-8 text-white">
            <h3 className="font-heading text-2xl mb-4">
              SHARE YOUR MEMORY
            </h3>
            <p className="font-body text-silver-insignia mb-6">
              Did you serve with Master Chief Ruiz? Share your story and join the legacy wall.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-khaki hover:bg-khaki/90 text-fleet-blue font-heading px-8 py-3 rounded-full transition-all duration-300"
            >
              SUBMIT TESTIMONIAL
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShipmatesWall;