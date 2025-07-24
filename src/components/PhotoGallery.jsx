import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight, FiCamera } = FiIcons;

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'early', name: 'Early Years' },
    { id: 'deployments', name: 'Deployments' },
    { id: 'crew', name: 'Crew & Training' },
    { id: 'awards', name: 'Awards & Ceremonies' },
    { id: 'family', name: 'Family & Homecoming' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544717440-6d6c2f35d4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'early',
      title: 'Boot Camp Graduation',
      description: 'RTC Great Lakes, Division 001 - Honor Graduate',
      year: '2001'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'deployments',
      title: 'Mediterranean Deployment',
      description: 'USS Enterprise crossing the Atlantic',
      year: '2003'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'crew',
      title: 'IT Division Team',
      description: 'Night shift crew aboard USS Enterprise',
      year: '2004'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1607003180003-a0e4d64b5636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'awards',
      title: 'Chief Pinning Ceremony',
      description: 'Advancement to Chief Petty Officer',
      year: '2012'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'family',
      title: 'Homecoming',
      description: 'Return from 6-month deployment',
      year: '2015'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'awards',
      title: 'Master Chief Promotion',
      description: 'Advancement to Master Chief Petty Officer',
      year: '2020'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction) => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <section id="photos" className="py-20 bg-anchor-white dark:bg-fleet-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-fleet-blue dark:text-anchor-white mb-4">
            PHOTOS FROM THE FLEET
          </h2>
          <p className="font-body text-lg text-steel-gray dark:text-silver-insignia max-w-2xl mx-auto">
            Memories captured across two decades of service — from boot camp to the bridge.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-body transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-khaki text-fleet-blue shadow-lg'
                  : 'bg-steel-gray/20 text-steel-gray dark:text-silver-insignia hover:bg-khaki/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-fleet-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-heading text-lg mb-1">{photo.title}</h3>
                      <p className="font-body text-sm text-khaki">{photo.description}</p>
                      <p className="font-body text-xs text-silver-insignia mt-2">{photo.year}</p>
                    </div>
                  </div>

                  {/* Camera Icon */}
                  <div className="absolute top-4 right-4 bg-khaki/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <SafeIcon icon={FiCamera} className="text-fleet-blue text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Photo Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="font-heading text-2xl mb-2">{selectedPhoto.title}</h3>
                  <p className="font-body text-khaki mb-1">{selectedPhoto.description}</p>
                  <p className="font-body text-sm text-silver-insignia">{selectedPhoto.year}</p>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                >
                  <SafeIcon icon={FiX} className="text-xl" />
                </button>

                {/* Navigation */}
                <button
                  onClick={() => navigatePhoto('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                >
                  <SafeIcon icon={FiChevronLeft} className="text-xl" />
                </button>
                <button
                  onClick={() => navigatePhoto('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                >
                  <SafeIcon icon={FiChevronRight} className="text-xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;