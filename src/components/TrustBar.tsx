import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Check } from 'lucide-react';

const TrustBar = () => {
  return (
    <section className="bg-white border-t border-black/5 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-primary font-bold shadow-sm">
              <Check size={20} />
            </div>
            <div className="flex flex-col">
              <b className="text-sm text-primary">Safety First</b>
              <span className="text-[12px] text-text-light">Cleaning safely from the ground</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-primary shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col">
              <b className="text-sm text-primary">GoCardless Secure</b>
              <span className="text-[12px] text-text-light">Easy Direct Debit payments</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-primary shadow-sm">
              <Calendar size={20} />
            </div>
            <div className="flex flex-col">
              <b className="text-sm text-primary">Year-Round Service</b>
              <span className="text-[12px] text-text-light">Reliable 4 or 8 weekly cleans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
