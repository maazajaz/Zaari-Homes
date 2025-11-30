import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#050E1F]/90 border-b border-white/10 shadow-[0_10px_40px_rgba(5,14,31,0.6)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ZH</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Zaari Homes
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white/80 hover:text-white font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact#contact-form" 
              className="px-6 py-2 rounded-xl bg-white/90 text-[#050E1F] border border-white/40 shadow-lg shadow-[#050E1F]/30 backdrop-blur hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#050E1F]/95 backdrop-blur-xl border-t border-white/20 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact#contact-form" 
              className="w-full text-left px-3 py-2 bg-white/90 text-[#050E1F] rounded-md border border-white/40"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
