import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEdit3, FiSend, FiHeart, FiUser, FiClock, FiFlag } = FiIcons;

const Guestbook = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      name: 'Captain Sarah Johnson',
      message: 'Master Chief Ruiz was an inspiration to all who served with him. His leadership and dedication to his sailors was unmatched.',
      date: '2024-01-15',
      approved: true,
      likes: 23
    },
    {
      id: 2,
      name: 'IT2 Michael Chen',
      message: 'Thank you for everything, Master Chief. You believed in me when I didn\'t believe in myself. Your legacy lives on in all of us.',
      date: '2024-01-14',
      approved: true,
      likes: 18
    },
    {
      id: 3,
      name: 'Jennifer Martinez (Navy Spouse)',
      message: 'Our family is forever grateful for your service and sacrifice. You represent the very best of the Navy.',
      date: '2024-01-13',
      approved: true,
      likes: 31
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    message: '',
    email: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      const entry = {
        id: Date.now(),
        name: newEntry.name,
        message: newEntry.message,
        date: new Date().toISOString().split('T')[0],
        approved: false,
        likes: 0
      };
      
      setEntries([entry, ...entries]);
      setNewEntry({ name: '', message: '', email: '' });
      setShowForm(false);
    }
  };

  const handleLike = (id) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, likes: entry.likes + 1 } : entry
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-steel-gray to-fleet-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-anchor-white mb-4">
            LEGACY WALL
          </h2>
          <p className="font-body text-lg text-khaki max-w-2xl mx-auto">
            Share your memories, thoughts, and tributes. Leave a message for the family 
            and fellow sailors who visit this digital memorial.
          </p>
        </motion.div>

        {/* Add Entry Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className="bg-khaki hover:bg-khaki/90 text-fleet-blue font-heading px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <SafeIcon icon={FiEdit3} />
            <span>SIGN THE GUESTBOOK</span>
          </motion.button>
        </motion.div>

        {/* Entry Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-anchor-white/10 backdrop-blur-sm rounded-lg p-8 mb-12 border border-silver-insignia/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-khaki font-body text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={newEntry.name}
                    onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-silver-insignia/30 rounded-lg text-anchor-white placeholder-silver-insignia focus:outline-none focus:border-khaki focus:ring-2 focus:ring-khaki/20"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-khaki font-body text-sm mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={newEntry.email}
                    onChange={(e) => setNewEntry({ ...newEntry, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-silver-insignia/30 rounded-lg text-anchor-white placeholder-silver-insignia focus:outline-none focus:border-khaki focus:ring-2 focus:ring-khaki/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-khaki font-body text-sm mb-2">
                  Message *
                </label>
                <textarea
                  value={newEntry.message}
                  onChange={(e) => setNewEntry({ ...newEntry, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-silver-insignia/30 rounded-lg text-anchor-white placeholder-silver-insignia focus:outline-none focus:border-khaki focus:ring-2 focus:ring-khaki/20 resize-none"
                  placeholder="Share your thoughts, memories, or tribute..."
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-anchor-white rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-khaki hover:bg-khaki/90 text-fleet-blue font-heading rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiSend} />
                  <span>SUBMIT</span>
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Entries */}
        <div className="space-y-6">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-anchor-white/10 backdrop-blur-sm rounded-lg p-6 border border-silver-insignia/20 ${
                !entry.approved ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-khaki/20 rounded-full p-2">
                    <SafeIcon icon={FiUser} className="text-khaki" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-anchor-white">
                      {entry.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-silver-insignia text-sm">
                      <SafeIcon icon={FiClock} className="text-xs" />
                      <span>{formatDate(entry.date)}</span>
                      {!entry.approved && (
                        <>
                          <span>•</span>
                          <SafeIcon icon={FiFlag} className="text-xs" />
                          <span>Pending approval</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-body text-anchor-white leading-relaxed mb-4">
                {entry.message}
              </p>

              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLike(entry.id)}
                  className="flex items-center space-x-2 text-silver-insignia hover:text-khaki transition-colors duration-200"
                >
                  <SafeIcon icon={FiHeart} className="text-sm" />
                  <span className="text-sm">{entry.likes}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Moderation Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-anchor-white/5 backdrop-blur-sm rounded-lg p-6 border border-silver-insignia/20">
            <p className="text-silver-insignia text-sm">
              All entries are reviewed before being published. Thank you for keeping 
              this memorial respectful and meaningful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;