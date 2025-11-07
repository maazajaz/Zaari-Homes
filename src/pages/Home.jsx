import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CarpetScene from '../components/CarpetScene';

// A simple spinner component using Tailwind CSS
const Spinner = () => (
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
);

const Home = () => {
  const features = [
    {
      icon: '耳',
      title: 'Premium Quality',
      description: 'Handcrafted with the finest materials for lasting beauty'
    },
    {
      icon: '笨ｨ',
      title: 'Custom Designs',
      description: 'Unique patterns tailored to your space and style'
    },
    {
      icon: '訣',
      title: 'Eco-Friendly',
      description: 'Sustainable materials and ethical manufacturing'
    },
    {
      icon: '囹',
      title: 'Fast Delivery',
      description: 'Quick shipping and professional installation'
    }
  ];

  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScene(true);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with 3D Carpet */}
      <section className="relative min-h-screen h-auto bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-8 md:py-0">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="flex items-center justify-center py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-4 md:space-y-6 text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block"
              >
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase shadow-md">
                  ✨ Premium Quality Since 1990
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                <span className="text-gray-900">Transform</span>
                <span className="block bg-gradient-to-r from-primary-600 via-blue-600 to-primary-700 bg-clip-text text-transparent">
                  Your Space
                </span>
                <span className="block text-gray-800 text-2xl sm:text-3xl md:text-4xl mt-2 font-normal">
                  with Luxury Carpets
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              >
                Experience the perfect blend of <span className="font-semibold text-primary-600">artistry and comfort</span>. 
                Each carpet is a masterpiece designed to elevate your interior.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 pt-2 md:pt-4"
              >
                <Link
                  to="/products"
                  className="group bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Explore Collection
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-gray-300 bg-white text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:border-primary-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Get Quote
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4 md:pt-6 border-t border-gray-200 mt-6 md:mt-8"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">35+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">10k+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">50+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Unique Designs</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Model Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center pb-12 md:pb-20 relative"
          >
            {/* Floating decorative elements - hidden on mobile */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden md:block absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-primary-400 to-blue-400 rounded-3xl opacity-20 blur-2xl"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="hidden md:block absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-primary-400 rounded-full opacity-20 blur-3xl"
            />

            <div className="w-full max-w-4xl aspect-video md:aspect-[16/10] relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-500 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-40 animate-pulse"></div>
              
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white border-2 border-white/50 h-full flex items-center justify-center backdrop-blur-sm">
                {showScene ? (
                  <>
                    <CarpetScene autoRotate={true} />
                    
                    {/* Interactive hint - adjusted for mobile */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 }}
                      className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-3 py-2 md:px-5 md:py-3 rounded-full text-xs sm:text-sm backdrop-blur-md flex items-center gap-2 shadow-lg"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="font-medium hidden sm:inline">Drag to rotate • Scroll to zoom</span>
                      <span className="font-medium sm:hidden">Drag to rotate</span>
                    </motion.div>
                  </>
                ) : (
                  <div className="text-center px-4">
                    <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20 mb-4">
                      <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-700 font-semibold text-base md:text-lg">Loading 3D Experience</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-2">Preparing your masterpiece...</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose Zaari Homes?
            </h2>
            <p className="text-xl text-gray-600">
              Unmatched quality and service in every thread
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border border-gray-100"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our experts for a personalized consultation
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow duration-300"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;