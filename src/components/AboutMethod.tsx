import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Droplets, Scaling } from 'lucide-react';
// import wfpMethod from '../assets/images/wfp-method.jpg';

const AboutMethod = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="../assets/images/wfp-action.jpg" 
                alt="Window cleaner using water-fed pole" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decals */}
            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-[2rem] text-white shadow-xl hidden md:block max-w-[200px]">
              <p className="text-4xl font-display font-bold mb-1 underline decoration-white/30">100%</p>
              <p className="font-semibold text-sm opacity-90">Ultra-Pure Deionised Water Used</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-[12px] font-bold tracking-[1px] text-accent uppercase mb-2">Advanced Cleaning</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight mb-8">Why We Use Reach & Wash Systems</h3>
            <p className="text-[18px] text-text-light leading-relaxed mb-8 font-medium">
              We utilise advanced Water-Fed Pole (WFP) technology paired with multi-stage water purification. This isn't just tap water; it's ultra-pure H2O that absorbs dirt on a molecular level.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-slate-50 rounded-lg text-accent">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[18px]">Pure Water Power</h4>
                    <p className="text-text-light text-sm font-medium">Zero mineral content means no streaks and no spots when it dries naturally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-slate-50 rounded-lg text-accent">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[18px]">Safer Cleaning</h4>
                    <p className="text-text-light text-sm font-medium">No ladders required. We clean up to 4 storeys safely from the safety of the ground.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-slate-50 rounded-lg text-accent">
                    <Scaling size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[18px]">Awkward Access</h4>
                    <p className="text-text-light text-sm font-medium">Easily reach windows over conservatories, extensions or sloping roofs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-slate-50 rounded-lg text-accent">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[18px]">Longer Lasting</h4>
                    <p className="text-text-light text-sm font-medium">Without soap residue, dirt has nothing to stick to, so windows stay cleaner for longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethod;
