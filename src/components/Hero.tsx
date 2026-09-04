import React from 'react';
import { motion } from 'motion/react';
import { Play, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-brand-black flex items-center">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle at 70% 40%, var(--color-brand-green) 0%, transparent 60%), radial-gradient(circle at 20% 80%, var(--color-brand-green-dark) 0%, transparent 50%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-brand-gold font-bold tracking-[0.4em] text-xs uppercase mb-4">
              TUBORG EXTRA STRONG
            </p>
            <h1 className="font-display font-black text-[5rem] sm:text-[7rem] lg:text-[8rem] uppercase tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
              <span className="text-white block">UNLEASH</span>
              <span className="text-brand-lime block">THE TURBO.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
              Bold taste. Strong character.<br />
              Made for the moments that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center">
              <Button className="w-full sm:w-auto group gap-3">
                DISCOVER TURBO BORG
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto">
                WATCH EXPERIENCE
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Product */}
        <div className="relative h-[60vh] lg:h-[80vh] w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            {/* 
              Since image generation failed, we use a placeholder that matches the shape and feel.
              In a real scenario, this would be the transparent PNG of the can.
            */}
            <img 
              src="/IMG_20260904_155546.png" 
              alt="Turbo Borg Can"
              className="w-auto h-[90%] object-contain drop-shadow-[0_0_50px_rgba(148,209,58,0.2)]"
            />
          </motion.div>

          {/* 18+ Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-8 -right-8 md:bottom-10 md:right-10 z-30 bg-brand-black border border-brand-gold p-3 rounded-full flex flex-col items-center justify-center w-24 h-24 shadow-2xl"
          >
            <span className="font-black text-[20px] text-brand-gold mb-1">18+</span>
            <span className="text-[7px] text-center uppercase font-bold text-white leading-none tracking-widest">
              ENJOY<br />RESPONSIBLY
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
