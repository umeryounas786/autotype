import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ProductCard from '@/components/ProductCard';
import PageHeader from '@/components/PageHeader';

const wheelProducts = [
    { id: 7, name: 'BBS CH-R Forged', brand: 'BBS', size: '18x8.5 ET35', price: 899, originalPrice: 999, rating: 4.9, reviews: 67, features: ['Forged', 'Lightweight'], image: 'A stylish silver BBS CH-R forged alloy wheel' },
    { id: 8, name: 'Enkei RPF1', brand: 'Enkei', size: '17x9 ET45', price: 449, originalPrice: 499, rating: 4.8, reviews: 123, features: ['Flow Formed', 'Track Focused'], image: 'A lightweight silver Enkei RPF1 racing wheel' },
    { id: 9, name: 'Vossen CV3-R', brand: 'Vossen', size: '20x10 ET25', price: 1299, originalPrice: 1449, rating: 4.7, reviews: 89, features: ['Luxury', 'Deep Concave'], image: 'A luxury Vossen CV3-R wheel with a deep concave design' },
    { id: 10, name: 'Work Emotion CR Kiwami', brand: 'Work', size: '18x9.5 ET38', price: 699, originalPrice: 779, rating: 4.6, reviews: 45, features: ['JDM Heritage', 'Aggressive'], image: 'A bronze Work Emotion CR Kiwami wheel for a JDM car' },
    { id: 11, name: 'Rotiform RSE', brand: 'Rotiform', size: '19x8.5 ET35', price: 549, originalPrice: 619, rating: 4.5, reviews: 76, features: ['Modern Design', 'Euro Style'], image: 'A modern silver Rotiform RSE wheel with a mesh design' },
    { id: 12, name: 'Advan Racing GT', brand: 'Advan', size: '18x9 ET31', price: 799, originalPrice: 889, rating: 4.8, reviews: 112, features: ['Racing Pedigree', 'Forged'], image: 'A black Advan Racing GT forged wheel for track use' },
    { id: 13, name: 'OZ Racing Ultraleggera', brand: 'OZ Racing', size: '18x8 ET48', price: 599, originalPrice: 659, rating: 4.8, reviews: 99, features: ['Lightweight', 'Italian Design'], image: 'A matte black OZ Racing Ultraleggera wheel' },
    { id: 14, name: 'Rays Volk TE37', brand: 'Rays', size: '18x9.5 ET22', price: 1199, originalPrice: 1300, rating: 5.0, reviews: 250, features: ['Iconic', 'Forged', 'JDM Legend'], image: 'A classic bronze Rays Volk TE37 forged wheel' },
    { id: 15, name: 'HRE P101', brand: 'HRE', size: '20x11 ET50', price: 2499, originalPrice: 2800, rating: 4.9, reviews: 55, features: ['Bespoke', 'Monoblock', 'Ultimate Luxury'], image: 'A brushed dark clear HRE P101 forged wheel' },
];

const WheelsPage = () => {
  const [filters, setFilters] = useState({ vehicle: '', size: '', diameter: '' });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    toast({
      title: "🔍 Searching for Wheels",
      description: `Searching with your selected filters...`,
    });
  };

  const wheelFilters = [
    { key: 'vehicle', label: 'Select Make', options: ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Ford', 'Holden', 'Mazda'] },
    { key: 'size', label: 'Select Model', options: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Camry', 'Corolla', 'Civic'] },
    { key: 'diameter', label: 'Select Size', options: ['16"', '17"', '18"', '19"', '20"', '21"', '22"'] }
  ];

  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Shop All Wheels</title>
        <meta name="description" content="Browse our extensive collection of custom alloy, forged, and racing wheels from top brands. Find the perfect style for your vehicle." />
      </Helmet>
      <PageHeader 
        title="Our Wheel Collection"
        subtitle="Transform your vehicle's appearance with our exclusive range of premium wheels."
        graphic="wheels"
      />
      <div className="container mx-auto px-4 pb-12 sm:pb-16">
        <motion.div 
          className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {wheelFilters.map((filter, index) => (
              <motion.div
                key={filter.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <select
                  value={filters[filter.key]}
                  onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-red-500 focus:outline-none transition-colors text-gray-700 bg-gray-50 text-sm sm:text-base"
                >
                  <option value="">{filter.label}</option>
                  {filter.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={handleSearch}
              className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
            >
              <Search className="w-5 h-5 mr-2" />
              SEARCH WHEELS
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {wheelProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WheelsPage;