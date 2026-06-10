import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Link2 } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const FooterTop = () => {
  const textSlideUp = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <footer className="footer-section" style={{ paddingBottom: '2rem' }}>
      <div className="footer-top">
        <motion.div 
          className="footer-title-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="overflow-hidden">
            <motion.h2 variants={textSlideUp} className="footer-title">SMART STRATEGY AND CREATIVE</motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 variants={textSlideUp} className="footer-title">DESIGN CRAFTED <span className="text-gray">TO BRING YOUR</span></motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 variants={textSlideUp} className="footer-title"><span className="text-gray">BRAND VISION TO LIFE</span></motion.h2>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>HELLO@SYNUS.COM</p>
          <p>(+62) 8700 0222 098</p>
          <p>JAKARTA 456, INDONESIA</p>
        </motion.div>
      </div>

      <motion.div 
        className="footer-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="footer-col">
          <h4>INDEX</h4>
          <ul>
            <li><a href="#top">↳ TOP</a></li>
            <li><a href="#portfolio">↳ WORKS</a></li>
            <li><a href="#services">↳ SERVICES</a></li>
            <li><a href="#contact">↳ CONTACT</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>SOCIAL</h4>
          <ul className="social-links-row">
            <li><a href="#" className="social-icon-only"><Globe size={24} /></a></li>
            <li><a href="#" className="social-icon-only"><InstagramIcon size={24} /></a></li>
            <li><a href="#" className="social-link-item"><Link2 size={24} /></a></li>
            <li><a href="#" className="social-icon-only"><LinkedinIcon size={24} /></a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>LEGAL</h4>
          <ul>
            <li><a href="#">↳ IMPRINT</a></li>
            <li><a href="#">↳ PRIVACY</a></li>
            <li><a href="#">↳ COOKIES</a></li>
            <li><a href="#">↳ COLOPHON</a></li>
          </ul>
        </div>

        <div className="footer-col footer-subscribe">
          <h4>JOIN THE LIST</h4>
          <p>SIGN UP TO GET THE LATEST INSIGHTS AND UPDATES FROM OUR DIGITAL AGENCY.</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="YOUR EMAIL" />
            <button type="submit" className="btn-subscribe">SUBSCRIBE <ArrowRight size={16} /></button>
          </form>
        </div>
      </motion.div>
    </footer>
  );
};

export const FooterBottom = () => {
  return (
    <div className="footer-section" style={{ paddingTop: '2rem' }}>
      <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
        <p>&copy; 2026 SYNUSSTUDIO. ALL RIGHT RESERVED</p>
        <div className="footer-legal">
          <a href="#">TERMS & CONDITIONS</a> | <a href="#">PRIVACY POLICY</a>
        </div>
      </div>

      {/* Giant Typography Name */}
      <div className="footer-giant-name-container">
        <h1 className="footer-giant-name">
          SYNUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STUDIO
        </h1>
      </div>
    </div>
  );
};
