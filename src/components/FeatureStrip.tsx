import React from 'react';
import { Leaf, Zap, Crown, Droplet } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Leaf,
    title: 'BOLD TASTE',
    desc: 'A perfectly balanced blend for a rich and refreshing taste.',
  },
  {
    icon: Zap,
    title: 'EXTRA STRONG',
    desc: 'Crafted for those who embrace strength and intensity.',
  },
  {
    icon: Crown,
    title: 'PREMIUM QUALITY',
    desc: 'Brewed with carefully selected ingredients for uncompromised quality.',
  },
  {
    icon: Droplet,
    title: 'NATURAL INGREDIENTS',
    desc: 'Made from quality malt, hops and pure water for a smooth finish.',
  },
];

export function FeatureStrip() {
  return (
    <section className="bg-white/5 border-t border-white/10 backdrop-blur-md py-8 relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 pt-6 sm:pt-0 sm:px-6 first:pl-0 last:pr-0 group"
            >
              <span className="text-3xl font-black text-brand-lime/40 group-hover:text-brand-lime transition-colors">
                0{idx + 1}
              </span>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest mb-1 text-white">{feature.title}</h4>
                <p className="text-[10px] text-white/50 leading-tight">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
