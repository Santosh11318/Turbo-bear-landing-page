import React from 'react';
import { motion } from 'motion/react';
import { Percent, Droplet, Zap, ThermometerSnowflake, ChevronLeft, ChevronRight, Hand } from 'lucide-react';

export function ProductDetails() {
  return (
    <section className="bg-brand-green py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-black/40 blur-[100px]" />
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Can Image */}
          <div className="lg:col-span-4 relative h-[500px] flex justify-center items-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full flex justify-center items-center"
            >
              <img 
                src="/IMG_20260904_155620.png" 
                alt="Turbo Borg"
                className="w-auto h-[90%] object-contain relative z-10"
              />
              <div className="absolute bottom-10 w-48 h-8 bg-black/80 blur-xl rounded-[100%]" />
            </motion.div>
          </div>

          {/* Center: Details */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-brand-gold font-bold tracking-widest text-sm mb-4">
                PRODUCT DETAILS
              </h4>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-6">
                <span className="text-white block">PREMIUM BEER.</span>
                <span className="text-brand-lime block">EXTRA STRONG.</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Turbo Borg is brewed with passion and precision to deliver a bold beer with a refreshing finish.
              </p>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Percent, label: 'ALC./VOL.', value: '8.0%' },
                  { icon: Droplet, label: 'VOLUME', value: '650ml' },
                  { icon: Zap, label: 'STRONG', value: 'EXTRA' },
                  { icon: ThermometerSnowflake, label: 'COLD', value: 'SERVE' },
                ].map((spec, idx) => (
                  <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                    <spec.icon className="w-6 h-6 text-brand-lime mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="font-bold text-white text-lg leading-none">{spec.value}</span>
                    <span className="text-white/50 text-[10px] tracking-widest mt-1 uppercase">{spec.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 360 View */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-sm"
            >
              <div className="text-center mb-6">
                <span className="text-white/50 text-xs tracking-widest font-bold">360° VIEW</span>
              </div>
              
              <div className="relative flex items-center justify-center h-[350px]">
                {/* Simulated Platform */}
                <div className="absolute bottom-0 w-64 h-16 bg-gradient-to-t from-white/10 to-transparent rounded-[100%] border-t border-white/20 blur-[1px]" />
                
                {/* Can */}
                <img 
                  src="/IMG_20260904_160026.png" 
                  alt="Turbo Borg 360"
                  className="w-auto h-[80%] object-contain relative z-10 cursor-grab active:cursor-grabbing"
                />
                
                {/* Arrows */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 text-center flex items-center justify-center text-white/50 text-xs font-bold tracking-widest">
                <Hand className="w-4 h-4 mr-2" />
                DRAG TO ROTATE
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
