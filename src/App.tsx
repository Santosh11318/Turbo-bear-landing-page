/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { Experience } from './components/Experience';
import { ProductDetails } from './components/ProductDetails';
import { StoreFinder } from './components/StoreFinder';
import { SocialGallery } from './components/SocialGallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden selection:bg-brand-lime selection:text-brand-black">
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <Experience />
        <ProductDetails />
        <StoreFinder />
        <SocialGallery />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-brand-black/90 backdrop-blur-md border-t border-white/10 z-50">
        <button className="w-full h-12 bg-brand-lime text-brand-black font-bold tracking-widest text-sm rounded-sm">
          FIND A STORE
        </button>
      </div>
    </div>
  );
}
