import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/src/lib/utils';

export function Header() {
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
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'PRODUCT', href: '#' },
    { name: 'EXPERIENCE', href: '#' },
    { name: 'GALLERY', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md border-white/5 py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-row items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-lime rounded-sm flex items-center justify-center group-hover:bg-white transition-colors">
              <Crown className="w-5 h-5 text-brand-black" strokeWidth={2.5} />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter italic text-white leading-none uppercase">TUBORG</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 opacity-80">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:text-brand-lime transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Button */}
          <div className="hidden md:block">
            <Button variant="gold" size="sm">
              Find a Store
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-semibold tracking-widest text-white hover:text-brand-lime py-3 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="gold" className="w-full">
                  Find a Store
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
