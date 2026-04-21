import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { MessageCircle, MapPin, Clock, Star, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import SmoothScroll from '@/src/components/SmoothScroll';
import Navbar from '@/src/components/Navbar';
import SectionHeading from '@/src/components/SectionHeading';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-ivory">
        {/* Mobile Sticky Bottom CTA */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 bg-transparent pointer-events-none">
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="w-full flex gap-3 pointer-events-auto"
          >
            <a 
              href="https://wa.me/919876543210" 
              className="flex-1 bg-green-500 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl glass"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hi, I'd like to book an appointment for a personalized styling session."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[1.5] bg-maroon text-gold py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl glass border border-gold/10"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>

        {/* Custom Cursor */}
        <motion.div 
          className="custom-cursor hidden md:block"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
        />
        <motion.div 
          className="custom-cursor-inner hidden md:block"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
        />

        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* New Arrival Reels (Mobile Only) */}
        <section className="md:hidden py-12 px-0 bg-premium-ink overflow-hidden">
          <div className="px-6 mb-8">
            <h2 className="text-3xl font-serif text-gold font-bold">New Arrivals</h2>
            <p className="text-ivory/60 text-sm mt-1">Swipe to browse our latest reels</p>
          </div>
          <div className="flex overflow-x-auto snap-x-mandatory no-scrollbar gap-4 px-6 pb-4">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="flex-none w-[75vw] aspect-[9/16] snap-start rounded-[2rem] overflow-hidden relative group">
                 <img 
                    src={`https://picsum.photos/seed/reel-${i}/1080/1920`} 
                    className="w-full h-full object-cover" 
                    alt={`Fashion Reel ${i}`}
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent">
                    <p className="text-white font-bold text-lg">Indu's Signature {i}</p>
                    <p className="text-gold text-xs uppercase tracking-widest mt-1">Shop Now</p>
                 </div>
                 <div className="absolute top-6 right-6 w-10 h-10 bg-ivory/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Instagram size={18} className="text-white" />
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-ivory relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] group soft-glow"
              >
                <img 
                  src="https://picsum.photos/seed/boutique-legacy/800/1200" 
                  alt="Boutique Heritage" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-maroon/10 mix-blend-multiply" />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <SectionHeading 
                subtitle="Our Heritage"
                title="A Legacy of Elegance Since 2014"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-maroon/80 leading-relaxed font-light"
              >
                For over a decade, Indu’s Designer Wear has been the heartbeat of ethnic fashion in RR Nagar, Bangalore. What started as a passion for traditional craftsmanship has evolved into a premier boutique destination.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-maroon/80 leading-relaxed font-light"
              >
                We believe that every woman deserves an outfit that tells her story. Our curated collections blend the richness of Indian textiles with contemporary silhouettes, creating timeless pieces for your most cherished moments.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-maroon">10+</h4>
                  <p className="text-xs uppercase tracking-widest text-wine/60 mt-2 font-semibold">Years of Excellence</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-maroon">5K+</h4>
                  <p className="text-xs uppercase tracking-widest text-wine/60 mt-2 font-semibold">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Collections Section */}
        <section id="collections" className="py-24 md:py-40 px-6 md:px-12 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <InteractiveCollections />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 md:py-40 px-6 md:px-12 bg-beige relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_80%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <FeatureCard 
                icon={<Star className="w-10 h-10 text-gold" />}
                title="Curated Selection"
                description="Handpicked fabrics and unique designs that stand out in any crowd."
              />
              <FeatureCard 
                icon={<MessageCircle className="w-10 h-10 text-gold" />}
                title="Personal Styling"
                description="Expert advice to help you find the perfect outfit for your body and occasion."
              />
              <FeatureCard 
                icon={<Clock className="w-10 h-10 text-gold" />}
                title="Perfect Fit"
                description="Precision tailoring services to ensure your chosen wear fits like a second skin."
              />
              <FeatureCard 
                icon={<ArrowRight className="w-10 h-10 text-gold" />}
                title="Luxury Experience"
                description="A peaceful, premium environment where your comfort is our priority."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 md:py-40 bg-ivory overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
          <div className="px-6 md:px-12 relative z-10">
            <SectionHeading 
              subtitle="Kind Words"
              title="Stories of Elegance"
              center
            />
            <div className="mt-20">
              <TestimonialsMarquee />
            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section id="visit" className="py-24 md:py-40 px-6 md:px-12 bg-beige overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 glass rounded-[3rem] overflow-hidden">
            <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-8">
              <SectionHeading 
                subtitle="Locate Us"
                title="Visit Our Boutique"
                className="mb-8"
              />
              <p className="text-xl font-light text-maroon/70">
                Experience the magic in person. Nestled in a peaceful corner of RR Nagar, our boutique offers a serene environment for you to explore and shop at leisure.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-maroon/5 rounded-2xl">
                    <MapPin className="text-maroon" />
                  </div>
                  <div>
                    <h5 className="font-bold text-maroon mb-1">Address</h5>
                    <p className="text-maroon/60">RR Nagar, Near Ideal Homes Circle, Bangalore, Karnataka</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-maroon/5 rounded-2xl">
                    <Clock className="text-maroon" />
                  </div>
                  <div>
                    <h5 className="font-bold text-maroon mb-1">Store Hours</h5>
                    <p className="text-maroon/60">Mon - Sat: 11:00 AM - 08:30 PM<br />Sun: 12:00 PM - 07:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <motion.a 
                  href="https://www.google.com/maps/dir/?api=1&destination=RR+Nagar+Bangalore+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block bg-maroon text-ivory px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-wine transition-all"
                >
                  Get Directions
                </motion.a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[500px] lg:h-auto grayscale contrast-125 transition-all duration-700">
               <div className="w-full h-full bg-ivory relative overflow-hidden">
                 <img 
                    src="https://picsum.photos/seed/map-location/1000/1000" 
                    className="w-full h-full object-cover" 
                    alt="Store Location Map"
                    referrerPolicy="no-referrer"
                  />
                 <div className="absolute inset-0 bg-maroon/10 mix-blend-multiply pointer-events-none" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <motion.div 
                     animate={{ y: [0, -20, 0] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="bg-white p-4 rounded-full shadow-2xl border-4 border-maroon soft-glow"
                   >
                     <MapPin className="text-maroon w-8 h-8" fill="currentColor" fillOpacity={0.2} />
                   </motion.div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-premium-ink text-ivory py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-b border-ivory/10 pb-20">
            <div className="max-w-md">
              <div className="text-3xl font-serif font-bold tracking-tighter text-gold mb-6">
                INDU'S
                <span className="block text-xs font-sans font-medium tracking-[0.2em] text-ivory/60 uppercase mt-1">
                  Designer Wear
                </span>
              </div>
              <p className="text-ivory/50 leading-relaxed font-light mb-8">
                Curating timeless ethnic fashion with a personalized touch. Celebrating the inner radiance of every woman through bespoke designer wear.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Facebook size={20} />} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm uppercase tracking-widest font-medium">
              <div className="flex flex-col gap-6">
                <span className="text-gold opacity-50">Quick Links</span>
                <a href="#" className="hover:text-gold transition-colors">Home</a>
                <a href="#about" className="hover:text-gold transition-colors">About</a>
                <a href="#collections" className="hover:text-gold transition-colors">Collections</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-gold opacity-50">Assistance</span>
                <a href="#" className="hover:text-gold transition-colors">Book Appt</a>
                <a href="#" className="hover:text-gold transition-colors">Sizing Guide</a>
                <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              </div>
              <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                <span className="text-gold opacity-50">Contact</span>
                <p className="normal-case tracking-normal text-ivory/60 font-light">+91 9876543210</p>
                <p className="normal-case tracking-normal text-ivory/60 font-light">hello@induswear.com</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-xs text-ivory/30 tracking-widest uppercase">
              &copy; 2026 Indu’s Designer Wear – RR Nagar. All Rights Reserved.
            </p>
            <div className="text-xs text-ivory/30 tracking-widest uppercase flex gap-8">
              <span>Handcrafted by Indu</span>
              <span>Made in Bangalore</span>
            </div>
          </div>
        </footer>

        {/* Sticky WhatsApp Trigger (Desktop Only) */}
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl"
        >
          <MessageCircle size={32} />
        </motion.a>
      </div>
    </SmoothScroll>
  );
}

function InteractiveCollections() {
  const [activeCategory, setActiveCategory] = useState('Lehengas');
  const categories = ['Lehengas', 'Kurtis', 'Indo-Western'];
  
  const products = [
    { id: 1, title: "Royal Maroon Lehenga", category: "Lehengas", price: "₹45,000", img: "https://picsum.photos/seed/lehenga-1/800/1200", details: "Hand-embroidered silk with zardosi work." },
    { id: 2, title: "Golden Ivory Set", category: "Lehengas", price: "₹52,000", img: "https://picsum.photos/seed/lehenga-2/800/1200", details: "Classic heritage weave with gold motifs." },
    { id: 3, title: "Emerald Velvet", category: "Lehengas", price: "₹38,500", img: "https://picsum.photos/seed/lehenga-3/800/1200", details: "Deep emerald velvet with silver threadwork." },
    { id: 4, title: "Floral Silk Kurti", category: "Kurtis", price: "₹8,900", img: "https://picsum.photos/seed/kurti-1/800/1200", details: "Pure raw silk with hand-painted florals." },
    { id: 5, title: "Minimal Linen", category: "Kurtis", price: "₹6,500", img: "https://picsum.photos/seed/kurti-2/800/1200", details: "Breathable linen with delicate lace edges." },
    { id: 6, title: "Chanderi Classic", category: "Kurtis", price: "₹12,400", img: "https://picsum.photos/seed/kurti-3/800/1200", details: "Authentic Chanderi with block-printed patterns." },
    { id: 7, title: "Slit Tunic Set", category: "Indo-Western", price: "₹18,500", img: "https://picsum.photos/seed/indo-1/800/1200", details: "Contemporary slit tunic paired with dhoti pants." },
    { id: 8, title: "Jacket Anarkali", category: "Indo-Western", price: "₹24,000", img: "https://picsum.photos/seed/indo-2/800/1200", details: "Layered anarkali with a structured silk jacket." },
    { id: 9, title: "Cape Saree", category: "Indo-Western", price: "₹21,500", img: "https://picsum.photos/seed/indo-3/800/1200", details: "Modern pre-draped saree with a sheer cape." },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <SectionHeading 
          subtitle="Discover Our Art"
          title="Curated Collections"
          center
        />
        
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-3 md:gap-8 border-b border-maroon/10 pb-6 px-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-maroon text-ivory shadow-lg soft-glow" 
                  : "bg-white/50 text-maroon/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Swipe Gallery on Mobile, Grid on Desktop */}
      <motion.div 
        layout
        className="flex md:grid overflow-x-auto md:overflow-visible snap-x-mandatory no-scrollbar md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 pb-8 md:pb-0"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-none w-[85vw] md:w-auto h-[550px] md:h-[600px] snap-start rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass soft-glow"
            >
              {/* Image with Zoom */}
              <motion.img 
                src={product.img} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Details */}
              <div className="absolute inset-x-0 bottom-0 p-8 glass-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-ivory">{product.title}</h3>
                    <p className="text-gold font-bold tracking-widest text-sm mt-1">{product.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gold rounded-full text-maroon shadow-lg"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
                <p className="text-ivory/60 text-sm font-light leading-relaxed">
                  {product.details}
                </p>
                <div className="pt-4">
                  <motion.a 
                    href={`https://wa.me/919876543210?text=Hi, I'm interested in the ${product.title} from your collections.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-4 bg-maroon text-gold text-xs text-center uppercase tracking-widest font-bold rounded-xl hover:bg-wine transition-colors"
                  >
                    Shop The Look
                  </motion.a>
                </div>
              </div>

              {/* Tag persistent label */}
              <div className="absolute top-6 left-6 px-4 py-2 glass opacity-90 rounded-full">
                <span className="text-[10px] uppercase tracking-tighter text-maroon font-bold">New Arrival</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const images = [
    "https://picsum.photos/seed/fashion-comfort-1/1920/1080",
    "https://picsum.photos/seed/fashion-comfort-2/1920/1080",
    "https://picsum.photos/seed/fashion-comfort-3/1920/1080",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => (prev + 1) % images.length), 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-ivory">
      {/* Soft Lighting Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(93,16,16,0.15)_100%)]" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-ivory" />
      
      <AnimatePresence mode="wait">
        <motion.div
           key={index}
           initial={{ scale: 1.1, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           exit={{ scale: 0.95, opacity: 0 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="absolute inset-0"
        >
          <img 
            src={images[index]} 
            className="w-full h-full object-cover" 
            alt="Luxury Fashion Hero" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-maroon/10 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-maroon/60 uppercase tracking-[0.4em] font-bold mb-6 text-shadow-soft"
        >
          Bespoke Artistry Since 2014
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-maroon leading-[1.1] md:leading-tight tracking-tight mb-10 drop-shadow-sm"
        >
          Where Tradition <br /> <span className="italic font-light text-gold text-shadow-soft">Meets Elegance.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
           <motion.a 
             href="#collections"
             whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
             whileTap={{ scale: 0.95 }}
             className="inline-block bg-maroon text-ivory px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl transition-all"
           >
             Explore Collections
           </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
         <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2 }}
           className="w-px h-16 bg-maroon/20"
         />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-12 glass rounded-[3rem] hover:bg-white/60 transition-all duration-700 flex flex-col items-center text-center group cursor-default soft-glow hover:scale-105"
    >
      <div className="mb-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 text-gold drop-shadow-md">
        {icon}
      </div>
      <h4 className="text-3xl font-serif font-bold text-maroon mb-6">{title}</h4>
      <p className="text-wine/70 font-light leading-relaxed group-hover:text-maroon transition-colors">{description}</p>
    </motion.div>
  );
}

function TestimonialsMarquee() {
  const reviews = [
    { name: "Ananya Sharma", role: "Bride-to-be", text: "Found my dream lehenga here! The personalized attention Indu gives is unmatched. She understands exactly what suits you." },
    { name: "Priya Rao", role: "Tech Professional", text: "The kurti designs are so unique. I get compliments every time I wear an Indu's original to office events." },
    { name: "Sneha Kapoor", role: "Wedding Guest", text: "Best boutique in RR Nagar. The tailoring fit was perfect in the first go. Highly recommend for any festive shopping." },
    { name: "Meera Reddy", role: "Homemaker", text: "A legacy store that truly values customers. Been coming here for years and the quality is always premium." },
  ];

  return (
    <div className="overflow-hidden flex gap-12 animate-marquee py-12 px-4">
      {[...reviews, ...reviews].map((rev, i) => (
        <div 
          key={i} 
          className="w-[85vw] md:w-[550px] shrink-0 p-10 md:p-16 glass rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between group hover:border-gold/30 transition-all soft-glow"
        >
          <div>
            <div className="flex text-gold mb-8 shrink-0 drop-shadow-md">
               {[1, 2, 3, 4, 5].map(j => <Star key={j} size={20} fill="currentColor" />)}
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-maroon/80 leading-relaxed group-hover:text-maroon transition-colors">
              "{rev.text}"
            </p>
          </div>
          <div className="mt-12 flex items-center gap-6">
             <div className="w-16 h-16 rounded-full bg-maroon text-ivory flex items-center justify-center text-2xl font-serif font-bold italic soft-glow">
               {rev.name[0]}
             </div>
             <div>
               <h5 className="text-xl font-bold text-maroon leading-none">{rev.name}</h5>
               <p className="text-xs uppercase tracking-[0.2em] text-wine/40 mt-2 font-bold">{rev.role}</p>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <motion.a 
      href="#"
      whileHover={{ y: -5, scale: 1.1 }}
      className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold text-gold transition-all duration-300"
    >
      {icon}
    </motion.a>
  );
}
