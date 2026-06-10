import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import { FooterBottom } from './components/Footer';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('hasSeenLoader');
  });
  const [showNavLogo, setShowNavLogo] = useState(!loading);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef(null);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasSeenLoader', 'true');
    setLoading(false);
  };

  useEffect(() => {
    if (!footerRef.current) return;
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setFooterHeight(entry.target.offsetHeight);
      }
    });
    resizeObserver.observe(footerRef.current);
    setFooterHeight(footerRef.current.offsetHeight);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} onLogoFly={() => setShowNavLogo(true)} />}
      </AnimatePresence>
      
      <div 
        className="main-content-wrapper" 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          backgroundColor: '#050505', 
          marginBottom: `${footerHeight}px`,
          overflowX: 'hidden',
          width: '100%',
          minHeight: '100vh'
        }}
      >
        <ScrollRestoration />
        {!location.pathname.startsWith('/project') && <Navbar showNavLogo={showNavLogo} />}

        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>

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
