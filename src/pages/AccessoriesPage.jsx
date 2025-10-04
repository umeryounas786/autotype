import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingCart, Wrench, Shirt, Circle, Disc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import PageHeader from '@/components/PageHeader';

const accessoryCategories = [
  {
    category: 'Hub Rings',
    icon: <Circle className="w-5 h-5 mr-2" />,
    items: [
      { id: 1, name: 'Hub Rings 110.1 - 100.0', price: 89.00, imageDescription: 'Set of metal hub centric rings for wheels' },
      { id: 2, name: 'Hub Rings 110.1 - 106.0', price: 89.00, imageDescription: 'Set of metal hub centric rings for wheels' },
      { id: 3, name: 'Hub Rings 110.1 - 67.0', price: 89.00, imageDescription: 'Set of metal hub centric rings for wheels' },
      { id: 4, name: 'Hub Rings 110.1 - 92.3', price: 89.00, imageDescription: 'Set of metal hub centric rings for wheels' },
      { id: 5, name: 'Hub Rings 110.1 - 93.0', price: 89.00, imageDescription: 'Set of metal hub centric rings for wheels' },
      { id: 6, name: 'Hub Rings 73.1 - 54.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 7, name: 'Hub Rings 73.1 - 56.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 8, name: 'Hub Rings 73.1 - 56.5', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 9, name: 'Hub Rings 73.1 - 57.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 10, name: 'Hub Rings 73.1 - 58.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 11, name: 'Hub Rings 73.1 - 59.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 12, name: 'Hub Rings 73.1 - 59.6', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 13, name: 'Hub Rings 73.1 - 60.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 14, name: 'Hub Rings 73.1 - 63.4', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 15, name: 'Hub Rings 73.1 - 64.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 16, name: 'Hub Rings 73.1 - 65.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 17, name: 'Hub Rings 73.1 - 66.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 18, name: 'Hub Rings 73.1 - 66.6', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 19, name: 'Hub Rings 73.1 - 66.7', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 20, name: 'Hub Rings 73.1 - 67.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 21, name: 'Hub Rings 73.1 - 69.6', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 22, name: 'Hub Rings 73.1 - 70.1', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 23, name: 'Hub Rings 73.1 - 70.6', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 24, name: 'Hub Rings 73.1 - 71.5', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
      { id: 25, name: 'Hub Rings 73.1 - 72.6', price: 39.00, imageDescription: 'Set of plastic hub centric rings for wheels' },
    ],
  },
  {
    category: 'Locknuts',
    icon: <Wrench className="w-5 h-5 mr-2" />,
    items: [
      { id: 26, name: 'Locknuts 1/2" Closed', price: 29.00, imageDescription: 'Set of closed-end 1/2 inch wheel locknuts' },
      { id: 27, name: 'Locknuts 1/2" Open', price: 29.00, imageDescription: 'Set of open-end 1/2 inch wheel locknuts' },
      { id: 28, name: 'Locknuts 12x1.25 Closed', price: 29.00, imageDescription: 'Set of closed-end 12x1.25 wheel locknuts' },
      { id: 29, name: 'Locknuts 12x1.25 Open', price: 29.00, imageDescription: 'Set of open-end 12x1.25 wheel locknuts' },
      { id: 30, name: 'Locknuts 12x1.5 Closed', price: 29.00, imageDescription: 'Set of closed-end 12x1.5 wheel locknuts' },
      { id: 31, name: 'Locknuts 12x1.5 Open', price: 29.00, imageDescription: 'Set of open-end 12x1.5 wheel locknuts' },
      { id: 32, name: 'Locknuts 14x1.5 Closed', price: 29.00, imageDescription: 'Set of closed-end 14x1.5 wheel locknuts' },
      { id: 33, name: 'Locknuts 14x1.5 Open', price: 29.00, imageDescription: 'Set of open-end 14x1.5 wheel locknuts' },
    ],
  },
  {
    category: 'Simmons Caps',
    icon: <Disc className="w-5 h-5 mr-2" />,
    items: [
      { id: 34, name: 'Simmons Gold Black Cap', price: 50.00, imageDescription: 'Simmons wheels center cap in gold and black' },
      { id: 35, name: 'Simmons Hex Cap', price: 50.00, imageDescription: 'Simmons wheels hex-style center cap' },
      { id: 36, name: 'Simmons Red Black Cap', price: 50.00, imageDescription: 'Simmons wheels center cap in red and black' },
      { id: 37, name: 'Simmons Silver Black Cap', price: 50.00, imageDescription: 'Simmons wheels center cap in silver and black' },
      { id: 38, name: 'Simmons Silver White Cap', price: 50.00, imageDescription: 'Simmons wheels center cap in silver and white' },
    ],
  },
  {
    category: 'T-Shirt',
    icon: <Shirt className="w-5 h-5 mr-2" />,
    items: [
      { id: 39, name: 'Black Simmons T-Shirt', price: 35.00, imageDescription: 'Black t-shirt with Simmons logo, available in multiple sizes' },
    ],
  },
  {
    category: 'Wheel Nuts',
    icon: <Wrench className="w-5 h-5 mr-2" />,
    items: [
      { id: 40, name: 'Wheel Nuts 1/2" Closed', price: 49.00, imageDescription: 'Set of closed-end 1/2 inch wheel nuts' },
      { id: 41, name: 'Wheel Nuts 1/2" Open', price: 49.00, imageDescription: 'Set of open-end 1/2 inch wheel nuts' },
      { id: 42, name: 'Wheel Nuts 12x1.25 Closed', price: 49.00, imageDescription: 'Set of closed-end 12x1.25 wheel nuts' },
      { id: 43, name: 'Wheel Nuts 12x1.25 Open', price: 49.00, imageDescription: 'Set of open-end 12x1.25 wheel nuts' },
      { id: 44, name: 'Wheel Nuts 12x1.5 Closed', price: 49.00, imageDescription: 'Set of closed-end 12x1.5 wheel nuts' },
      { id: 45, name: 'Wheel Nuts 12x1.5 Open', price: 49.00, imageDescription: 'Set of open-end 12x1.5 wheel nuts' },
      { id: 46, name: 'Wheel Nuts 14x1.5 Closed', price: 49.00, imageDescription: 'Set of closed-end 14x1.5 wheel nuts' },
      { id: 47, name: 'Wheel Nuts 14x1.5 Open', price: 49.00, imageDescription: 'Set of open-end 14x1.5 wheel nuts' },
    ],
  },
  {
    category: 'Wheel Nuts & Locknuts Packages',
    icon: <Wrench className="w-5 h-5 mr-2" />,
    items: [
      { id: 48, name: '1/2" Closed Wheel Nuts and Locknuts Package', price: 79.00, imageDescription: 'Complete package of 1/2 inch closed wheel nuts and locknuts' },
      { id: 49, name: '12x1.25 Closed Wheel Nuts and Locknuts Package', price: 79.00, imageDescription: 'Complete package of 12x1.25 closed wheel nuts and locknuts' },
      { id: 50, name: '12x1.5 Closed Wheel Nuts and Locknuts Package', price: 79.00, imageDescription: 'Complete package of 12x1.5 closed wheel nuts and locknuts' },
      { id: 51, name: '14x1.5 Closed Wheel Nuts and Locknuts Package', price: 79.00, imageDescription: 'Complete package of 14x1.5 closed wheel nuts and locknuts' },
    ],
  },
];

const AccessoriesPage = () => {
  const sectionRefs = useRef({});

  const handleAddToCart = (name) => {
    toast({
      title: `🛒 Added to Cart`,
      description: `${name} has been added to your cart.`,
    });
    toast({
      title: '🚧 Feature Incomplete',
      description: "Shopping cart feature isn't implemented yet—but you can request it next! 🚀",
      variant: 'destructive',
    });
  };

  const scrollToCategory = (category) => {
    sectionRefs.current[category]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Car Accessories</title>
        <meta name="description" content="Browse our wide selection of car accessories, from performance parts to interior comforts. Find everything you need to upgrade your ride." />
      </Helmet>
      <PageHeader 
        title="Car Accessories"
        subtitle="Enhance your vehicle's performance, style, and comfort with our curated selection of accessories."
        graphic="accessories"
      />
      <div className="bg-white text-gray-900">
        <div className="container mx-auto px-4 pb-12 sm:pb-16">
          <motion.div 
            className="sticky top-20 z-40 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-3 mb-12 border border-gray-200"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center flex-wrap gap-2">
              {accessoryCategories.map((cat) => (
                <Button
                  key={cat.category}
                  variant="ghost"
                  onClick={() => scrollToCategory(cat.category)}
                  className="text-gray-700 hover:bg-red-100 hover:text-red-600 transition-all duration-300"
                >
                  {cat.icon}
                  {cat.category}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-20">
            {accessoryCategories.map((category, categoryIndex) => (
              <motion.section 
                key={category.category}
                id={category.category}
                ref={el => sectionRefs.current[category.category] = el}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="scroll-mt-40"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-red-500 pl-4 flex items-center">
                  {category.icon} {category.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group flex flex-col"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)" }}
                    >
                      <div className="relative overflow-hidden h-56 bg-gray-100">
                        <img class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" alt={item.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-base font-semibold text-gray-900 mb-2 flex-grow h-10">{item.name}</h3>
                        <p className="text-2xl font-bold text-red-500 mb-4">${item.price.toFixed(2)}</p>
                        <Button onClick={() => handleAddToCart(item.name)} className="w-full mt-auto bg-red-600 hover:bg-red-700">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessoriesPage;