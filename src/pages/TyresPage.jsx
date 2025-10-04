import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ProductCard from '@/components/ProductCard';
import PageHeader from '@/components/PageHeader';

const tyreProducts = [
    { id: 1, name: 'Michelin Pilot Sport 4S', brand: 'Michelin', size: '225/45R17', price: 299, originalPrice: 349, rating: 4.8, reviews: 156, features: ['High Performance', 'All Season'], image: 'A high-performance Michelin Pilot Sport 4S tyre on a dark background' },
    { id: 2, name: 'Continental PremiumContact 6', brand: 'Continental', size: '205/55R16', price: 189, originalPrice: 229, rating: 4.6, reviews: 89, features: ['Comfort', 'Fuel Efficient'], image: 'A Continental PremiumContact 6 tyre showing its tread pattern' },
    { id: 3, name: 'Bridgestone Potenza S007A', brand: 'Bridgestone', size: '245/40R18', price: 359, originalPrice: 399, rating: 4.9, reviews: 203, features: ['Ultra High Performance', 'Track Ready'], image: 'A Bridgestone Potenza S007A tyre for sports cars' },
    { id: 4, name: 'Pirelli P Zero', brand: 'Pirelli', size: '255/35R19', price: 429, originalPrice: 479, rating: 4.7, reviews: 134, features: ['Racing Heritage', 'Maximum Grip'], image: 'A sleek Pirelli P Zero tyre with yellow markings' },
    { id: 5, name: 'Yokohama Advan Sport V105', brand: 'Yokohama', size: '235/45R17', price: 249, originalPrice: 289, rating: 4.5, reviews: 78, features: ['Sport Performance', 'Wet Grip'], image: 'A Yokohama Advan Sport V105 tyre with a dynamic look' },
    { id: 6, name: 'Dunlop Sport Maxx RT2', brand: 'Dunlop', size: '225/50R17', price: 219, originalPrice: 259, rating: 4.4, reviews: 92, features: ['Sport Touring', 'Responsive'], image: 'A Dunlop Sport Maxx RT2 tyre, side view' },
    { id: 7, name: 'Goodyear Eagle F1 Asymmetric 5', brand: 'Goodyear', size: '235/40R18', price: 279, originalPrice: 319, rating: 4.7, reviews: 110, features: ['Wet Braking', 'Performance'], image: 'A Goodyear Eagle F1 Asymmetric 5 tyre with a focus on the tread' },
    { id: 8, name: 'BFGoodrich All-Terrain T/A KO2', brand: 'BFGoodrich', size: '265/70R17', price: 389, originalPrice: 429, rating: 4.9, reviews: 340, features: ['Off-Road', 'Durable', 'All-Terrain'], image: 'A rugged BFGoodrich All-Terrain T/A KO2 tyre' },
    { id: 9, name: 'Hankook Ventus V12 evo2', brand: 'Hankook', size: '245/35R20', price: 259, originalPrice: 299, rating: 4.3, reviews: 65, features: ['Summer', 'Sporty', 'Value'], image: 'A Hankook Ventus V12 evo2 summer performance tyre' },
];

const TyresPage = () => {
  const [filters, setFilters] = useState({ width: '', profile: '', diameter: '' });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    toast({
      title: "🔍 Searching for Tyres",
      description: `Searching with your selected filters...`,
    });
  };

  const tyreFilters = [
    { key: 'width', label: 'Select a Width', options: ['195', '205', '215', '225', '235', '245', '255', '265', '275', '285'] },
    { key: 'profile', label: 'Select a Profile', options: ['35', '40', '45', '50', '55', '60', '65', '70', '75'] },
    { key: 'diameter', label: 'Select a Diameter', options: ['15', '16', '17', '18', '19', '20', '21', '22'] }
  ];

  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Shop All Tyres</title>
        <meta name="description" content="Browse our extensive collection of high-performance, all-terrain, and everyday tyres from top brands. Find the perfect fit for your vehicle." />
      </Helmet>
      <PageHeader 
        title="Our Tyre Collection"
        subtitle="Find the perfect set of tyres to enhance your vehicle's performance, safety, and style."
        graphic="tyres"
      />
      <div className="container mx-auto px-4 pb-12 sm:pb-16">
        <motion.div 
          className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {tyreFilters.map((filter, index) => (
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
              SEARCH TYRES
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tyreProducts.map((product, index) => (
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

export default TyresPage;