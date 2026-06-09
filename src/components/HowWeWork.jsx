import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import './HowWeWork.css';

const TagCard = ({ number, title, text, className, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      className={`hww-card ${className} ${isActive ? 'active' : ''}`}
    >
      <div className="hww-punch"></div>
      
      <div className="hww-card-inner">
        <span className="hww-card-num">{number}</span>
        <h3 className="hww-card-title">{title}</h3>
        <p className="hww-card-text">{text}</p>
      </div>
    </div>
  );
};

const HowWeWork = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section className="hww-section" id="how-we-work" ref={containerRef}>
      <div className="hww-container">
        
        <div className="hww-header">
          <div className="hww-badge">How we work</div>
          <h2 className="hww-title">
            Let us show you how we drive your brand to new heights
          </h2>
          <p className="hww-desc">
            We follow a structured, creative, and highly technical approach to turn your ideas into robust full-stack applications and campaigns.
          </p>
        </div>

        <div className="hww-cards-area">
          {/* Desktop SVG Animated Dashed Line */}
        <svg className="hww-svg-desktop" viewBox="0 0 1000 1500" preserveAspectRatio="none">
          <path d="M 650,200 C 400,300 200,550 300,750 C 400,950 750,900 700,1100 C 650,1300 400,1300 300,1350" fill="none" stroke="#4b5563" strokeWidth="3" strokeDasharray="8 10" />
          <mask id="path-mask">
            <motion.path d="M 650,200 C 400,300 200,550 300,750 C 400,950 750,900 700,1100 C 650,1300 400,1300 300,1350" fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d="M 650,200 C 400,300 200,550 300,750 C 400,950 750,900 700,1100 C 650,1300 400,1300 300,1350" fill="none" stroke="#ffffff" strokeWidth="4" strokeDasharray="8 10" mask="url(#path-mask)" style={{ filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.8))' }} />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg className="hww-svg-mobile" viewBox="0 0 4 100" preserveAspectRatio="none">
          <path d="M 2,0 L 2,100" fill="none" stroke="#4b5563" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          <mask id="path-mask-mobile">
            <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="6" style={{ pathLength }} vectorEffect="non-scaling-stroke" />
          </mask>
          <path d="M 2,0 L 2,100" fill="none" stroke="#ffffff" strokeWidth="5" strokeDasharray="4 6" mask="url(#path-mask-mobile)" vectorEffect="non-scaling-stroke" style={{ filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.8))' }} />
        </svg>

        <div className="hww-cards">
          <TagCard 
            number="01" 
            title="Define" 
            text="We start by understanding your goals, user requirements, and technical constraints to lay a rock-solid foundation for the project." 
            className="card-1" 
            pathLength={pathLength} 
            containerRef={containerRef} 
          />
          <TagCard 
            number="02" 
            title="Design" 
            text="Creating intuitive, pixel-perfect user interfaces and wireframes that guarantee an engaging and accessible user experience." 
            className="card-2" 
            pathLength={pathLength} 
            containerRef={containerRef} 
          />
          <TagCard 
            number="03" 
            title="Build" 
            text="Developing scalable frontend architectures and secure backend systems using the latest modern tech stack." 
            className="card-3" 
            pathLength={pathLength} 
            containerRef={containerRef} 
          />
          <TagCard 
            number="04" 
            title="Launch" 
            text="Rigorous testing, optimization, and seamless deployment to cloud infrastructure, followed by ongoing support." 
            className="card-4" 
            pathLength={pathLength} 
            containerRef={containerRef} 
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
