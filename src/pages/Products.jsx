import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Carpets' },
    { id: 'persian', name: 'Persian' },
    { id: 'modern', name: 'Modern' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'custom', name: 'Custom' }
  ];

  const products = [
    {
      id: 1,
      name: 'Royal Persian',
      category: 'persian',
      price: '$2,499',
      size: '8x10 ft',
      description: 'Handwoven Persian carpet with intricate traditional patterns',
      colors: ['#8B4513', '#DC143C', '#4B0082']
    },
    {
      id: 2,
      name: 'Modern Minimalist',
      category: 'modern',
      price: '$1,899',
      size: '6x9 ft',
      description: 'Contemporary design with clean lines and neutral tones',
      colors: ['#D3D3D3', '#696969', '#FFFFFF']
    },
    {
      id: 3,
      name: 'Heritage Classic',
      category: 'traditional',
      price: '$3,299',
      size: '9x12 ft',
      description: 'Traditional motifs with rich, warm colors',
      colors: ['#8B4513', '#D4AF37', '#800020']
    },
    {
      id: 4,
      name: 'Silk Luxury',
      category: 'persian',
      price: '$4,999',
      size: '8x10 ft',
      description: 'Premium silk carpet with exquisite craftsmanship',
      colors: ['#FFD700', '#C0C0C0', '#4B0082']
    },
    {
      id: 5,
      name: 'Geometric Modern',
      category: 'modern',
      price: '$1,599',
      size: '5x8 ft',
      description: 'Bold geometric patterns for contemporary spaces',
      colors: ['#000000', '#FFFFFF', '#FF6347']
    },
    {
      id: 6,
      name: 'Custom Design',
      category: 'custom',
      price: 'Quote',
      size: 'Custom',
      description: 'Design your own unique carpet with our artisans',
      colors: ['#8B4513', '#D4AF37', '#DC143C', '#4B0082']
    }
  ];

  const services = [
    {
      title: 'Palette Concierge',
      description: 'We ship curated yarn-pom boxes and digital renders that mirror your lighting and flooring.'
    },
    {
      title: 'On-Site Measuring',
      description: 'White-glove teams map odd layouts, create cut-outs, and guide pile heights for each zone.'
    },
    {
      title: 'Aftercare Program',
      description: 'Climate-specific maintenance plans, stain-rescue kits, and annual spa treatments for your carpets.'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-700 to-blue-600 text-white py-12 sm:py-16 md:py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.3) 0%, transparent 45%)' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 sm:mb-6"
          >
            Our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl opacity-90 px-4"
          >
            Explore our exquisite range of handcrafted carpets
          </motion.p>
        </div>
      </section>

      {/* 3D Preview Section */}
      <section className="py-8 sm:py-12 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-4 sm:mb-6">
              Interactive 3D Preview
            </h2>
            <div className="h-[320px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/60">
              <iframe 
                title="Bed Room 01 - Baked" 
                frameBorder="0" 
                allowFullScreen 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true" 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/08d36d567bdc4532965f881a3c3d8795/embed?autostart=1&ui_theme=dark"
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
              <span className="hidden sm:inline">Drag to rotate • Scroll to zoom • Click and drag to explore</span>
              <span className="sm:hidden">Drag to rotate and explore</span>
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-left text-sm text-gray-600">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-1">Fiber mix</p>
                <p className="font-semibold text-slate-800">Silk / New Zealand Wool</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-1">Lead time</p>
                <p className="font-semibold text-slate-800">6 – 10 weeks</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-1">Finish</p>
                <p className="font-semibold text-slate-800">Hand Sheared Luxe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-white/60 hover:border-primary-200 hover:shadow-2xl group"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2">
                      {product.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-lg shadow-md"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Size: {product.size}</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Strip */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Design lab</p>
              <h2 className="text-3xl font-display font-semibold">Concierge services for architects & collectors</h2>
            </div>
            <Link to="/contact#contact-form" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow">Share your brief</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We offer custom designs tailored to your exact specifications
            </p>
            <Link to="/contact#contact-form" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow duration-300">
              Request Custom Design
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
