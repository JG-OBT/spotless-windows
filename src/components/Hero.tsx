import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, MapPin } from 'lucide-react';

import heroImage from '../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <h1 className="text-5xl md:text-[56px] font-display font-bold text-primary leading-[1.1] mb-6 tracking-tight">
              Crystal-Clear Window Cleaning, <br />
              <span className="text-accent">Done Properly.</span>
            </h1>
            
            <p className="text-lg md:text-[18px] text-text-light mb-10 max-w-xl leading-[1.6]">
              Professional exterior window cleaning using ultra-pure water and reach & wash systems. Serving Stanford-le-Hope and surrounding areas with reliable, year-round service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-bold shadow-accent transition-all"
              >
                Book Your Clean
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:07376766488"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border border-primary rounded-lg font-bold transition-all"
              >
                Call 07376 766 488
              </motion.a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-black/5 shadow-soft">
                <h3 className="text-[16px] font-bold text-primary mb-2">Ultra-Pure Water</h3>
                <p className="text-[13px] text-text-light leading-relaxed">Our 0ppm water ensures a streak-free, crystal-clear finish that stays cleaner for longer.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5 shadow-soft">
                <h3 className="text-[16px] font-bold text-primary mb-2">Complete Care</h3>
                <p className="text-[13px] text-text-light leading-relaxed">We clean glass, frames, cills, and doors as standard with every single visit.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[560px] max-h-[600px] w-full"
          >
            <div className="visual-panel w-full h-full bg-slate-200 rounded-[24px] border-[8px] border-white shadow-panel overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90 overflow-hidden flex items-center justify-center">
                 <img 
                    src={heroImage} 
                    alt="Professional Window Cleaning" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8 font-semibold">
                    <span className="max-w-[200px]">[Professional Window Cleaning Mockup]</span>
                  </div>
              </div>

              {/* Area Badge */}
              <div className="absolute top-8 right-8 bg-white p-5 rounded-xl shadow-lg w-48 hidden sm:block">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Local Areas</h4>
                <ul className="text-[12px] font-semibold text-primary space-y-1">
                  <li className="flex items-center gap-2"><span className="text-success text-[8px]">✓</span> Stanford-le-Hope</li>
                  <li className="flex items-center gap-2"><span className="text-success text-[8px]">✓</span> Orsett</li>
                  <li className="flex items-center gap-2"><span className="text-success text-[8px]">✓</span> Corringham</li>
                  <li className="flex items-center gap-2"><span className="text-success text-[8px]">✓</span> Horndon-on-the-Hill</li>
                </ul>
              </div>

              {/* Floating Review */}
              <div className="absolute bottom-8 left-8 bg-white p-5 rounded-xl shadow-lg max-w-[240px] hidden sm:block">
                <div className="text-[#FBBF24] text-xs mb-1">★★★★★</div>
                <p className="text-[12px] italic text-primary leading-tight font-medium">
                  "Professional, reliable, and my windows have never looked better. The reach and wash system is brilliant!"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
