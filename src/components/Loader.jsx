import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: SYNUS STUDIO
    // Stage 1: SERVICES WE PROVIDE
    // Stage 2: CRAFTING DIGITAL EXPERIENCES
    // Stage 3: Slide up
    const timer1 = setTimeout(() => setStage(1), 1000);
    const timer2 = setTimeout(() => setStage(2), 2000);
    const timer3 = setTimeout(() => {
      setStage(3);
      setTimeout(onComplete, 800); // Wait for slide up animation
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const texts = [
    "SYNUS STUDIO",
    "AGENCY FOR WEB APPS & PROJECTS",
    "SERVICES WE PROVIDE"
  ];

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={stage === 3 ? { y: "-100vh" } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#050505',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999, // very high to cover everything
        overflow: 'hidden'
      }}
    >
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
              fontWeight: 700
            }}
          >
            {texts[stage]}
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Loader;
