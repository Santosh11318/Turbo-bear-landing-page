import React from 'react';
import { Crown } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Logo Area */}
          <div className="lg:col-span-2 flex flex-col">
            <a href="#" className="flex flex-row items-center gap-2 group mb-6 inline-flex w-fit">
              <div className="w-8 h-8 bg-brand-lime rounded-sm flex items-center justify-center group-hover:bg-white transition-colors">
                <Crown className="w-5 h-5 text-brand-black" strokeWidth={2.5} />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter italic text-white leading-none uppercase">TUBORG</span>
            </a>
            <p className="text-white/40 text-[9px] uppercase tracking-widest mt-auto hidden lg:block font-bold">
              © 2024 TUBORG BREWERIES. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h5 className="text-white text-sm font-bold tracking-widest mb-6">ABOUT US</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Our Story</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Brewery</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-white text-sm font-bold tracking-widest mb-6">PRODUCTS</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Our Beers</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Ingredients</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Quality</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-white text-sm font-bold tracking-widest mb-6">SUPPORT</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-white text-sm font-bold tracking-widest mb-6">FOLLOW US</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">YouTube</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-lime text-sm transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-white/40 text-xs lg:hidden text-center">
            © 2024 Turbo Borg Beer. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold shrink-0">
              <span className="font-display text-xl font-bold leading-none">18+</span>
            </div>
            <div className="text-left">
              <p className="text-white text-xs font-bold uppercase">Enjoy Responsibly.</p>
              <p className="text-white/60 text-[10px] uppercase mt-0.5">Not for Sale to Persons Under 18.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
