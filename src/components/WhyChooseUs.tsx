import React from 'react';
import { ShieldCheck, Droplets, Clock, Ruler, Home, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Droplets className="h-8 w-8 text-secondary" />,
    title: "Ultra-Pure Water",
    description: "We use laboratory-grade deionised water that attracts dirt like a magnet, leaving a crystal-clear, streak-free finish."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
    title: "No Residue",
    description: "Unlike traditional soap, our ultra-pure water is detergent-free. This means no sticky residue for dirt to cling to."
  },
  {
    icon: <Home className="h-8 w-8 text-secondary" />,
    title: "Frames & Doors Included",
    description: "We don't just clean glass. We scrub your frames, cills, and doors at no extra cost for a truly thorough clean."
  },
  {
    icon: <Ruler className="h-8 w-8 text-secondary" />,
    title: "Reach & Wash System",
    description: "Our water-fed pole systems allow us to clean high or hard-to-reach windows safely and effectively from the ground."
  },
  {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: "Reliable Service",
    description: "We provide regular, year-round window cleaning. We show up when we say we will, whatever the weather."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-secondary" />,
    title: "100% Satisfaction",
    description: "We take pride in our work. If you're not completely happy, we'll return to put it right—no questions asked."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold tracking-wider text-secondary uppercase mb-3"
          >
            The Spotless Difference
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-primary max-w-3xl mx-auto leading-tight"
          >
            Modern Technology Meets <br /> Old-Fashioned Service
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 rounded-xl bg-white border border-black/5 shadow-soft hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 inline-flex items-center justify-center p-2.5 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {React.cloneElement(feature.icon as React.ReactElement, { className: "h-6 w-6" })}
              </div>
              <h3 className="text-[16px] font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-[13px] text-text-light leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
