import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[12px] font-bold tracking-[1px] text-accent uppercase mb-2">Enquire Today</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight mb-8">Ready for a Crystal-Clear Finish?</h3>
            <p className="text-lg text-text-light leading-relaxed mb-10 font-medium">
              Fill out the form below or reach out via phone or email. We'll get back to you with a free, no-obligation quote as soon as possible.
            </p>

            <div className="space-y-6">
              <a href="tel:07376766488" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-soft group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-light tracking-widest uppercase mb-1">Call Us</p>
                  <p className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">07376766488</p>
                </div>
              </a>
              <a href="mailto:clean@spotlesswindows.uk" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-soft group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-light tracking-widest uppercase mb-1">Email Us</p>
                  <p className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">clean@spotlesswindows.uk</p>
                </div>
              </a>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-1">Opening Hours</p>
                  <p className="text-2xl font-display font-bold text-primary font-medium">8AM – 5PM Mon – Sat</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-accent border border-transparent focus:border-secondary focus:bg-white outline-none rounded-2xl transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="07123 456789"
                    className="w-full px-6 py-4 bg-accent border border-transparent focus:border-secondary focus:bg-white outline-none rounded-2xl transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-accent border border-transparent focus:border-secondary focus:bg-white outline-none rounded-2xl transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Postcode / Area</label>
                <input 
                  type="text" 
                  placeholder="e.g. Stanford-le-Hope"
                  className="w-full px-6 py-4 bg-accent border border-transparent focus:border-secondary focus:bg-white outline-none rounded-2xl transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Your Message (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your property..."
                  className="w-full px-6 py-4 bg-accent border border-transparent focus:border-secondary focus:bg-white outline-none rounded-2xl transition-all font-medium resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-secondary text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all font-display text-lg"
              >
                Request a Free Quote
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
