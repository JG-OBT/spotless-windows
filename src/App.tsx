/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import AboutMethod from './components/AboutMethod';
import AreasCovered from './components/AreasCovered';
import PaymentSection from './components/PaymentSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const PolicyModal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-[3rem] shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
          >
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-accent">
              <h2 className="text-2xl font-display font-bold text-primary">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-10 overflow-y-auto prose prose-slate">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="p-8 border-t border-gray-100 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'cookie' | null>(null);

  const privacyContent = `
    <h3>Privacy Policy</h3>
    <p>Last updated: April 17, 2026</p>
    <p>Spotless Windows ("us", "we", or "our") operates the website spotlesswindows.uk. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.</p>
    <h4>Information Collection and Use</h4>
    <p>We collect several different types of information for various purposes to provide and improve our Service to you, including contact details (name, phone, email) via our enquiry form to provide quotes and services.</p>
    <h4>Data Security</h4>
    <p>The security of your data is important to us. We use secure third-party processors like GoCardless for payment handling to ensure your financial information is never stored directly on our servers.</p>
    <h4>Contact Us</h4>
    <p>If you have any questions about this Privacy Policy, please contact us at clean@spotlesswindows.uk.</p>
  `;

  const cookieContent = `
    <h3>Cookie Policy</h3>
    <p>Last updated: April 17, 2026</p>
    <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
    <h4>What are Cookies?</h4>
    <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you.</p>
    <h4>How we use Cookies</h4>
    <p>We use essential cookies to manage your preferences (like accepting this banner) and analytical cookies to understand how visitors interact with our website.</p>
    <h4>Your Choices</h4>
    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
  `;

  return (
    <div className="font-sans text-primary selection:bg-secondary/20 selection:text-secondary">
      <Navbar />
      
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <HowItWorks />
        <Services />
        <AboutMethod />
        <AreasCovered />
        <PaymentSection />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer 
        onOpenPrivacy={() => setActiveModal('privacy')} 
        onOpenCookie={() => setActiveModal('cookie')} 
      />
      
      <CookieBanner />

      <PolicyModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={privacyContent}
      />

      <PolicyModal 
        isOpen={activeModal === 'cookie'} 
        onClose={() => setActiveModal(null)}
        title="Cookie Policy"
        content={cookieContent}
      />
      
      {/* Global listener for footer links since they are in a different component */}
      <div className="hidden">
        {/* We can improve this by passing state to Footer, but for a single page app, this is often handled via routing or global state */}
      </div>
    </div>
  );
}
