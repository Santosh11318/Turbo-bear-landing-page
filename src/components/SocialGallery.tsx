import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const images = [
  '/IMG_20260904_155546.png',
  '/IMG_20260904_155620.png',
  '/IMG_20260904_155642.png',
  '/IMG_20260904_155713.png',
  '/IMG_20260904_155756.png',
  '/IMG_20260904_155856.png',
];

export function SocialGallery() {
  return (
    <section className="bg-brand-black py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-brand-gold font-bold tracking-widest text-sm mb-2 uppercase">
              FOLLOW THE TURBO LIFE
            </h4>
            <h2 className="font-display text-5xl text-brand-lime mb-4">
              #TURBOBORG
            </h2>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-black hover:border-brand-lime transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-black hover:border-brand-lime transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-black hover:border-brand-lime transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-black hover:border-brand-lime transition-all">
                {/* Fallback for tiktok since lucide doesn't have it natively, using twitter icon for now or we could use custom svg */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="aspect-square relative group overflow-hidden bg-brand-green"
          >
            <img 
              src={img} 
              alt="Gallery" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
