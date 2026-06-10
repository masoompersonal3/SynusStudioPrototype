import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedLink from './AnimatedLink';

const Navbar = ({ showNavLogo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-light ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div 
            className="logo" 
            style={{ color: '#000', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
            whileHover="hover"
          >
            {showNavLogo !== false ? (
              <motion.svg layoutId="synus-logo-icon" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect width="40" height="40" rx="12" fill="#ff3300" variants={{ hover: { rotate: 90, scale: 1.1, borderRadius: "50%" } }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />
                <motion.path d="M19 13C16 13 14 14.5 14 17C14 20.5 20 19.5 20 23C20 25.5 18 27 15 27" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" variants={{ hover: { pathLength: 1, opacity: 1, strokeWidth: 4 } }} />
                <motion.path d="M27 13C24 13 22 14.5 22 17C22 20.5 28 19.5 28 23C28 25.5 26 27 23 27" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" variants={{ hover: { pathLength: 1, opacity: 1, strokeWidth: 4 } }} />
              </motion.svg>
            ) : (
              <div style={{ width: 36, height: 36 }} />
            )}
            <span className="logo-text" style={{ fontWeight: 600, fontSize: '1.2rem' }}>SynusStudio</span>
          </motion.div>
        </Link>
        
        <div className="nav-links">
          <AnimatedLink href="/#portfolio" label="Project" />
          <AnimatedLink href="/#about" label="About" />
          <AnimatedLink href="/#services" label="Service" />
          <AnimatedLink href="/careers" label="Career" />
        </div>
        <div className="nav-actions">
          <button className="btn btn-contact-red" style={{ background: '#ff3300', color: '#fff', border: 'none', borderRadius: '50px', padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            Contact <ArrowRight size={16} />
          </button>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Project</a>
            <a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Service</a>
            <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#000' }}>Career</Link>
            <button className="btn btn-contact-red" style={{ background: '#ff3300', color: '#fff', border: 'none', borderRadius: '50px', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '1rem', marginTop: '0.5rem', width: '100%', justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
              Contact <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
