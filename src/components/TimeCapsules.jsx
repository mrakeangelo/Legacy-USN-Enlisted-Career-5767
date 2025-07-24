import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiMail, FiClock, FiHeart, FiUser, FiUsers, FiX } = FiIcons;

const TimeCapsules = () => {
  const [unlockedCapsules, setUnlockedCapsules] = useState(new Set([1])); // First capsule unlocked
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const timeCapsules = [
    {
      id: 1,
      title: 'To My Grandchildren',
      recipient: 'Future Generations',
      unlockDate: '2024-01-01',
      isUnlocked: true,
      icon: FiHeart,
      preview: 'A letter about service, sacrifice, and what it means to wear the uniform...',
      fullContent: `My dear grandchildren,

By the time you read this, I'll be long retired from the Navy, but the lessons I learned on the deckplates will live on in our family forever.

I want you to know that your grandfather served with honor, not for glory or recognition, but because I believed in something bigger than myself. I believed in the idea that freedom isn't free, and that someone has to stand watch so others can sleep peacefully.

The Navy taught me that leadership isn't about being the loudest voice in the room—it's about being the steady hand when the seas get rough. It's about taking care of your people, even when it's hard. It's about doing the right thing, even when no one is watching.

I hope you'll carry these values with you, whatever path you choose in life. Serve others. Stand for something. And remember that the greatest honor isn't in what you achieve, but in who you become along the way.

Your grandfather served 22 years so you could dream without limits. Make those dreams count.

With all my love and pride,
Master Chief Ruiz`,
      color: 'from-red-500 to-red-700'
    },
    {
      id: 2,
      title: 'To Future Sailors',
      recipient: 'The Next Generation',
      unlockDate: '2025-01-01',
      isUnlocked: false,
      icon: FiUsers,
      preview: 'Wisdom for those who will carry the torch forward...',
      fullContent: `To the sailors who will come after me,

The Navy you're joining is different from the one I joined in 2001, but the core values remain the same: Honor, Courage, and Commitment. These aren't just words on a wall—they're the foundation of everything we do.

You'll face challenges I never imagined. Technology will change, threats will evolve, but the heart of naval service remains constant: taking care of your shipmates and accomplishing the mission.

Remember that every sailor, from seaman recruit to admiral, started exactly where you are now. Embrace the journey. Learn from every experience. And never forget that the sailor next to you is counting on you to do your job with excellence.

The anchors you'll wear aren't just symbols—they're a promise to those who came before and those who will come after. Honor that promise.

Fair winds and following seas,
Master Chief Ruiz`,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 3,
      title: 'To My Younger Self',
      recipient: 'Seaman Recruit Ruiz',
      unlockDate: '2026-01-01',
      isUnlocked: false,
      icon: FiUser,
      preview: 'A conversation across time with the young sailor who started it all...',
      fullContent: `Dear Seaman Recruit Ruiz,

I know you're scared. I know you're homesick. I know you're wondering if you made the right choice getting on that bus to Great Lakes.

You did.

The journey ahead won't be easy. You'll face storms—literal and metaphorical. You'll question yourself, your decisions, your worth. But trust me when I tell you that every challenge is preparing you for something greater.

That chief who seems so hard on you? He's teaching you standards. That deployment that seems endless? It's building your character. That sailor who's struggling? Helping them will teach you what leadership really means.

Don't rush the journey. Every rank you earn, earn it. Every qualification you pursue, master it. Every sailor you lead, serve them.

And remember—you're not just building a career. You're building a legacy.

The master chief you'll become is proud of the seaman you are today.

Stay strong,
Your Future Self`,
      color: 'from-green-500 to-green-700'
    },
    {
      id: 4,
      title: 'To My Family',
      recipient: 'My Beloved Family',
      unlockDate: '2027-01-01',
      isUnlocked: false,
      icon: FiHeart,
      preview: 'The sacrifices, the love, and the gratitude that words can barely express...',
      fullContent: `To my beloved family,

This letter is the hardest one to write because no words can express how grateful I am for your sacrifice. Yes, your sacrifice—because when I served, you served too.

Every deployment I went on, you stayed strong at home. Every late night I spent on watch, you handled bedtime stories and homework help. Every time I missed a birthday, a recital, a game, you were there to make it special.

You are the reason I could serve with purpose. Knowing you were home, proud of what I was doing, gave me the strength to face any challenge. You are my anchor.

I know there were times when you wondered if it was worth it—the moves, the separations, the uncertainty. I want you to know that every moment of service was made meaningful by your love and support.

The uniform may come off, but the values it taught me—honor, courage, commitment—will guide me as a husband, father, and grandfather for the rest of my days.

Thank you for sharing this journey with me. Thank you for being my home port.

With all my love,
Your sailor`,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const handleUnlock = (capsuleId) => {
    // In a real app, this would check the actual date
    setUnlockedCapsules(prev => new Set([...prev, capsuleId]));
  };

  const openCapsule = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const closeCapsule = () => {
    setSelectedCapsule(null);
  };

  return (
    <section className="py-20 bg-anchor-white dark:bg-fleet-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-fleet-blue dark:text-anchor-white mb-4">
            TIME CAPSULES
          </h2>
          <p className="font-body text-lg text-steel-gray dark:text-silver-insignia max-w-2xl mx-auto">
            Messages sealed in time — letters to be opened when the moment is right, 
            carrying wisdom across generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timeCapsules.map((capsule, index) => (
            <motion.div
              key={capsule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${capsule.color} rounded-lg p-8 text-white overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-anchor-pattern opacity-10"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-3">
                      <SafeIcon icon={capsule.icon} className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl">{capsule.title}</h3>
                      <p className="text-white/80 text-sm">{capsule.recipient}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-white/80 text-sm mb-1">
                      <SafeIcon icon={FiClock} className="text-xs" />
                      <span>{capsule.unlockDate}</span>
                    </div>
                    <SafeIcon 
                      icon={unlockedCapsules.has(capsule.id) ? FiUnlock : FiLock} 
                      className={`text-2xl ${unlockedCapsules.has(capsule.id) ? 'text-green-300' : 'text-red-300'}`} 
                    />
                  </div>
                </div>

                {/* Preview */}
                <div className="mb-6">
                  <p className="text-white/90 leading-relaxed italic">
                    {capsule.preview}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  {unlockedCapsules.has(capsule.id) ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openCapsule(capsule)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-heading tracking-wider transition-all duration-300 flex items-center space-x-2"
                    >
                      <SafeIcon icon={FiMail} />
                      <span>READ LETTER</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleUnlock(capsule.id)}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-heading tracking-wider transition-all duration-300 flex items-center space-x-2 opacity-60"
                    >
                      <SafeIcon icon={FiLock} />
                      <span>UNLOCK EARLY</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Letter Modal */}
        {selectedCapsule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeCapsule}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-steel-gray rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Letter Header */}
              <div className={`bg-gradient-to-r ${selectedCapsule.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={selectedCapsule.icon} className="text-2xl" />
                    <div>
                      <h3 className="font-heading text-2xl">{selectedCapsule.title}</h3>
                      <p className="text-white/80">{selectedCapsule.recipient}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeCapsule}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
                  >
                    <SafeIcon icon={FiX} className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Letter Content */}
              <div className="p-8">
                <div className="bg-khaki/5 rounded-lg p-6 border-l-4 border-khaki">
                  <pre className="font-body text-steel-gray dark:text-silver-insignia leading-relaxed whitespace-pre-wrap">
                    {selectedCapsule.fullContent}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TimeCapsules;