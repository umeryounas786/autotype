import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tyres', path: '/tyres' },
  { name: 'Wheels', path: '/wheels' },
  { name: 'Services', path: '/services' },
  { name: 'Accessories', path: '/accessories' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuContainerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileMenuItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg text-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform ${
                    isActive ? 'text-gray-900 after:scale-x-100' : 'text-gray-600 hover:text-gray-900 after:hover:scale-x-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-red-100 hover:text-red-600">
              <Phone className="w-4 h-4 mr-2" />
              +61387747365
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/store-locator">
                <MapPin className="w-4 h-4 mr-2" />
                Stores
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-red-600 p-2 -mr-2">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-200">
                <div onClick={toggleMenu}>
                  <Logo />
                </div>
                <button onClick={toggleMenu} className="text-gray-600 hover:text-red-600 p-2 -mr-2">
                  <X className="w-7 h-7" />
                </button>
              </div>
              <motion.nav
                variants={mobileMenuContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col p-5 space-y-2"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={mobileMenuItemVariants}>
                    <NavLink
                      to={link.path}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block text-xl font-medium rounded-md p-4 transition-colors duration-300 ${
                          isActive ? 'text-white bg-red-600' : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>
              <div className="absolute bottom-0 left-0 w-full p-5 border-t border-gray-200 space-y-4">
                 <Button variant="ghost" size="lg" className="text-gray-700 hover:bg-red-100 hover:text-red-600 w-full justify-start text-lg">
                    <Phone className="w-5 h-5 mr-3" />
                    +61387747365
                </Button>
                <Button asChild size="lg" className="w-full text-lg bg-red-600 hover:bg-red-700 text-white">
                  <Link to="/store-locator" onClick={toggleMenu}>
                    <MapPin className="w-5 h-5 mr-3" />
                    Stores
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;