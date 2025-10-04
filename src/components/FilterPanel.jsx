import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FilterPanel = ({ activeTab, filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    toast({
      title: "🔍 Search Results",
      description: `Searching for ${activeTab} with your selected filters...`,
    });
  };

  const tyreFilters = [
    { key: 'width', label: 'Select a Width', options: ['195', '205', '215', '225', '235', '245', '255', '265', '275', '285'] },
    { key: 'profile', label: 'Select a Profile', options: ['35', '40', '45', '50', '55', '60', '65', '70', '75'] },
    { key: 'diameter', label: 'Select a Diameter', options: ['15', '16', '17', '18', '19', '20', '21', '22'] }
  ];

  const wheelFilters = [
    { key: 'vehicle', label: 'Select Make', options: ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Ford', 'Holden', 'Mazda'] },
    { key: 'size', label: 'Select Model', options: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Camry', 'Corolla', 'Civic'] },
    { key: 'diameter', label: 'Select Size', options: ['16"', '17"', '18"', '19"', '20"', '21"', '22"'] }
  ];

  const currentFilters = activeTab === 'tyres' ? tyreFilters : wheelFilters;

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
        {activeTab === 'tyres' ? (
          <>
            <Button variant="default" className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm">Size</Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-xs sm:text-sm">Brand</Button>
          </>
        ) : (
          <>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-xs sm:text-sm">Size</Button>
            <Button variant="default" className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm">Vehicle</Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-xs sm:text-sm">Brand</Button>
          </>
        )}
      </div>

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {currentFilters.map((filter, index) => (
          <motion.div
            key={filter.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <select
              value={filters[filter.key]}
              onChange={(e) => handleFilterChange(filter.key, e.target.value)}
              className="w-full px-4 py-3 sm:py-4 border-2 border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-gray-200 bg-gray-800 text-sm sm:text-base"
            >
              <option value="">{filter.label}</option>
              {filter.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </motion.div>
        ))}
      </div>

      {/* Search Button */}
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
          SEARCH
        </Button>
      </motion.div>
    </div>
  );
};

export default FilterPanel;