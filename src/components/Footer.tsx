import React from 'react';
import { motion } from 'framer-motion';
import { 
  HandHeart, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  DollarSign, 
  Newspaper,
  Info,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'about' | 'contact' | 'security' | 'monetization' | 'news') => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', icon: Info, action: () => setCurrentPage('about') },
        { name: 'Contact Us', icon: Mail, action: () => setCurrentPage('contact') },
        { name: 'News & Updates', icon: Newspaper, action: () => setCurrentPage('news') }
      ]
    },
    {
      title: 'Platform',
      links: [
        { name: 'Security & Privacy', icon: Shield, action: () => setCurrentPage('security') },
        { name: 'Monetization', icon: DollarSign, action: () => setCurrentPage('monetization') }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Facebook', icon: Facebook, action: () => window.open('https://facebook.com', '_blank') },
        { name: 'Twitter', icon: Twitter, action: () => window.open('https://twitter.com', '_blank') },
        { name: 'Instagram', icon: Instagram, action: () => window.open('https://instagram.com', '_blank') },
        { name: 'LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com', '_blank') }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <HandHeart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">OrangeHelp</h3>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Connecting hearts, building stronger communities through mutual support and kindness.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={section.title} className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={link.action}
                      className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 OrangeHelp. All rights reserved. Built with ❤️ for community support.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.div>
            <span className="text-gray-400 text-sm">for humanity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;