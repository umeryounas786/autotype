import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Package, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const packages = [
  {
    name: "Track Day Dominator",
    tyre: "Michelin Pilot Sport Cup 2",
    wheel: "BBS FI-R Forged",
    description: "The ultimate combination for shaving seconds off your lap time. Unmatched grip and lightweight performance.",
    price: 4999,
    image: "A high-performance sports car on a race track with track-focused wheels and tyres"
  },
  {
    name: "Off-Road Explorer",
    tyre: "BFGoodrich All-Terrain T/A KO2",
    wheel: "Method Race Wheels 305 NV",
    description: "Conquer any trail with this rugged package. Built for durability, traction, and aggressive looks.",
    price: 2899,
    image: "A lifted 4x4 truck on a rocky mountain trail with off-road wheels and tyres"
  },
  {
    name: "Urban Style King",
    tyre: "Pirelli P Zero",
    wheel: "Vossen HF-5",
    description: "Turn heads everywhere you go. This package combines luxury styling with premium street performance.",
    price: 3499,
    image: "A luxury sedan in a city at night with stylish, large-diameter wheels"
  },
];

const PackagesPage = () => {
  const handleViewPackage = (packageName) => {
    toast({
      title: `Viewing ${packageName}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Wheel & Tyre Packages</title>
        <meta name="description" content="Explore our expertly curated wheel and tyre packages. Get the perfect combination of style and performance at an unbeatable price." />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Wheel & Tyre Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertly matched combinations for ultimate performance and style, at a value you'll love.
          </p>
        </motion.div>

        <div className="space-y-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/2 h-64 md:h-auto">
                <img class="w-full h-full object-cover" alt={pkg.image} src="https://images.unsplash.com/photo-1702567855965-176e97304a4b" />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{pkg.name}</h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Package className="w-4 h-4 mr-2" />
                  <span>{pkg.wheel} + {pkg.tyre}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-red-600">${pkg.price}</span>
                  <Button
                    onClick={() => handleViewPackage(pkg.name)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                  >
                    View Package <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PackagesPage;