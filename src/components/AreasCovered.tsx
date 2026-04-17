import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import localHome from "../assets/images/local-home.jpg";

const areas = [
  "Stanford-le-Hope",
  "Orsett",
  "Corringham",
  "Horndon-on-the-Hill"
];

const AreasCovered = () => {
  return (
    <section id="areas" className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform origin-top translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[12px] font-bold tracking-[1px] text-accent uppercase mb-2">Local Areas Covered</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight mb-8">Proudly Serving Local Households</h3>
            <p className="text-lg text-text-light leading-relaxed mb-10 font-medium">
              We focus on providing a reliable, regular service to our local community. If you live in or near these areas, we can protect your windows for years to come.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-[13px] font-semibold text-primary">
                  <span className="text-success">✓</span>
                  {area}
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-block px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
            >
              Check Availability in Your Area
            </a>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
  src={localHome}
  alt="Beautiful local residential property" 
  className="w-full h-full object-cover"
/>
            </div>
            {/* Float badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-primary/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                4+
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Local Support</p>
                <p className="text-xs text-gray-400">Serving Essex Communities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasCovered;
