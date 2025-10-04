import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Premium sports car with high-performance tyres on mountain road"
         src="https://images.unsplash.com/photo-1678127389689-afbbda9000f7" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SEARCH FOR
            <br />
            <span className="text-red-500 relative">
              TYRES
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium quality tyres and wheels with unbeatable prices and expert installation services.
          </motion.p>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-white text-sm mb-2">Free Delivery</div>
              <div className="text-white font-bold">Australia Wide</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-white text-sm mb-2">Expert</div>
              <div className="text-white font-bold">Installation</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-white text-sm mb-2">Price</div>
              <div className="text-white font-bold">Match Guarantee</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Search Icon */}
      <motion.div 
        className="absolute right-8 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="w-32 h-32 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-30">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;