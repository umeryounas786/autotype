import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Wrench, Tag, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-10 h-10 text-red-500" />,
    title: 'Free Australia-Wide Delivery',
    description: 'Get your new tyres and wheels delivered to your doorstep, anywhere in Australia, at no extra cost.'
  },
  {
    icon: <Wrench className="w-10 h-10 text-red-500" />,
    title: 'Expert Fitting & Balancing',
    description: 'Our certified technicians ensure a perfect fit with state-of-the-art equipment for optimal performance.'
  },
  {
    icon: <Tag className="w-10 h-10 text-red-500" />,
    title: 'Unbeatable Price Guarantee',
    description: 'We won\'t be beaten on price. Find a cheaper quote and we\'ll match it, guaranteed.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    title: 'Quality & Warranty',
    description: 'We only stock the best brands, all backed by a full manufacturer\'s warranty for your peace of mind.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const WhyChooseUs = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing you with the best products, prices, and service in the industry. Here's what sets us apart.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-400 group overflow-hidden border border-gray-200/80"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%', y: '-100%' }}
                whileHover={{ x: 0, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-100 p-5 rounded-full border-2 border-gray-200 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-[-10deg]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;