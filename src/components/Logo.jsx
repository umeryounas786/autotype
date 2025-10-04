import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = ({ isFooter = false }) => {
  const textColor = isFooter ? 'text-white' : 'text-gray-900';
  const redColor = 'text-red-500';

  return (
    <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-105" aria-label="A1 Auto Service & Tyres Home">
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <motion.svg
          className="absolute w-full h-full text-gray-300"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ loop: Infinity, ease: "linear", duration: 10 }}
        >
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        </motion.svg>
        <motion.svg
          className={`absolute w-10/12 h-10/12 ${isFooter ? 'text-gray-400' : 'text-gray-700'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: -360 }}
          transition={{ loop: Infinity, ease: "linear", duration: 6 }}
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        </motion.svg>
      </div>
      <div className="flex flex-col justify-center">
        <span className={`text-xl sm:text-2xl font-extrabold tracking-wide ${redColor}`}>
          A1 AUTO
        </span>
        <span className={`text-xs sm:text-sm font-bold tracking-wider ${textColor} -mt-1`}>
          SERVICE & TYRES
        </span>
      </div>
    </Link>
  );
};

export default Logo;