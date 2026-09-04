import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Search } from 'lucide-react';
import { Button } from './Button';

export function StoreFinder() {
  return (
    <section className="bg-brand-black py-24 relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
             backgroundSize: '24px 24px',
           }}
      />
      
      {/* Gradient Overlay for map */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-green/10 to-brand-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-brand-gold font-bold tracking-widest text-sm mb-4 uppercase">
                Find Turbo Borg
              </h4>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.9] text-white mb-6">
                NEAR YOU
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
                Find stores, bars and restaurants where Turbo Borg is available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/50">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter your location"
                    className="block w-full pl-12 pr-4 h-14 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-brand-lime transition-colors focus:bg-white/10"
                  />
                </div>
                <Button className="h-14 px-8 shrink-0">
                  SEARCH
                </Button>
              </div>

              <Button variant="outline" className="w-full sm:w-auto">
                <MapPin className="w-4 h-4 mr-2" />
                LOCATE NOW
              </Button>
            </motion.div>
            
            {/* Map Pins Visualization */}
            <div className="absolute top-1/2 right-0 w-full h-48 pointer-events-none hidden md:block">
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[10%] top-[20%] text-brand-lime drop-shadow-[0_0_10px_rgba(148,209,58,0.8)]"
              >
                <MapPin className="w-6 h-6 fill-current" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-[40%] top-[60%] text-brand-lime drop-shadow-[0_0_10px_rgba(148,209,58,0.8)]"
              >
                <MapPin className="w-8 h-8 fill-current" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -12, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-[70%] top-[10%] text-brand-lime drop-shadow-[0_0_10px_rgba(148,209,58,0.8)]"
              >
                <MapPin className="w-5 h-5 fill-current" />
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-lime/20 blur-[100px] rounded-full" />
              <img 
                src="/IMG_20260904_155856.png" 
                alt="Turbo Borg Glass"
                className="w-64 md:w-80 h-auto object-contain relative z-10"
              />
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <h3 className="font-display text-4xl text-brand-lime tracking-widest drop-shadow-lg">
                  OPEN TO<br/>MORE
                </h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
