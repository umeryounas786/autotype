import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProductSpotlight = () => {
  const handleLearnMore = () => {
    toast({
      title: "📖 Learn More",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.section 
      className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 p-12 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-6 font-bold text-lg">
              PRODUCT SPOTLIGHT
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              BF GOODRICH
              <br />
              <span className="text-red-500">KO3</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The BFGoodrich All-Terrain T/A KO3 tire combines a durable tread pattern with CoreGard Technology and Advanced Deflection Design for improved sidewall toughness and debris resistance, while offering enhanced traction in mud and snow.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <div className="text-red-400 font-bold text-lg">CoreGard</div>
                <div className="text-sm text-gray-300">Technology</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <div className="text-red-400 font-bold text-lg">Enhanced</div>
                <div className="text-sm text-gray-300">Traction</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <div className="text-red-400 font-bold text-lg">Sidewall</div>
                <div className="text-sm text-gray-300">Toughness</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <div className="text-red-400 font-bold text-lg">Debris</div>
                <div className="text-sm text-gray-300">Resistance</div>
              </div>
            </div>

            <Button
              onClick={handleLearnMore}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative h-96 lg:h-full">
            <img
              class="w-full h-full object-cover"
              alt="BF Goodrich KO3 All-Terrain tire with advanced tread pattern and gold beadlock wheel"
             src="https://images.unsplash.com/photo-1506015775964-1ba9f992c48c" />
            
            <div className="absolute top-8 right-8 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              NEW
            </div>
            
            <motion.div 
              className="absolute bottom-8 left-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-white font-bold text-lg">All-Terrain</div>
              <div className="text-gray-300 text-sm">Performance</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 bg-black bg-opacity-30">
        <motion.div className="relative h-24 rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} whileHover={{ scale: 1.05 }}>
          <img class="w-full h-full object-cover" alt="Close-up of BF Goodrich KO3 tread pattern showing aggressive lugs" src="https://images.unsplash.com/photo-1699309662844-b226eaef1400" />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
        </motion.div>
        <motion.div className="relative h-24 rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }} whileHover={{ scale: 1.05 }}>
          <img class="w-full h-full object-cover" alt="BF Goodrich KO3 tire on rugged off-road terrain" src="https://images.unsplash.com/photo-1506015775964-1ba9f992c48c" />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
        </motion.div>
        <motion.div className="relative h-24 rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} whileHover={{ scale: 1.05 }}>
          <img class="w-full h-full object-cover" alt="Side view of BF Goodrich KO3 showing sidewall construction" src="https://images.unsplash.com/photo-1506015775964-1ba9f992c48c" />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
        </motion.div>
        <motion.div className="relative h-24 rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9 }} whileHover={{ scale: 1.05 }}>
          <img class="w-full h-full object-cover" alt="BF Goodrich KO3 tire performance in muddy conditions" src="https://images.unsplash.com/photo-1506015775964-1ba9f992c48c" />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductSpotlight;