import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

const PaymentSection = () => {
  return (
    <section id="payments" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-secondary/20 text-secondary mb-6 border border-secondary/20">
                Convenience First
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">Simple, Secure Payments via GoCardless</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-medium">
                No more looking for cash or being home to pay. We use GoCardless to handle direct debit payments safely and automatically.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "No monthly fixed charges—only pay after a clean",
                  "Automated notification emails before payment",
                  "Protected by the Direct Debit Guarantee",
                  "Secure and encrypted via GoCardless"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="text-secondary h-6 w-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <CreditCard className="text-secondary" />
                  <span className="font-bold">Encrypted Data</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <ShieldCheck className="text-secondary" />
                  <span className="font-bold">Guaranteed Safety</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-primary shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-white shadow-xl transform rotate-12">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-6">How it works</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-display font-bold text-secondary">1</div>
                  <div>
                    <p className="font-bold text-lg mb-1">Set Up Direct Debit</p>
                    <p className="text-gray-500 font-medium text-sm">One-time secure setup through our payment link.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-display font-bold text-secondary">2</div>
                  <div>
                    <p className="font-bold text-lg mb-1">We Clean Your Windows</p>
                    <p className="text-gray-500 font-medium text-sm">Our regular reliable service happens as scheduled.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-display font-bold text-secondary">3</div>
                  <div>
                    <p className="font-bold text-lg mb-1">Automated Payment</p>
                    <p className="text-gray-500 font-medium text-sm">Payment is requested 3-5 days AFTER the clean.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <a 
                  href="https://gocardless.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-4 bg-secondary text-white rounded-2xl font-bold shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all"
                >
                  Learn About GoCardless
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
