import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookie: () => void;
}

const Footer = ({ onOpenPrivacy, onOpenCookie }: FooterProps) => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-3xl font-display font-bold mb-6 block">
              Spotless<span className="text-secondary">Windows</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Professional local window cleaning service using ultra-pure water and reach-and-wash systems. Dedicated to quality and reliability for our local community.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                {/* Social Placeholder */}
                FB
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                {/* Social Placeholder */}
                IN
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-secondary">Service Areas</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>Stanford-le-Hope</li>
              <li>Orsett</li>
              <li>Corringham</li>
              <li>Horndon-on-the-Hill</li>
              <li className="pt-2">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-md text-secondary text-xs font-bold uppercase tracking-widest">Essex Based</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Areas Covered</a></li>
              <li><a href="#payments" className="hover:text-white transition-colors">Payment Options</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book a Clean</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-secondary">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex flex-col gap-1">
                <span className="text-white text-sm uppercase tracking-widest">Phone</span>
                <a href="tel:07376766488" className="hover:text-secondary transition-colors underline decoration-white/10">07376766488</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white text-sm uppercase tracking-widest">Email</span>
                <a href="mailto:clean@spotlesswindows.uk" className="hover:text-secondary transition-colors underline decoration-white/10">clean@spotlesswindows.uk</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white text-sm uppercase tracking-widest">Hours</span>
                <span>8AM – 5PM Mon – Sat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Spotless Windows. Professional Essex Window Cleaning.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <button onClick={onOpenPrivacy} className="hover:text-secondary transition-all">Privacy Policy</button>
            <button onClick={onOpenCookie} className="hover:text-secondary transition-all">Cookie Policy</button>
            <a href="#payments" className="hover:text-secondary transition-all">GoCardless Setup</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
