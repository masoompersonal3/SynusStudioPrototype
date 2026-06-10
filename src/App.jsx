import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowRight, MoveDown, Menu, X } from 'lucide-react';
import Metrics from './components/Metrics';
import HowWeWork from './components/HowWeWork';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import ContactMap from './components/ContactMap';
import { FooterTop, FooterBottom } from './components/Footer';
import Loader from './components/Loader';
import AnimatedLink from './components/AnimatedLink';

function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('hasSeenLoader');
  });
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasSeenLoader', 'true');
    setLoading(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroRef = useRef(null);
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Parallax effects for the Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Measure footer height for the shutter reveal effect
  useEffect(() => {
    if (!footerRef.current) return;
    
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setFooterHeight(entry.target.offsetHeight);
      }
    });
    
    resizeObserver.observe(footerRef.current);
    setFooterHeight(footerRef.current.offsetHeight);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      
      {/* MAIN CONTENT WRAPPER */}
      <div 
        className="main-content-wrapper" 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          backgroundColor: '#050505', 
          marginBottom: `${footerHeight}px`,
          overflowX: 'hidden',
          width: '100%'
        }}
      >
        <div className="hero-light-wrapper" style={{ backgroundColor: '#fafafa', backgroundImage: 'none' }}>
          <nav className={`navbar navbar-light ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <motion.div 
              className="logo" 
              style={{ color: '#000', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
              whileHover="hover"
            >
              <motion.svg layoutId="synus-logo-icon" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect 
                  width="40" height="40" rx="12" fill="#ff3300" 
                  variants={{
                    hover: { rotate: 90, scale: 1.1, borderRadius: "50%" }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.path 
                  d="M19 13C16 13 14 14.5 14 17C14 20.5 20 19.5 20 23C20 25.5 18 27 15 27" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hover: { pathLength: 1, opacity: 1, strokeWidth: 4 } }}
                />
                <motion.path 
                  d="M27 13C24 13 22 14.5 22 17C22 20.5 28 19.5 28 23C28 25.5 26 27 23 27" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hover: { pathLength: 1, opacity: 1, strokeWidth: 4 } }}
                />
              </motion.svg>
              <span className="logo-text" style={{ fontWeight: 600, fontSize: '1.2rem' }}>SynusStudio</span>
            </motion.div>
            
            <div className="nav-links">
              <AnimatedLink href="#" label="Project" />
              <AnimatedLink href="#" label="About" />
              <AnimatedLink href="#services" label="Service" />
              <AnimatedLink href="#careers" label="Career" />
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
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Project</a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Service</a>
                <a href="#careers" onClick={() => setIsMobileMenuOpen(false)}>Career</a>
                <button className="btn btn-contact-red" style={{ background: '#ff3300', color: '#fff', border: 'none', borderRadius: '50px', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '1rem', marginTop: '0.5rem', width: '100%', justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                  Contact <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <main className="hero-centered" ref={heroRef} style={{ width: '100%', position: 'relative' }}>
            
            <div className="scroll-indicator">
               Scroll Down <MoveDown size={14} />
            </div>

            <motion.div 
              className="hero-main-text" 
              style={{ y: textY, opacity: textOpacity, zIndex: 10, position: 'relative' }}
            >
              <div className="hero-line-1">
                 <span>IDEAS MEET</span>
                 <div className="inline-action">
                    <button className="circle-arrow-btn">
                       <ArrowRight size={20} />
                    </button>
                    <span className="talk-now-text">LET'S TALK NOW</span>
                 </div>
              </div>
              <div className="hero-line-2">
                 PURPOSE WITH IMPACT
              </div>

              <div className="hero-subtitle-container">
                 <p className="hero-subtitle-right">
                    We turn thoughtful ideas into meaningful solutions that create real results and transform them into extraordinary realities.
                 </p>
              </div>
            </motion.div>

            <motion.div 
              className="hero-video-card-large" 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.3, duration: 0.8 }}
            >
               <video 
                 className="hero-video"
                 src="/assets/video.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
               />
            </motion.div>

          </main>
        </div>

        {/* New Sections */}
        <Metrics />
        <HowWeWork />
        <Portfolio />
        <Testimonial />
        <Services />
        <ContactMap />
        <FooterTop />
      </div>

      {/* FOOTER FIXED REVEAL LAYER */}
      <div 
        ref={footerRef}
        className="footer-reveal-container" 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          zIndex: 1 
        }}
      >
        <FooterBottom />
      </div>
    </LayoutGroup>
  );
}

export default App;
