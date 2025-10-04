import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const stores = [
  {
    name: 'A1 Auto Service & Tyres - Hallam',
    address: 'Unit 2/72 Hallam S Rd, Hallam VIC 3803, Australia',
    phone: '+61387747365',
    hours: 'Mon-Fri: 8am - 6pm, Sat: 9am - 4pm',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Unit+2/72+Hallam+S+Rd,+Hallam+VIC+3803,+Australia'
  },
  {
    name: 'Melbourne Central (Coming Soon)',
    address: '456 Tyre Ave, Melbourne, VIC 3000',
    phone: '(03) 8765 4321',
    hours: 'Mon-Fri: 8am - 6pm, Sat: 9am - 4pm',
    mapLink: '#'
  },
  {
    name: 'Sydney Hub (Coming Soon)',
    address: '789 Wheel St, Sydney, NSW 2000',
    phone: '(02) 7654 3210',
    hours: 'Mon-Fri: 8am - 5:30pm, Sat: 9am - 2pm',
    mapLink: '#'
  },
];

const StoreLocatorPage = () => {
  const handleDirections = (store) => {
    if (store.mapLink === '#') {
      toast({
        title: `📍 ${store.name}`,
        description: `This store is opening soon! Stay tuned for updates.`,
      });
    } else {
      window.open(store.mapLink, '_blank');
    }
  };

  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Store Locator</title>
        <meta name="description" content="Find your nearest A1 Auto Service & Tyres location. Get addresses, contact information, and opening hours for our stores." />
      </Helmet>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Find a Store</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us in-store for expert advice and professional fitting services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2 bg-gray-200 rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full h-64 sm:h-96 lg:h-full rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
                <img class="w-full h-full object-cover opacity-30" alt="Map showing store locations" src="https://images.unsplash.com/photo-1605903176148-17210eaf5ca3" />
                <div className="absolute inset-0 bg-black/10"></div>
                <p className="text-white font-semibold text-xl sm:text-2xl text-center p-4">Interactive Map Coming Soon</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {stores.map((store, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{store.name}</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" />
                      <span>{store.address}</span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                      <span>{store.phone}</span>
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                      <span>{store.hours}</span>
                    </p>
                  </div>
                  <Button onClick={() => handleDirections(store)} className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
                    Get Directions
                  </Button>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreLocatorPage;