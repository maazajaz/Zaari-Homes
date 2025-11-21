import { motion } from 'framer-motion';

const About = () => {
  const milestones = [
    { year: '1990', title: 'Founded', description: 'Zaari Homes was established with a vision for excellence' },
    { year: '2000', title: 'Expansion', description: 'Opened state-of-the-art manufacturing facility' },
    { year: '2010', title: 'Innovation', description: 'Introduced eco-friendly and sustainable practices' },
    { year: '2020', title: 'Global Reach', description: 'Expanded to serve customers worldwide' }
  ];

  const values = [
    {
      icon: '💎',
      title: 'Quality First',
      description: 'We never compromise on the quality of materials or craftsmanship'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and ethical sourcing'
    },
    {
      icon: '🎯',
      title: 'Customer Focus',
      description: 'Your satisfaction and vision drive everything we do'
    },
    {
      icon: '✋',
      title: 'Craftsmanship',
      description: 'Preserving traditional techniques while embracing innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 sm:mb-6 px-4">
              About Zaari Homes
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Crafting luxury and comfort for over three decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="pb-12 -mt-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 shadow-2xl">
            <p className="text-lg leading-relaxed mb-4">
              “Zaari Homes is less a factory and more a slow atelier where dyes simmer, looms sing, and every motif is debated over chai.”
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Owner · Roaif Intekhab</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 1990, Zaari Homes began with a simple mission: to bring 
                the finest handcrafted carpets to discerning customers who appreciate 
                quality and artistry.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the years, we've grown from a small workshop to a renowned 
                manufacturer, but our commitment to excellence remains unchanged. 
                Each carpet we create is a testament to our dedication to 
                traditional craftsmanship and innovative design.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve customers worldwide, offering everything 
                from classic Persian designs to contemporary custom creations, all 
                crafted with the same passion and attention to detail that defined 
                our beginnings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary-600 mb-4">30+</div>
                  <div className="text-2xl font-semibold text-gray-800">Years of Excellence</div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-primary-600">10k+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-600">500+</div>
                      <div className="text-sm text-gray-600">Unique Designs</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped our success</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:mb-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-xl font-semibold mb-2">{milestone.title}</div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our work</p>
          </motion.div>

                    {/* Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Meet the Artisans Behind Your Carpet
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our skilled team of craftspeople bring decades of experience to every piece
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow duration-300">
              Visit Our Workshop
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
