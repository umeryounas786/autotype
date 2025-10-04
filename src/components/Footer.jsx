import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  const handleSocialClick = (feature) => {
    toast({
      title: `Navigating to ${feature}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleLinkClick = (feature) => {
    toast({
      title: `Navigating to ${feature}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Tyres', path: '/tyres' },
        { name: 'Wheels', path: '/wheels' },
        { name: 'Services', path: '/services' },
        { name: 'Accessories', path: '/accessories' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'About Us', path: '/about', isToast: true },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Store Locator', path: '/store-locator' },
        { name: 'FAQ', path: '/faq', isToast: true },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Shipping & Delivery', path: '/shipping', isToast: true },
        { name: 'Returns Policy', path: '/returns', isToast: true },
        { name: 'Price Match', path: '/price-match', isToast: true },
        { name: 'Finance Options', path: '/finance', isToast: true },
      ],
    },
  ];

  const socialIcons = [
    { icon: <Facebook />, name: 'Facebook' },
    { icon: <Instagram />, name: 'Instagram' },
    { icon: <Twitter />, name: 'Twitter' },
    { icon: <Youtube />, name: 'Youtube' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>, name: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 sm:pt-20 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <Logo isFooter={true} />
            <p className="text-gray-400">
              Australia's leading destination for premium tyres and wheels at unbeatable prices.
            </p>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" />
              <span>Unit 2/72 Hallam S Rd, Hallam VIC 3803, Australia</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Phone className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" />
              <span>+61387747365</span>
            </div>
            <div className="flex space-x-4 pt-2">
              {socialIcons.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <p className="font-bold text-lg mb-4 text-gray-200">{section.title}</p>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isToast ? (
                      <button
                        onClick={() => handleLinkClick(link.name)}
                        className="text-gray-400 hover:text-red-500 hover:underline transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-red-500 hover:underline transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} A1 AUTO SERVICE & TYRES. All Rights Reserved.</p>
          <p className="mt-2">
            Designed & Developed by{' '}
            <a
              href="https://www.laskontech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Laskon Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;