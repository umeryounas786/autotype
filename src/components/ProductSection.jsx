import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FilterPanel from '@/components/FilterPanel';
import ProductGrid from '@/components/ProductGrid';
import ProductSpotlight from '@/components/ProductSpotlight';
import BrandSlider from '@/components/BrandSlider';

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('tyres');
  const [filters, setFilters] = useState({
    size: '',
    brand: '',
    vehicle: '',
    diameter: '',
    width: '',
    profile: ''
  });

  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-1.5 sm:p-2 shadow-lg backdrop-blur-sm">
            {['tyres', 'wheels'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 sm:px-8 sm:py-3 rounded-md sm:rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search Section */}
        <motion.div 
          className="bg-gray-900/50 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 mb-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEARCH FOR{' '}
              <span className="text-red-500 relative">
                {activeTab.toUpperCase()}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Find the perfect {activeTab} for your vehicle with our advanced search filters
            </p>
          </div>

          <FilterPanel 
            activeTab={activeTab}
            filters={filters}
            setFilters={setFilters}
          />
        </motion.div>

        {/* Brand Slider */}
        <BrandSlider />

        {/* Product Grid */}
        <ProductGrid activeTab={activeTab} filters={filters} />

        {/* Product Spotlight */}
        <ProductSpotlight />
      </div>
    </div>
  );
};

export default ProductSection;