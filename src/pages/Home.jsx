import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BedroomScene from '../components/BedroomScene';

const features = [
  {
    icon: '💎',
    title: 'Loom-to-Living Luxury',
    description: 'Hand-spun silk, New Zealand wool, and signature Zaari finishing for heirloom longevity.'
  },
  {
    icon: '🧭',
    title: 'Curated Design Support',
    description: 'Dedicated stylists co-create palettes, motifs, and sizes tailored to every interior story.'
  },
  {
    icon: '🌱',
    title: 'Earth-Friendly Dyes',
    description: 'Low-impact dyeing, water recycling, and artisan welfare programs certified by CareCraft.'
  },
  {
    icon: '⚡',
    title: 'White-Glove Delivery',
    description: 'Inspected, rolled, and installed by in-house experts across India and the Middle East.'
  }
];

const brandLogos = ['Taj Palaces', 'The Oberoi', 'ITC Royal', 'JW Marriott', 'Four Seasons'];

const showcaseTiles = [
  {
    title: 'Palatial Luxe',
    tag: 'Persian Revival',
    description: '24-knot silk & wool blend with hand-burnished gold threading.',
    gradient: 'from-[#1B2D4A] to-[#0B1424]'
  },
  {
    title: 'Monsoon Botanical',
    tag: 'Modern Organic',
    description: 'Oversized foliage rendered with ombré dye techniques.',
    gradient: 'from-[#D5D8FF] via-[#F6F6FF] to-white'
  },
  {
    title: 'Desert Mirage',
    tag: 'Custom Hospitality',
    description: 'Carved pile heights for luxury suites across West Asia.',
    gradient: 'from-[#F1C27D] via-[#F9E7D1] to-white'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Material Curation',
    description: 'We start with fiber moodboards—silk sheen, bamboo softness, or wool texture—picked for how you live.'
  },
  {
    step: '02',
    title: 'Atelier Weaving',
    description: 'Master artisans tuft, knot, and shear with zero outsourcing so the weave density stays consistent.'
  },
  {
    step: '03',
    title: 'Finishing Ritual',
    description: 'Hand washing, sun drying, and edge binding followed by a 42-point inspection before shipping.'
  }
];

const testimonials = [
  {
    quote: 'Zaari translated our boutique hotel storyboard into a corridor of floating florals. Guests photograph the carpets more than the lobby.',
    name: 'Rhea Malhotra',
    role: 'Creative Director, Atelier Numa'
  },
  {
    quote: 'Their design lab sent 3D renders and yarn poms in a week. The final piece sits beneath our boardroom chandelier like a private gallery.',
    name: 'Farhan Qureshi',
    role: 'Founder, Meridian Realty'
  }
];

const HeroPreview = ({ showScene, customTextureUrl, setCustomTextureUrl }) => (
  <>
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary-300 to-blue-400 rounded-[32px] blur-2xl opacity-70"></div>
      <div className="relative rounded-[32px] bg-white/5 border border-white/15 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_rgba(5,14,31,0.6)]">
        <div className="h-[420px] sm:h-[520px] lg:h-[620px] relative w-full">
          {showScene ? (
            <div className="absolute inset-0 w-full h-full">
              <BedroomScene autoRotate={false} customTextureUrl={customTextureUrl} />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/50">
              Loading Model...
            </div>
          )}
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/70 text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-white/20 backdrop-blur pointer-events-none">
          Drag to rotate · Scroll to zoom
        </div>

        {/* Custom Texture Upload UI */}
        <div className="absolute top-4 right-4 z-10">
          <label className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg cursor-pointer transition-all flex items-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span className="text-sm font-medium">Upload Design</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setCustomTextureUrl(url);
                }
              }}
            />
          </label>
          {customTextureUrl && (
            <button
              onClick={() => setCustomTextureUrl(null)}
              className="mt-2 text-xs text-white/50 hover:text-white bg-black/30 px-2 py-1 rounded w-full backdrop-blur-sm"
            >
              Reset Default
            </button>
          )}
        </div>
      </div>
    </div>

    <div className="hidden sm:flex flex-col gap-1 w-full mt-6 bg-white/90 text-slate-900 px-6 py-4 rounded-2xl shadow-lg border border-white/60">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Artisan Note</p>
      <div className="flex flex-wrap items-center gap-4">
        <div>
          <p className="font-semibold">Luxury Bedroom Collection</p>
          <p className="text-sm text-slate-600">Premium carpets · Modern design · Elegant finish</p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">Featured Design</span>
      </div>
    </div>
  </>
);

const Home = () => {
  const [showScene, setShowScene] = useState(false);
  const [customTextureUrl, setCustomTextureUrl] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowScene(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative min-h-screen h-auto bg-[#050E1F] text-white">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 55%), radial-gradient(circle at 80% 0%, rgba(0,140,255,0.18) 0%, transparent 45%)'
        }}></div>
        <div className="absolute inset-0 mix-blend-screen opacity-10 noise-texture"></div>

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8 order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
                <span className="text-sm tracking-[0.25em] text-accent uppercase">Since 1990</span>
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary-300 rounded-full"></div>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-tight">
                  Bespoke Carpets that feel like <span className="text-gradient">art underfoot</span>
                </h1>
                <p className="mt-6 text-lg text-white/80 max-w-2xl">
                  From royal suites in Bhadohi to beachfront villas in Dubai, Zaari Homes weaves immersive floor stories with couture precision and contemporary calm.
                </p>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="block lg:hidden">
                <div className="mt-8">
                  <HeroPreview showScene={showScene} customTextureUrl={customTextureUrl} setCustomTextureUrl={setCustomTextureUrl} />
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-2xl shadow-accent/30">
                  Explore Collection
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact#contact-form" className="px-8 py-4 rounded-xl border border-white/30 text-white/90 hover:text-white hover:border-white transition">
                  Book a Design Call
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
                {[{ label: 'Years Handcrafting', value: '35+' }, { label: 'Luxury Projects', value: '1200+' }, { label: 'Design Studios Partnered', value: '75' }].map((stat) => (
                  <div key={stat.label} className="min-w-[120px]">
                    <p className="text-3xl font-display text-accent">{stat.value}</p>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block order-2 w-full">
              <HeroPreview showScene={showScene} customTextureUrl={customTextureUrl} setCustomTextureUrl={setCustomTextureUrl} />
            </motion.div>
          </div>

          <div className="mt-16">
            <p className="uppercase text-xs tracking-[0.4em] text-white/60 mb-4">Trusted by interiors that host royalty</p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-white/70 text-sm sm:text-base">
              {brandLogos.map((brand) => (
                <span key={brand} className="tracking-wide">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature showcase */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs mb-3">Signature looks</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">Every weave starts with a moodboard</h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Layered palettes, carved pile heights, and architectural borders designed hand-in-hand with stylists and architects.
              </p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-primary-700 font-semibold">
              Browse full catalogue
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseTiles.map((tile, index) => (
              <motion.div key={tile.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`rounded-3xl p-8 min-h-[320px] flex flex-col justify-between bg-gradient-to-br ${tile.gradient} text-slate-900 shadow-lg relative overflow-hidden`}>
                <span className="text-xs tracking-[0.4em] uppercase text-slate-500">{tile.tag}</span>
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{tile.title}</h3>
                  <p className="text-sm text-slate-600 max-w-sm">{tile.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-accent"></span>
                  Customizable in 3–12 weeks
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.4em] text-xs">Experience
            </p>
            <h2 className="text-4xl font-display font-bold text-slate-900">Crafted to captivate and endure</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/50 backdrop-blur-2xl rounded-2xl p-6 shadow-[0_20px_35px_rgba(15,23,42,0.08)] border border-white/50 hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Studio process</p>
              <h2 className="text-3xl font-display font-bold text-slate-900">From yarn pom to grand reveal</h2>
              <p className="mt-4 text-slate-600">Stay looped with weekly progress capsules, hi-res renders, and on-site installation management.</p>
            </div>
            <Link to="/about" className="text-primary-700 font-semibold">Meet our artisans →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg transition">
                <span className="text-sm font-mono text-accent">{step.step}</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)' }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs text-accent mb-3">Loved by design leaders</p>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold">Stories woven with our patrons</h2>
            </div>
            <Link to="/contact" className="text-white/80 hover:text-white">Start your project →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur">
                <p className="text-lg leading-relaxed mb-6 text-white/90">“{testimonial.quote}”</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Ready to transform your floor plan into a gallery?</h2>
          <p className="text-lg text-white/80 mb-10">Schedule a design discovery call and receive a complimentary digital mockup tailored to your interior palette.</p>
          <Link to="/contact#contact-form" className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-2xl font-semibold shadow-2xl">
            Book Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;