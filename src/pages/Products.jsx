import { useState } from 'react';
import { motion } from 'framer-motion';
import CarpetScene from '../components/CarpetScene';

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
      <section className="bg-gradient-to-r from-primary-600 to-blue-600 text-white py-12 sm:py-16 md:py-20 relative z-10">
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
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-4 sm:mb-6">
              Interactive 3D Preview
            </h2>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <CarpetScene autoRotate={false} />
            </div>
            <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
              <span className="hidden sm:inline">Drag to rotate • Scroll to zoom • Click and drag to explore</span>
              <span className="sm:hidden">Drag to rotate and explore</span>
            </p>
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
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:shadow-2xl group"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
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
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow duration-300">
              Request Custom Design
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
