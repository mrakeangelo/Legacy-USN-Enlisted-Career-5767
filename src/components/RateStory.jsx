import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiPause, FiHeart, FiCompass } = FiIcons;

const RateStory = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Audio implementation would go here
  };

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-fleet-blue to-steel-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-anchor-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-anchor-white mb-4">
            RATE PRIDE & STORY
          </h2>
          <p className="font-body text-lg text-khaki max-w-2xl mx-auto">
            The heart of service — why he joined, what it meant to wear the uniform, and the bonds that last a lifetime.
          </p>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-anchor-white/10 backdrop-blur-sm rounded-2xl p-8 border border-silver-insignia/20"
        >
          {/* Audio Player */}
          <div className="flex items-center justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAudio}
              className="flex items-center space-x-3 px-6 py-3 bg-khaki hover:bg-khaki/90 text-fleet-blue rounded-full transition-all duration-300"
            >
              <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="text-xl" />
              <span className="font-heading tracking-wider">
                {isPlaying ? 'PAUSE STORY' : 'PLAY STORY'}
              </span>
            </motion.button>
          </div>

          {/* Written Story */}
          <div className="prose prose-lg max-w-none text-anchor-white">
            <div className="flex items-center space-x-2 mb-6">
              <SafeIcon icon={FiCompass} className="text-khaki text-xl" />
              <h3 className="font-heading text-2xl text-khaki m-0">Why I Joined</h3>
            </div>
            
            <p className="font-body leading-relaxed mb-6">
              Growing up in a small town in Texas, I knew I wanted something bigger than myself. 
              My grandfather served in World War II, and his stories of brotherhood and service 
              always stayed with me. When I turned 18, I knew the Navy was calling.
            </p>

            <p className="font-body leading-relaxed mb-6">
              I'll never forget stepping off that bus at Great Lakes. The smell of Lake Michigan, 
              the sound of boots on concrete, the weight of that first uniform. That's when I knew 
              I was home. This wasn't just a job — it was a calling.
            </p>

            <div className="flex items-center space-x-2 mb-6">
              <SafeIcon icon={FiHeart} className="text-khaki text-xl" />
              <h3 className="font-heading text-2xl text-khaki m-0">The IT Rate</h3>
            </div>

            <p className="font-body leading-relaxed mb-6">
              Information Systems Technician — IT. We were the backbone of naval communications, 
              the ones who kept the fleet connected across the seven seas. From satellite communications 
              to network security, we made sure every sailor could talk to home, every ship could 
              coordinate with the fleet.
            </p>

            <p className="font-body leading-relaxed mb-6">
              But being an IT wasn't just about the technical skills. It was about being the guy 
              your shipmates could count on when the satellite went down in the middle of the Indian Ocean. 
              It was about staying up all night to make sure the Captain could get his message to the 
              Admiral. It was about excellence, every single day.
            </p>

            <div className="bg-khaki/10 rounded-lg p-6 border-l-4 border-khaki">
              <p className="font-body italic text-khaki leading-relaxed m-0">
                "Leadership isn't about the anchors on your collar or the chevrons on your sleeve. 
                It's about the sailor next to you knowing that you'll always have their back, 
                no matter what. That's what I learned on the deckplates, and that's what I carried 
                with me to the Chief's Mess."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RateStory;