import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    toast({
      title: "🛒 Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    toast({
      title: "👁️ Quick View",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "💔 Removed from Favorites" : "❤️ Added to Favorites",
      description: `${product.name} ${isFavorited ? 'removed from' : 'added to'} your favorites.`,
    });
  };
  
  const handleCardClick = () => {
    toast({
      title: `Viewing ${product.name}`,
      description: "🚧 Product details page is not implemented yet. You can request it! 🚀",
    });
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      onClick={handleCardClick}
      className="bg-white/60 backdrop-blur-xl border border-gray-200/80 rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(220, 38, 38, 0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden bg-gray-100 h-64">
        <motion.div
          className="w-full h-full"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt={product.image} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
        </motion.div>
        
        {discount > 0 && (
          <motion.div 
            className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md"
          >
            -{discount}%
          </motion.div>
        )}

        <motion.div 
          className="absolute top-4 right-4 flex flex-col space-y-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Button
            size="icon"
            variant="outline"
            onClick={handleFavorite}
            className={`bg-white/80 backdrop-blur-sm hover:bg-red-50 border-gray-300 ${isFavorited ? 'text-red-600' : 'text-gray-600'}`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={handleQuickView}
            className="bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-600 border-gray-300"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      <div className="p-5">
        <div className="text-sm text-red-600 font-semibold mb-2">
          {product.brand}
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">
          {product.name}
        </h3>

        <div className="text-gray-500 mb-3 text-sm">
          {product.size}
        </div>

        <div className="flex flex-wrap gap-1 mb-4 h-6">
          {product.features.slice(0, 2).map((feature, index) => (
            <span 
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={handleAddToCart}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;