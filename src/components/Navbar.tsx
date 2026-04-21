import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-40 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled ? 'glass py-4' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-2">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-maroon"
        >
          INDU'S
          <span className="block text-[10px] md:text-xs font-sans font-medium tracking-[0.2em] text-wine/60 uppercase mt-1">
            Designer Wear
          </span>
        </motion.div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-maroon">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
        <motion.a
          href="https://wa.me/919876543210?text=Hi, I'd like to book an appointment for a personalized styling session."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-maroon text-ivory px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-wine transition-colors"
        >
          Book Appointment
        </motion.a>
      </div>

      {/* Mobile Menu Trigger */}
      <button 
        className="md:hidden text-maroon p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-ivory z-50 flex flex-col items-center justify-center p-8 gap-8"
          >
            <button 
              className="absolute top-8 right-8 text-maroon p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-maroon hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://wa.me/919876543210?text=Hi, I'd like to book an appointment for a personalized styling session."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-maroon text-ivory w-full py-4 text-sm text-center uppercase tracking-widest font-bold rounded-full mt-8"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
