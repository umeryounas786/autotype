import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Accelera', alt: 'Accelera logo' },
  { name: 'Achilles', alt: 'Achilles logo' },
  { name: 'Allosaurus', alt: 'Allosaurus logo' },
  { name: 'Aoteli', alt: 'Aoteli logo' },
  { name: 'Atturo', alt: 'Atturo logo' },
  { name: 'Auplus', alt: 'Auplus logo' },
  { name: 'BFGoodrich', alt: 'BFGoodrich logo' },
  { name: 'Bridgestone', alt: 'Bridgestone logo' },
  { name: 'Comforser', alt: 'Comforser logo' },
  { name: 'Continental', alt: 'Continental logo' },
  { name: 'Doublestar', alt: 'Doublestar logo' },
  { name: 'Dunlop', alt: 'Dunlop logo' },
  { name: 'Falken', alt: 'Falken logo' },
  { name: 'Federal', alt: 'Federal logo' },
  { name: 'Firestone', alt: 'Firestone logo' },
  { name: 'General Tire', alt: 'General Tire logo' },
  { name: 'Goodyear', alt: 'Goodyear logo' },
  { name: 'Grenlander', alt: 'Grenlander logo' },
  { name: 'Haida', alt: 'Haida logo' },
  { name: 'Hankook', alt: 'Hankook logo' },
  { name: 'Haulstar', alt: 'Haulstar logo' },
  { name: 'Headway', alt: 'Headway logo' },
  { name: 'Kinforest', alt: 'Kinforest logo' },
  { name: 'Kumho', alt: 'Kumho logo' },
  { name: 'Lanvigator', alt: 'Lanvigator logo' },
  { name: 'Lionhart', alt: 'Lionhart logo' },
  { name: 'Maxxis', alt: 'Maxxis logo' },
  { name: 'Mayrun', alt: 'Mayrun logo' },
  { name: 'Michelin', alt: 'Michelin logo' },
  { name: 'Monsta', alt: 'Monsta logo' },
  { name: 'Nankang', alt: 'Nankang logo' },
  { name: 'Nexen', alt: 'Nexen logo' },
  { name: 'Pace', alt: 'Pace logo' },
  { name: 'Pirelli', alt: 'Pirelli logo' },
  { name: 'Rapid', alt: 'Rapid logo' },
  { name: 'Roadclaw', alt: 'Roadclaw logo' },
  { name: 'Roadstone', alt: 'Roadstone logo' },
  { name: 'Sumitomo', alt: 'Sumitomo logo' },
  { name: 'Athree-A', alt: 'Athree-A logo' },
  { name: 'Toyo Tires', alt: 'Toyo Tires logo' },
  { name: 'Windforce', alt: 'Windforce logo' },
  { name: 'Winrun', alt: 'Winrun logo' },
  { name: 'Yokohama', alt: 'Yokohama logo' },
];

const sliderVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 60,
        ease: 'linear',
      },
    },
  },
};

const BrandSlider = () => {
  return (
    <div className="py-12 bg-gray-900/50 mb-12 overflow-hidden">
      <h3 className="text-center text-2xl font-bold text-white mb-8">Trusted Brands</h3>
      <div className="relative w-full">
        <motion.div
          className="flex"
          variants={sliderVariants}
          animate="animate"
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-8 flex items-center justify-center h-16">
              <img
                class="max-h-12 max-w-full object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                alt={brand.alt} src="https://images.unsplash.com/photo-1649015931204-15a3c789e6ea" />
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BrandSlider;