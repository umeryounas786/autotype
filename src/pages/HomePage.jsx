import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import HeroSlider from '@/components/HeroSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import TyreCloseUpSlider from '@/components/TyreCloseUpSlider';
import WheelCloseUpSlider from '@/components/WheelCloseUpSlider';
import VisualFinder from '@/components/VisualFinder';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

function HomePage() {
  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Elite Tyres & Wheels</title>
        <meta name="description" content="Experience the elite difference with A1 Auto Service & Tyres. Discover premium tyres and wheels with stunning visuals, robust design, and unbeatable performance." />
      </Helmet>
      <HeroSlider />
      
      <motion.div 
        className="py-16 sm:py-24 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        className="py-16 sm:py-24 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <TyreCloseUpSlider />
      </motion.div>
      
      <VisualFinder />

      <motion.div
        className="py-16 sm:py-24 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <WheelCloseUpSlider />
      </motion.div>
      
      <motion.div 
        className="py-16 sm:py-24 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Gallery />
      </motion.div>
    </>
  );
}

export default HomePage;