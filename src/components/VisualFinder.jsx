import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Truck, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const vehicleTypes = [
  { name: 'Sedan / Hatch', icon: <Car className="w-12 h-12" />, image: 'A modern silver sedan on a city street' },
  { name: 'SUV / Crossover', icon: <Car className="w-12 h-12" />, image: 'A white SUV driving on a coastal road' },
  { name: '4x4 / Ute', icon: <Truck className="w-12 h-12" />, image: 'A rugged 4x4 truck on a dirt mountain path' },
  { name: 'Performance', icon: <Car className="w-12 h-12" />, image: 'A red sports car on a race track' },
];

const recommendations = {
  tyres: [
    { name: 'Michelin Pilot Sport 4S', image: 'A high-performance Michelin Pilot Sport 4S tyre' },
    { name: 'Continental PremiumContact 6', image: 'A Continental PremiumContact 6 tyre' },
    { name: 'Bridgestone Potenza S007A', image: 'A Bridgestone Potenza S007A tyre' },
  ],
  wheels: [
    { name: 'BBS CH-R', image: 'A silver BBS CH-R alloy wheel' },
    { name: 'Enkei RPF1', image: 'A lightweight Enkei RPF1 racing wheel' },
    { name: 'Vossen CV3-R', image: 'A luxury Vossen CV3-R wheel' },
  ],
};

const VisualFinder = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    toast({
      title: `Vehicle Selected: ${vehicle.name}`,
      description: "Showing recommended products for your vehicle.",
    });
  };

  const handleProductClick = (productName) => {
    toast({
      title: `Viewing ${productName}`,
      description: "🚧 Product details page is not implemented yet. You can request it! 🚀",
    });
  };

  const handleReset = () => {
    setSelectedVehicle(null);
  };

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Find Your Perfect Fit
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Start by selecting your vehicle type to see our top recommendations.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!selectedVehicle ? (
              <motion.div
                key="selection"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {vehicleTypes.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer group"
                    onClick={() => handleSelectVehicle(vehicle)}
                  >
                    <div className="absolute inset-0">
                      {index === 0 && <img class="w-full h-full object-cover" alt={vehicle.image} src="https://images.unsplash.com/photo-1537703446875-9ddc06111eb0" />}
                      {index === 1 && <img class="w-full h-full object-cover" alt={vehicle.image} src="https://images.unsplash.com/photo-1494472670240-87a6f825384d" />}
                      {index === 2 && <img class="w-full h-full object-cover" alt={vehicle.image} src="https://images.unsplash.com/photo-1636727880100-4a36df37a129" />}
                      {index === 3 && <img class="w-full h-full object-cover" alt={vehicle.image} src="https://images.unsplash.com/photo-1689794662749-0db451363da7" />}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="relative h-80 flex flex-col justify-end p-6 text-white">
                      <div className="mb-4 text-red-500">{vehicle.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                      <div className="flex items-center text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Select</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="recommendations"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                      <div className="flex items-center text-2xl font-bold text-gray-900 mb-2">
                        <CheckCircle className="w-8 h-8 text-red-600 mr-3" />
                        <span>{selectedVehicle.name}</span>
                      </div>
                      <p className="text-gray-600">Here are our top picks for your vehicle.</p>
                    </div>
                    <Button variant="outline" onClick={handleReset} className="mt-4 md:mt-0">
                      Change Vehicle
                    </Button>
                  </div>

                  {/* Recommended Tyres */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Recommended Tyres</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {recommendations.tyres.map((tyre, index) => (
                        <motion.div
                          key={tyre.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.15 }}
                          whileHover={{ y: -5 }}
                          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group border border-gray-200"
                          onClick={() => handleProductClick(tyre.name)}
                        >
                          <div className="h-48 bg-gray-100">
                            {index === 0 && <img class="w-full h-full object-cover" alt={tyre.image} src="https://images.unsplash.com/photo-1699825289078-9096336bf5f5" />}
                            {index === 1 && <img class="w-full h-full object-cover" alt={tyre.image} src="https://images.unsplash.com/photo-1678944306490-9a2a86657073" />}
                            {index === 2 && <img class="w-full h-full object-cover" alt={tyre.image} src="https://images.unsplash.com/photo-1678944306490-9a2a86657073" />}
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-800 truncate">{tyre.name}</h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Wheels */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Recommended Wheels</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {recommendations.wheels.map((wheel, index) => (
                        <motion.div
                          key={wheel.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                          whileHover={{ y: -5 }}
                          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group border border-gray-200"
                          onClick={() => handleProductClick(wheel.name)}
                        >
                          <div className="h-48 bg-gray-100">
                            {index === 0 && <img class="w-full h-full object-cover" alt={wheel.image} src="https://images.unsplash.com/photo-1675031634349-39fb2a06a78c" />}
                            {index === 1 && <img class="w-full h-full object-cover" alt={wheel.image} src="https://images.unsplash.com/photo-1674286589490-1f6cacb2ffb3" />}
                            {index === 2 && <img class="w-full h-full object-cover" alt={wheel.image} src="https://images.unsplash.com/photo-1681835659553-2c85864bb5b2" />}
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-800 truncate">{wheel.name}</h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VisualFinder;