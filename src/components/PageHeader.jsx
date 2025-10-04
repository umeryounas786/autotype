import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, graphic }) => {
  const bgStyles = {
    tyres: `bg-gradient-to-br from-gray-50 to-gray-100`,
    wheels: `bg-gradient-to-br from-gray-50 to-gray-100`,
    services: `bg-gradient-to-br from-gray-50 to-gray-100`,
    accessories: `bg-gradient-to-br from-gray-50 to-gray-100`,
  };

  const graphicPatterns = {
    tyres: (
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="tyrePattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(1) rotate(45)"><path d="M 10,0 L 10,100 M 30,0 L 30,100 M 50,0 L 50,100 M 70,0 L 70,100 M 90,0 L 90,100" stroke="#000" strokeWidth="3" shapeRendering="crispEdges"></path></pattern></defs><rect width="100%" height="100%" fill="url(#tyrePattern)"></rect></svg>
      </div>
    ),
    wheels: (
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="wheelPattern" patternUnits="userSpaceOnUse" width="120" height="120"><circle cx="60" cy="60" r="50" stroke="#000" strokeWidth="2" fill="none"></circle><circle cx="60" cy="60" r="20" stroke="#000" strokeWidth="1" fill="none"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#wheelPattern)"></rect></svg>
      </div>
    ),
    services: (
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="servicePattern" patternUnits="userSpaceOnUse" width="80" height="80"><path d="M 0,10 L 80,10 M 10,0 L 10,80 M 0,30 L 80,30 M 30,0 L 30,80 M 0,50 L 80,50 M 50,0 L 50,80 M 0,70 L 80,70 M 70,0 L 70,80" stroke="#000" strokeWidth="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#servicePattern)"></rect></svg>
      </div>
    ),
    accessories: (
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="accPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="scale(1) rotate(0)"><path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" stroke="#000" strokeWidth="1" fill="none"></path></pattern></defs><rect width="100%" height="100%" fill="url(#accPattern)"></rect></svg>
      </div>
    ),
  };

  return (
    <div className={`relative overflow-hidden py-20 sm:py-28 mb-12 sm:mb-16 border-b border-gray-200 ${bgStyles[graphic]}`}>
      {graphicPatterns[graphic]}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;