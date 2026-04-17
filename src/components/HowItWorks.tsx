import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Droplets, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare size={32} />,
    title: "Get in Touch",
    description: "Contact us by phone or email for a free, no-obligation quote for your property."
  },
  {
    icon: <Droplets size={32} />,
    title: "Professional Clean",
    description: "We use our ultra-pure water system and WFP technology to clean your windows properly."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Spotless Finish",
    description: "Your windows stay cleaner for longer with a brilliant, crystal-clear finish."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold tracking-wider text-secondary uppercase mb-3">Our Process</h2>
          <p className="text-3xl md:text-5xl font-display font-bold leading-tight">Setting Up a Clean is Simple</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary/20 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center text-white mb-8 shadow-xl shadow-accent/20 transform group-hover:rotate-6 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed max-w-xs">{step.description}</p>
                <div className="mt-8 text-secondary font-display font-black text-6xl opacity-10">0{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
