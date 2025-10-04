import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const wheelImages = [
  { id: 1, alt: "Close-up of a gloss black multi-spoke alloy wheel, 4k cinematic" },
  { id: 2, alt: "Macro shot of a polished chrome wheel lip, 4k high detail" },
  { id: 3, alt: "Detailed view of a bronze deep-dish wheel on a sports car, 4k" },
  { id: 4, alt: "Center cap of a luxury wheel with logo, 4k macro detail" },
  { id: 5, alt: "Spokes of a lightweight racing wheel with intricate design, 4k" },
  { id: 6, alt: "Close-up of a matte grey off-road beadlock wheel, 4k robust" },
];

const WheelCloseUpSlider = () => {
  const duplicatedImages = [...wheelImages, ...wheelImages];

  return (
    <section>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Engineered Artistry: Wheel Designs</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the fusion of performance and style in our collection of premium alloy wheels.
          </p>
        </motion.div>
      </div>
      <div className="w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 45,
              repeat: Infinity,
            }
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] h-[225px] sm:w-[400px] sm:h-[300px] mx-4">
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  alt={image.alt}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12"
      >
        <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 sm:px-10 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/wheels">
            <ShoppingCart className="w-5 h-5 mr-3" />
            Shop All Wheels
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default WheelCloseUpSlider;