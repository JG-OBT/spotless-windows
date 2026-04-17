import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-primary/5 p-8 relative">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-display font-bold text-primary text-xl">We value your privacy</h4>
            </div>

            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
              We use cookies to enhance your browsing experience and analyse our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={handleAccept}
                className="flex-grow py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 shadow-xl shadow-primary/10 transition-all"
              >
                Accept All
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="px-6 py-4 bg-accent text-primary rounded-2xl font-bold hover:bg-gray-200 transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
