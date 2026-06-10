import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CircularText = () => (
  <svg className="circular-text-svg" viewBox="0 0 100 100" width="100" height="100">
    <path id="circlePath" d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
    <text>
      <textPath href="#circlePath" startOffset="0%" fill="white" fontSize="10.5" letterSpacing="3.5">
        PROJECT VIEW • PROJECT VIEW • 
      </textPath>
    </text>
    {/* Center Eye Icon */}
    <circle cx="50" cy="50" r="6" fill="none" stroke="white" strokeWidth="2" />
    <path d="M 40,50 Q 50,40 60,50 Q 50,60 40,50" fill="none" stroke="white" strokeWidth="1.5" />
  </svg>
);

const PortfolioCard = ({ item }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className={`portfolio-grid-card ${item.altStyle ? 'alt-radius' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="portfolio-grid-shadow"></div>
      <div className="portfolio-grid-content">
        <div className="portfolio-card-info">
          <h3>{item.title}</h3>
          <span className="portfolio-card-badge">{item.type}</span>
        </div>
        <img src={item.img} alt={item.title} className="portfolio-card-img" />
      </div>
      
      <motion.div 
        className="circular-text-cursor"
        animate={{ 
          x: mousePos.x - 50, 
          y: mousePos.y - 50, 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 30
        }}
      >
        <CircularText />
      </motion.div>
    </div>
  );
};

const portfolioItems = [
  { id: 1, title: 'IPNPROXY', type: 'Website', img: '/assets/1.png', altStyle: false },
  { id: 2, title: 'BOOSTIFY', type: 'Website', img: '/assets/2.png', altStyle: true },
  { id: 3, title: 'WAVEPROXIES', type: 'Website', img: '/assets/3.png', altStyle: false },
  { id: 4, title: 'IPNVPN', type: 'Mobile App', img: '/assets/4.jpeg', altStyle: true },
  { id: 5, title: 'BATIVIA', type: 'Website', img: '/assets/5.jpeg', altStyle: true },
  { id: 6, title: 'BAEDECO', type: 'Website', img: '/assets/6.png', altStyle: false },
];

const Portfolio = () => {
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const borderBottomLeftRadius = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  const borderBottomRightRadius = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  const dynamicMarginBottom = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vh"]);

  return (
    <div style={{ background: '#f5f5f5' }}>
      <motion.section 
        ref={contentRef}
        className="portfolio-section"
        style={{ 
          position: 'relative', 
          backgroundColor: '#f5f5f5', 
          marginBottom: dynamicMarginBottom,
          scale,
          borderBottomLeftRadius,
          borderBottomRightRadius,
          transformOrigin: 'top center',
          zIndex: 10 
        }}
      >
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            BUILDING THE FUTURE OF<br/>CONSUMER BRANDS
          </h2>
          <p className="portfolio-subtitle" style={{ display: 'block', visibility: 'visible' }}>
            CREATIVE SOLUTIONS BUILT FOR REAL IMPACT. Business challenges are tough, but we have a proven record of elevating our partners to their next and best selves.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
