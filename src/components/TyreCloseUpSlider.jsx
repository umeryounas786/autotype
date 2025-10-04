import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const tyreImages = [
  { id: 1, alt: "Extreme close-up of a new tyre tread pattern, 4k macro shot" },
  { id: 2, alt: "Sidewall of a performance tyre showing brand markings, 4k detail" },
  { id: 3, alt: "Close-up of an all-terrain tyre's deep grooves, 4k robust texture" },
  { id: 4, alt: "Water splashing off a wet tyre tread, 4k dynamic action shot" },
  { id: 5, alt: "Macro shot of the rubber texture on a racing slick tyre, 4k" },
  { id: 6, alt: "Close-up view of winter tyre sipes for snow grip, 4k detail" },
];

const TyreCloseUpSlider = () => {
  const duplicatedImages = [...tyreImages, ...tyreImages];

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Heart of Grip: A Closer Look</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the intricate details and advanced technology engineered into every tyre we offer.
          </p>
        </motion.div>
      </div>
      <div className="w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        <motion.div
          className="flex"
          animate={{
            x: ['-100%', '0%'],
            transition: {
              ease: 'linear',
              duration: 40,
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
          <Link to="/tyres">
            <ShoppingCart className="w-5 h-5 mr-3" />
            Shop All Tyres
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default TyreCloseUpSlider;