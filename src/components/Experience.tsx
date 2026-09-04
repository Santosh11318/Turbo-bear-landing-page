import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function Experience() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-brand-gold font-bold tracking-widest text-sm mb-4">
                THE TURBO EXPERIENCE
              </h4>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-6">
                <span className="text-white block">MADE FOR REAL</span>
                <span className="text-brand-lime block">MOMENTS</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Whether it's a celebration, a night out or a chill moment with friends, Turbo Borg makes it legendary.
              </p>
              
              <Button variant="outline" className="group">
                EXPLORE MORE
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Collage */}
          <div className="lg:col-span-8 relative h-[600px] flex items-center justify-center">
            {/* The collage uses 3 angled images with parallax. */}
            
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: -15 }}
              whileInView={{ opacity: 1, y: 0, rotate: -12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-[5%] top-[10%] w-[35%] h-[70%] z-30 shadow-2xl overflow-hidden rounded-sm border border-white/10 glass-panel"
            >
              <img 
                src="/IMG_20260904_155713.png" 
                alt="Holding can"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-[35%] top-0 w-[40%] h-[100%] z-20 shadow-2xl overflow-hidden rounded-sm border border-white/10"
            >
              <img 
                src="/IMG_20260904_155756.png" 
                alt="Nightlife"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-green/30 mix-blend-multiply" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 70, rotate: 15 }}
              whileInView={{ opacity: 1, y: 0, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-[5%] top-[15%] w-[35%] h-[70%] z-30 shadow-2xl overflow-hidden rounded-sm border border-white/10 glass-panel"
            >
              <img 
                src="/IMG_20260904_155642.png" 
                alt="Ice beer"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
