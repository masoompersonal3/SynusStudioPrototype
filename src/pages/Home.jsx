import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveDown } from 'lucide-react';
import Metrics from '../components/Metrics';
import HowWeWork from '../components/HowWeWork';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import Services from '../components/Services';
import ContactMap from '../components/ContactMap';
import { FooterTop } from '../components/Footer';

const Home = () => {
  const heroRef = useRef(null);
  
  // Parallax effects for the Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <div className="hero-light-wrapper" style={{ backgroundColor: '#fafafa', backgroundImage: 'none' }}>
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

      <Metrics />
      <HowWeWork />
      <Portfolio />
      <Testimonial />
      <Services />
      <ContactMap />
      <FooterTop />
    </>
  );
};

export default Home;
