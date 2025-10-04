import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const galleryItems = [
  { id: 1, category: "Sports Car", imageDescription: "Yellow supercar with carbon fiber wheels on a racetrack" },
  { id: 2, category: "Luxury Sedan", imageDescription: "Matte grey luxury sedan with large, intricate black wheels" },
  { id: 3, category: "Off-Road", imageDescription: "A desert-tan off-road truck climbing a rocky incline" },
  { id: 4, category: "Classic", imageDescription: "A pristine, teal classic 1950s car with whitewall tires and chrome hubcaps" },
  { id: 5, category: "Tuner", imageDescription: "A modified Japanese sports car with neon underglow and deep-dish wheels" },
  { id: 6, category: "SUV", imageDescription: "A family SUV with stylish bronze wheels parked by a scenic lake" },
  { id: 7, category: "Exotic", imageDescription: "A rare purple hypercar with futuristic wheel design" },
  { id: 8, category: "Hot Hatch", imageDescription: "A vibrant red hot-hatchback with white rally-style wheels drifting on a track" },
  { id: 9, category: "Stance", imageDescription: "An extremely low-slung car with wide wheels and significant camber at a night meet" },
];

const GalleryPage = () => {
  const handleView = (category) => {
    toast({
      title: `🖼️ Viewing ${category}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Customer Gallery</title>
        <meta name="description" content="See how our customers have transformed their rides with our premium tyres and wheels. Get inspired for your next upgrade." />
      </Helmet>
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Customer Gallery</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired by real customer cars featuring our wheels and tyres.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <img class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300 w-full">
                <p className="text-lg sm:text-xl font-bold">{item.category}</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleView(item.category)}
                  className="bg-red-600 text-white p-4 rounded-full shadow-lg transform transition-transform hover:scale-110"
                >
                  <Eye className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;