import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const galleryItems = [
  { id: 1, category: "Sports Car", imageDescription: "Sleek black sports car with custom deep-dish bronze wheels at sunset, 4k photo" },
  { id: 2, category: "Luxury Sedan", imageDescription: "White luxury sedan with large multi-spoke silver wheels parked in a modern city, 4k high resolution" },
  { id: 3, category: "Off-Road", imageDescription: "Lifted off-road jeep tackling a muddy trail with rugged all-terrain tyres, 4k action shot" },
  { id: 4, category: "Classic", imageDescription: "Restored classic red muscle car with vintage-style chrome wheels, 4k detailed photo" },
  { id: 5, category: "Tuner", imageDescription: "Bright blue tuner car with lightweight racing wheels at a car show, 4k vibrant colors" },
  { id: 6, category: "SUV", imageDescription: "Dark grey SUV with elegant, high-gloss black wheels in a forest setting, 4k cinematic" },
];

const Gallery = () => {
  const handleView = (category) => {
    toast({
      title: `🖼️ Viewing ${category}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Gallery</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See how our customers have transformed their rides with our premium tyres and wheels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div className="overflow-hidden">
                {index === 0 && <motion.img whileHover={{ scale: 1.15, rotate: 2 }} transition={{ duration: 0.4 }} class="w-full h-96 object-cover" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />}
                {index === 1 && <motion.img whileHover={{ scale: 1.15, rotate: 2 }} transition={{ duration: 0.4 }} class="w-full h-96 object-cover" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />}
                {index === 2 && <motion.img whileHover={{ scale: 1.15, rotate: 2 }} transition={{ duration: 0.4 }} class="w-full h-96 object-cover" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />}
                {index === 3 && <motion.img whileHover={{ scale: 1.15, rotate: 2 }} transition={{ duration: 0.4 }} class="w-full h-96 object-cover" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />}
                {index === 4 && <motion.img whileHover={{ scale: 1.15, rotate: 2 }} transition={{ duration: 0.4 }} class="w-full h-96 object-cover" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />}
                {index === 5 && <motion.img whileHover={{ scale: 1.15, rotate: 2 }} transition={{ duration: 0.4 }} class="w-full h-96 object-cover" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />}
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <motion.p 
                  className="text-2xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {item.category}
                </motion.p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.button
                  onClick={() => handleView(item.category)}
                  className="bg-red-600 text-white p-5 rounded-full shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.2, 1], opacity: 1, transition: { type: 'spring', stiffness: 200, delay: 0.3 + index * 0.1 } }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Eye className="w-7 h-7" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;