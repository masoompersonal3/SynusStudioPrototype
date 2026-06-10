import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000);
    const timer2 = setTimeout(() => setStage(2), 2000);
    const timer3 = setTimeout(() => setStage(3), 3200); // show big logo
    const timer4 = setTimeout(() => {
      setStage(4); // diagonal cut begins
      setTimeout(onComplete, 800); // wait for cut
    }, 8500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const texts = [
    "SYNUS STUDIO",
    "AGENCY FOR WEB APPS & PROJECTS",
    "SERVICES WE PROVIDE"
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 99999,
        pointerEvents: 'none'
      }}
    >
      {/* Top Left Triangle */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={stage >= 4 ? { x: "-100%", y: "-100%" } : { x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#050505',
          clipPath: 'polygon(0 0, 100.5% 0, 0 100.5%)',
          zIndex: 1,
          pointerEvents: 'auto'
        }}
      />
      
      {/* Bottom Right Triangle */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={stage >= 4 ? { x: "100%", y: "100%" } : { x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#050505',
          clipPath: 'polygon(99.5% 0, 100% 100%, -0.5% 100%)',
          zIndex: 1,
          pointerEvents: 'auto'
        }}
      />

      {/* Content Container */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
      }}>
        <AnimatePresence mode="wait">
          {stage < 3 && (
            <motion.h1
              key={stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                letterSpacing: '2px',
                textAlign: 'center',
                padding: '0 2rem',
                margin: 0,
                color: '#fff',
                fontWeight: 700
              }}
            >
              {texts[stage]}
            </motion.h1>
          )}

          {stage >= 3 && stage < 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 4 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="logo"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.svg layoutId="synus-logo-icon" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="#ff3300" />
                <path d="M19 13C16 13 14 14.5 14 17C14 20.5 20 19.5 20 23C20 25.5 18 27 15 27" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27 13C24 13 22 14.5 22 17C22 20.5 28 19.5 28 23C28 25.5 26 27 23 27" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Loader;
