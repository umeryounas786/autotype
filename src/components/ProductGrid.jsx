import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const ProductGrid = ({ activeTab, filters }) => {
  const tyreProducts = [
    {
      id: 1,
      name: 'Michelin Pilot Sport 4S',
      brand: 'Michelin',
      size: '225/45R17',
      price: 299,
      originalPrice: 349,
      rating: 4.8,
      reviews: 156,
      features: ['High Performance', 'All Season', 'Run Flat'],
      image: 'A high-performance Michelin Pilot Sport 4S tyre on a dark background'
    },
    {
      id: 2,
      name: 'Continental PremiumContact 6',
      brand: 'Continental',
      size: '205/55R16',
      price: 189,
      originalPrice: 229,
      rating: 4.6,
      reviews: 89,
      features: ['Comfort', 'Fuel Efficient', 'Quiet'],
      image: 'A Continental PremiumContact 6 tyre showing its tread pattern'
    },
    {
      id: 3,
      name: 'Bridgestone Potenza S007A',
      brand: 'Bridgestone',
      size: '245/40R18',
      price: 359,
      originalPrice: 399,
      rating: 4.9,
      reviews: 203,
      features: ['Ultra High Performance', 'Track Ready', 'Precision'],
      image: 'A Bridgestone Potenza S007A tyre for sports cars'
    },
    {
      id: 4,
      name: 'Pirelli P Zero',
      brand: 'Pirelli',
      size: '255/35R19',
      price: 429,
      originalPrice: 479,
      rating: 4.7,
      reviews: 134,
      features: ['Racing Heritage', 'Maximum Grip', 'Premium'],
      image: 'A sleek Pirelli P Zero tyre with yellow markings'
    },
    {
      id: 5,
      name: 'Yokohama Advan Sport V105',
      brand: 'Yokohama',
      size: '235/45R17',
      price: 249,
      originalPrice: 289,
      rating: 4.5,
      reviews: 78,
      features: ['Sport Performance', 'Wet Grip', 'Durable'],
      image: 'A Yokohama Advan Sport V105 tyre with a dynamic look'
    },
    {
      id: 6,
      name: 'Dunlop Sport Maxx RT2',
      brand: 'Dunlop',
      size: '225/50R17',
      price: 219,
      originalPrice: 259,
      rating: 4.4,
      reviews: 92,
      features: ['Sport Touring', 'Responsive', 'Long Lasting'],
      image: 'A Dunlop Sport Maxx RT2 tyre, side view'
    }
  ];

  const wheelProducts = [
    {
      id: 7,
      name: 'BBS CH-R Forged',
      brand: 'BBS',
      size: '18x8.5 ET35',
      price: 899,
      originalPrice: 999,
      rating: 4.9,
      reviews: 67,
      features: ['Forged', 'Lightweight', 'Racing Proven'],
      image: 'A stylish silver BBS CH-R forged alloy wheel'
    },
    {
      id: 8,
      name: 'Enkei RPF1',
      brand: 'Enkei',
      size: '17x9 ET45',
      price: 449,
      originalPrice: 499,
      rating: 4.8,
      reviews: 123,
      features: ['Flow Formed', 'Track Focused', 'Iconic Design'],
      image: 'A lightweight silver Enkei RPF1 racing wheel'
    },
    {
      id: 9,
      name: 'Vossen CV3-R',
      brand: 'Vossen',
      size: '20x10 ET25',
      price: 1299,
      originalPrice: 1449,
      rating: 4.7,
      reviews: 89,
      features: ['Luxury', 'Deep Concave', 'Custom Finish'],
      image: 'A luxury Vossen CV3-R wheel with a deep concave design'
    },
    {
      id: 10,
      name: 'Work Emotion CR Kiwami',
      brand: 'Work',
      size: '18x9.5 ET38',
      price: 699,
      originalPrice: 779,
      rating: 4.6,
      reviews: 45,
      features: ['JDM Heritage', 'Lightweight', 'Aggressive'],
      image: 'A bronze Work Emotion CR Kiwami wheel for a JDM car'
    },
    {
      id: 11,
      name: 'Rotiform RSE',
      brand: 'Rotiform',
      size: '19x8.5 ET35',
      price: 549,
      originalPrice: 619,
      rating: 4.5,
      reviews: 76,
      features: ['Modern Design', 'Flow Formed', 'Euro Style'],
      image: 'A modern silver Rotiform RSE wheel with a mesh design'
    },
    {
      id: 12,
      name: 'Advan Racing GT',
      brand: 'Advan',
      size: '18x9 ET31',
      price: 799,
      originalPrice: 889,
      rating: 4.8,
      reviews: 112,
      features: ['Racing Pedigree', 'Forged', 'Track Proven'],
      image: 'A black Advan Racing GT forged wheel for track use'
    }
  ];

  const products = activeTab === 'tyres' ? tyreProducts : wheelProducts;

  return (
    <motion.div 
      className="my-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800">
          Featured {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h3>
        <div className="text-gray-600">
          Showing {products.length} products
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGrid;