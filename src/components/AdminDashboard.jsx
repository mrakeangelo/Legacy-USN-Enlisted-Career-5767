import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiEdit, FiImage, FiMessageCircle, FiSettings, FiLock, FiUnlock, FiEye, FiTrash2, FiCheck, FiX } = FiIcons;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would authenticate with Supabase
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      setIsAuthenticated(true);
    }
  };

  const pendingEntries = [
    {
      id: 1,
      name: 'John Smith',
      message: 'Master Chief Ruiz was an amazing leader...',
      date: '2024-01-16',
      email: 'john@example.com'
    },
    {
      id: 2,
      name: 'Mary Johnson',
      message: 'Thank you for your service...',
      date: '2024-01-15',
      email: 'mary@example.com'
    }
  ];

  const timeCapsules = [
    {
      id: 1,
      title: 'To My Grandchildren',
      unlockDate: '2024-01-01',
      status: 'unlocked'
    },
    {
      id: 2,
      title: 'To Future Sailors',
      unlockDate: '2025-01-01',
      status: 'locked'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-fleet-blue flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-anchor-white rounded-lg p-8 max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="text-4xl text-fleet-blue mx-auto mb-4" />
            <h2 className="font-heading text-2xl text-fleet-blue">Admin Access</h2>
            <p className="text-steel-gray">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-steel-gray font-body text-sm mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-3 border border-silver-insignia rounded-lg focus:outline-none focus:border-fleet-blue"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-steel-gray font-body text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 border border-silver-insignia rounded-lg focus:outline-none focus:border-fleet-blue"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-fleet-blue hover:bg-fleet-blue/90 text-anchor-white font-heading py-3 rounded-lg transition-colors duration-200"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-steel-gray hover:text-fleet-blue transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiHome} />
              <span>Back to Site</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FiHome },
    { id: 'content', name: 'Content', icon: FiEdit },
    { id: 'media', name: 'Media', icon: FiImage },
    { id: 'guestbook', name: 'Guestbook', icon: FiMessageCircle },
    { id: 'capsules', name: 'Time Capsules', icon: FiLock },
    { id: 'settings', name: 'Settings', icon: FiSettings }
  ];

  return (
    <div className="min-h-screen bg-anchor-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-fleet-blue text-anchor-white p-6">
          <div className="flex items-center space-x-2 mb-8">
            <SafeIcon icon={FiSettings} className="text-2xl text-khaki" />
            <h1 className="font-heading text-xl">Admin Panel</h1>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-khaki text-fleet-blue'
                    : 'hover:bg-steel-gray/20'
                }`}
              >
                <SafeIcon icon={tab.icon} />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-silver-insignia/20">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center space-x-3 px-4 py-3 text-silver-insignia hover:text-anchor-white transition-colors duration-200"
            >
              <SafeIcon icon={FiHome} />
              <span>View Site</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div>
              <h2 className="font-heading text-3xl text-fleet-blue mb-8">Dashboard Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-steel-gray text-sm">Total Visitors</p>
                      <p className="font-heading text-2xl text-fleet-blue">1,247</p>
                    </div>
                    <SafeIcon icon={FiEye} className="text-2xl text-khaki" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-steel-gray text-sm">Guestbook Entries</p>
                      <p className="font-heading text-2xl text-fleet-blue">23</p>
                    </div>
                    <SafeIcon icon={FiMessageCircle} className="text-2xl text-khaki" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-steel-gray text-sm">Pending Approval</p>
                      <p className="font-heading text-2xl text-fleet-blue">2</p>
                    </div>
                    <SafeIcon icon={FiCheck} className="text-2xl text-orange-500" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-steel-gray text-sm">Time Capsules</p>
                      <p className="font-heading text-2xl text-fleet-blue">4</p>
                    </div>
                    <SafeIcon icon={FiLock} className="text-2xl text-khaki" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <SafeIcon icon={FiMessageCircle} className="text-green-500" />
                      <span>New guestbook entry from John Smith</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <SafeIcon icon={FiEye} className="text-blue-500" />
                      <span>47 new visitors today</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <SafeIcon icon={FiImage} className="text-purple-500" />
                      <span>Photo gallery updated</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-fleet-blue text-anchor-white py-2 rounded-lg hover:bg-fleet-blue/90 transition-colors duration-200">
                      Review Pending Entries
                    </button>
                    <button className="w-full bg-khaki text-fleet-blue py-2 rounded-lg hover:bg-khaki/90 transition-colors duration-200">
                      Upload New Photos
                    </button>
                    <button className="w-full bg-steel-gray text-anchor-white py-2 rounded-lg hover:bg-steel-gray/90 transition-colors duration-200">
                      Edit Timeline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guestbook' && (
            <div>
              <h2 className="font-heading text-3xl text-fleet-blue mb-8">Guestbook Management</h2>
              
              <div className="bg-white rounded-lg shadow-lg border border-silver-insignia/20">
                <div className="p-6 border-b border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue">Pending Entries</h3>
                </div>
                
                <div className="divide-y divide-silver-insignia/20">
                  {pendingEntries.map((entry) => (
                    <div key={entry.id} className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <h4 className="font-heading text-lg text-fleet-blue">{entry.name}</h4>
                            <span className="text-steel-gray text-sm">{entry.date}</span>
                          </div>
                          <p className="text-steel-gray mb-3">{entry.message}</p>
                          <p className="text-silver-insignia text-sm">{entry.email}</p>
                        </div>
                        
                        <div className="flex space-x-2 ml-4">
                          <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors duration-200">
                            <SafeIcon icon={FiCheck} />
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200">
                            <SafeIcon icon={FiX} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'capsules' && (
            <div>
              <h2 className="font-heading text-3xl text-fleet-blue mb-8">Time Capsule Management</h2>
              
              <div className="bg-white rounded-lg shadow-lg border border-silver-insignia/20">
                <div className="p-6 border-b border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue">Capsule Status</h3>
                </div>
                
                <div className="divide-y divide-silver-insignia/20">
                  {timeCapsules.map((capsule) => (
                    <div key={capsule.id} className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <SafeIcon 
                            icon={capsule.status === 'unlocked' ? FiUnlock : FiLock} 
                            className={`text-2xl ${capsule.status === 'unlocked' ? 'text-green-500' : 'text-red-500'}`}
                          />
                          <div>
                            <h4 className="font-heading text-lg text-fleet-blue">{capsule.title}</h4>
                            <p className="text-steel-gray text-sm">Unlock Date: {capsule.unlockDate}</p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="bg-fleet-blue hover:bg-fleet-blue/90 text-anchor-white px-4 py-2 rounded-lg transition-colors duration-200">
                            Edit
                          </button>
                          <button className="bg-khaki hover:bg-khaki/90 text-fleet-blue px-4 py-2 rounded-lg transition-colors duration-200">
                            {capsule.status === 'unlocked' ? 'Lock' : 'Unlock'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div>
              <h2 className="font-heading text-3xl text-fleet-blue mb-8">Content Management</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue mb-4">Timeline Events</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-anchor-white hover:bg-khaki/10 rounded-lg border border-silver-insignia/20 transition-colors duration-200">
                      <div className="font-semibold">Boot Camp - RTC Great Lakes</div>
                      <div className="text-sm text-steel-gray">2001</div>
                    </button>
                    <button className="w-full text-left p-3 bg-anchor-white hover:bg-khaki/10 rounded-lg border border-silver-insignia/20 transition-colors duration-200">
                      <div className="font-semibold">USS Enterprise Assignment</div>
                      <div className="text-sm text-steel-gray">2002</div>
                    </button>
                    <button className="w-full bg-khaki text-fleet-blue py-2 rounded-lg hover:bg-khaki/90 transition-colors duration-200">
                      + Add New Event
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue mb-4">Rate Story</h3>
                  <div className="space-y-3">
                    <div className="text-sm text-steel-gray mb-2">Last updated: Jan 15, 2024</div>
                    <button className="w-full bg-fleet-blue text-anchor-white py-2 rounded-lg hover:bg-fleet-blue/90 transition-colors duration-200">
                      Edit Story Content
                    </button>
                    <button className="w-full bg-khaki text-fleet-blue py-2 rounded-lg hover:bg-khaki/90 transition-colors duration-200">
                      Update Audio Recording
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div>
              <h2 className="font-heading text-3xl text-fleet-blue mb-8">Media Management</h2>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20 mb-8">
                <h3 className="font-heading text-xl text-fleet-blue mb-4">Upload New Photos</h3>
                <div className="border-2 border-dashed border-silver-insignia/30 rounded-lg p-8 text-center">
                  <SafeIcon icon={FiImage} className="text-4xl text-steel-gray mx-auto mb-4" />
                  <p className="text-steel-gray mb-4">Drag and drop photos here or click to browse</p>
                  <button className="bg-fleet-blue text-anchor-white px-6 py-2 rounded-lg hover:bg-fleet-blue/90 transition-colors duration-200">
                    Select Files
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                <h3 className="font-heading text-xl text-fleet-blue mb-4">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="relative group">
                      <img
                        src={`https://images.unsplash.com/photo-154471744${i}-6d6c2f35d4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`}
                        alt={`Photo ${i}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                        <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                          <SafeIcon icon={FiTrash2} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="font-heading text-3xl text-fleet-blue mb-8">Settings</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue mb-4">Site Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-steel-gray font-body text-sm mb-2">
                        Site Title
                      </label>
                      <input
                        type="text"
                        defaultValue="Master Chief Jayson T. Ruiz - Naval Legacy"
                        className="w-full px-4 py-2 border border-silver-insignia rounded-lg focus:outline-none focus:border-fleet-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-gray font-body text-sm mb-2">
                        Hero Quote
                      </label>
                      <textarea
                        defaultValue="From seaman to chief, he led where it mattered — on the deck."
                        className="w-full px-4 py-2 border border-silver-insignia rounded-lg focus:outline-none focus:border-fleet-blue"
                        rows="3"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border border-silver-insignia/20">
                  <h3 className="font-heading text-xl text-fleet-blue mb-4">Privacy Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-steel-gray">Allow public guestbook entries</span>
                      <button className="bg-fleet-blue w-12 h-6 rounded-full relative">
                        <div className="bg-white w-4 h-4 rounded-full absolute top-1 right-1"></div>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-steel-gray">Require email for guestbook</span>
                      <button className="bg-steel-gray w-12 h-6 rounded-full relative">
                        <div className="bg-white w-4 h-4 rounded-full absolute top-1 left-1"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;