import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const slides = [
  {
    id: 1,
    title: "Unleash Peak Performance",
    subtitle: "Discover our premium collection of high-performance tyres.",
    image: "A red sports car driving fast on a race track, showing motion blur, 4k high detail",
    buttonText: "Shop Tyres",
    feature: "Tyres"
  },
  {
    id: 2,
    title: "Style That Grips",
    subtitle: "Upgrade your ride with our exclusive range of custom wheels.",
    image: "A luxury black SUV with custom black alloy wheels parked in a modern city, 4k cinematic",
    buttonText: "Shop Wheels",
    feature: "Wheels"
  },
  {
    id: 3,
    title: "Rugged Meets Refined",
    subtitle: "Close-up on a 4x4's all-terrain tyre, ready for any adventure.",
    image: "Robust 4k close-up of an aggressive off-road tyre on a dark-colored jeep, showing part of the fender and suspension",
    buttonText: "Explore Off-Road",
    feature: "Off-Road"
  },
  {
    id: 4,
    title: "Performance in Detail",
    subtitle: "A close look at the high-performance tyre on a sleek sports car.",
    image: "Dynamic 4k close-up of a performance tyre and multi-spoke wheel on a silver sports car, angled view",
    buttonText: "View Tyre Details",
    feature: "Tyre Details"
  },
  {
    id: 5,
    title: "The Art of the Wheel",
    subtitle: "Stunning close-up of a custom alloy wheel on a luxury sedan.",
    image: "Elegant 4k close-up of a diamond-cut alloy wheel on a white luxury car, highlighting the car's body lines",
    buttonText: "View Wheel Designs",
    feature: "Wheel Designs"
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.1
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.9
  })
};

const textContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    }
  }
};

const textVariants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  const handleShopClick = (feature) => {
    toast({
      title: `🚀 Exploring ${feature}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const currentSlide = slides[page];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 250, damping: 30 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 }
          }}
          className="absolute inset-0"
        >
          {page === 0 && <img class="w-full h-full object-cover" alt="A red sports car driving fast on a race track, showing motion blur, 4k high detail" src="https://images.unsplash.com/photo-1691006962698-99b19d83ad4d" />}
          {page === 1 && <img class="w-full h-full object-cover" alt="A luxury black SUV with custom black alloy wheels parked in a modern city, 4k cinematic" src="https://images.unsplash.com/photo-1702558306567-d86f3efe80af" />}
          {page === 2 && <img class="w-full h-full object-cover" alt="Robust 4k close-up of an aggressive off-road tyre on a dark-colored jeep, showing part of the fender and suspension" src="https://images.unsplash.com/photo-1585901654602-9a1c097d919d" />}
          {page === 3 && <img class="w-full h-full object-cover" alt="Dynamic 4k close-up of a performance tyre and multi-spoke wheel on a silver sports car, angled view" src="https://images.unsplash.com/photo-1698521805436-459d6ac8db72" />}
          {page === 4 && <img class="w-full h-full object-cover" alt="Elegant 4k close-up of a diamond-cut alloy wheel on a white luxury car, highlighting the car's body lines" src="https://images.unsplash.com/photo-1681835659553-2c85864bb5b2" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
        <motion.div
          key={page}
          variants={textContainerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg"
          >
            {currentSlide.title}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 text-shadow"
          >
            {currentSlide.subtitle}
          </motion.p>
          <motion.div variants={textVariants}>
            <Button
              size="lg"
              onClick={() => handleShopClick(currentSlide.feature)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 sm:px-10 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {currentSlide.buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-2 sm:left-4">
        <Button size="icon" variant="outline" onClick={() => paginate(-1)} className="bg-white/20 hover:bg-white/40 text-white border-0 rounded-full w-10 h-10 sm:w-14 sm:h-14 backdrop-blur-sm">
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      </div>
      <div className="absolute z-20 top-1/2 -translate-y-1/2 right-2 sm:right-4">
        <Button size="icon" variant="outline" onClick={() => paginate(1)} className="bg-white/20 hover:bg-white/40 text-white border-0 rounded-full w-10 h-10 sm:w-14 sm:h-14 backdrop-blur-sm">
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      </div>

      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ease-in-out ${i === page ? 'bg-red-600 scale-150' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;