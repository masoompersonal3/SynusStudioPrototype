import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Globe, Users, MoveLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const positions = [
  { id: 1, title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Remote / Jakarta', dept: 'Engineering' },
  { id: 2, title: 'Lead Product Designer', type: 'Full-time', location: 'Jakarta, Indonesia', dept: 'Design' },
  { id: 3, title: 'Creative Art Director', type: 'Full-time', location: 'Remote / Global', dept: 'Creative' },
  { id: 4, title: 'Growth Marketing Manager', type: 'Full-time', location: 'Remote', dept: 'Marketing' }
];

const CareerCard = ({ pos, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });

      const rotateX = -(y / rect.height) * 8; 
      const rotateY = (x / rect.width) * 8; 
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        position: 'relative',
        borderRadius: '32px',
        overflow: 'hidden',
        width: "100%",
        minHeight: "400px",
        transformStyle: "preserve-3d",
        backgroundColor: "#080a10",
        boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.192), inset 0 0 5px rgba(255, 255, 255, 0.274), 0 -10px 100px 10px rgba(212, 255, 58, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.8)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      animate={{
        y: isHovered ? -8 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle glass reflection overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, left: 0,
          pointerEvents: 'none',
          background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
          zIndex: 35
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Dark background with black gradient */}
      <motion.div
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: "linear-gradient(180deg, #000000 0%, #000000 70%)", zIndex: 0 }}
        animate={{ z: -1 }}
      />

      {/* Noise texture overlay */}
      <motion.div
        style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
          opacity: 0.2, mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          zIndex: 10
        }}
        animate={{ z: -0.5 }}
      />

      {/* Neon green glow effect matching the website theme */}
      <motion.div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '66.66%',
          background: `
            radial-gradient(ellipse at bottom right, rgba(212, 255, 58, 0.7) -10%, rgba(0, 0, 0, 0) 70%),
            radial-gradient(ellipse at bottom left, rgba(160, 200, 30, 0.6) -10%, rgba(0, 0, 0, 0) 70%)
          `,
          filter: "blur(40px)",
          zIndex: 20
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Central green glow */}
      <motion.div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '66.66%',
          background: `radial-gradient(circle at bottom center, rgba(212, 255, 58, 0.7) -20%, rgba(0, 0, 0, 0) 60%)`,
          filter: "blur(45px)",
          zIndex: 21
        }}
        animate={{
          opacity: isHovered ? 0.85 : 0.75,
          y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
          z: 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Enhanced bottom border glow */}
      <motion.div
        style={{ 
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(212,255,58,0.7) 50%, rgba(255,255,255,0.05) 100%)", 
          zIndex: 25 
        }}
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 4px rgba(212, 255, 58, 0.9), 0 0 30px 6px rgba(180, 220, 40, 0.7), 0 0 40px 8px rgba(140, 180, 20, 0.5)"
            : "0 0 15px 3px rgba(212, 255, 58, 0.8), 0 0 25px 5px rgba(180, 220, 40, 0.6), 0 0 35px 7px rgba(140, 180, 20, 0.4)",
          opacity: isHovered ? 1 : 0.9,
          z: 0.5
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Card content exactly matching the screenshot structure */}
      <motion.div
        style={{ 
          position: 'relative', display: 'flex', flexDirection: 'column', 
          height: '100%', padding: '2rem', zIndex: 40 
        }}
        animate={{ z: 2 }}
      >
        {/* Icon circle with shadow - dark like in the image */}
        <motion.div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', marginBottom: '1.5rem',
            background: "linear-gradient(225deg, #171c2c 0%, #121624 100%)",
            position: "relative",
            overflow: "hidden",
            width: "48px",
            height: "48px",
            flexShrink: 0
          }}
          initial={{ filter: "blur(3px)", opacity: 0.7 }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            boxShadow: isHovered
              ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.7)"
              : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.12), inset -2px -2px 4px rgba(0, 0, 0, 0.5)",
            z: isHovered ? 10 : 5,
            y: isHovered ? -2 : 0,
            rotateX: isHovered ? -rotation.x * 0.5 : 0,
            rotateY: isHovered ? -rotation.y * 0.5 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Top-left highlight for realistic lighting */}
          <div
            style={{
              position: 'absolute', top: 0, left: 0, width: '66.66%', height: '66.66%',
              opacity: 0.4, pointerEvents: 'none', filter: 'blur(10px)',
              background: "radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent 80%)"
            }}
          />

          {/* Bottom shadow for depth */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%',
              opacity: 0.5, pointerEvents: 'none', backdropFilter: 'blur(3px)',
              background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)"
            }}
          />

          {/* Star icon matching the image */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative', zIndex: 10 }}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L9.4 5.4L14.8 5.4L10.6 8.8L12 14.2L8 10.8L4 14.2L5.4 8.8L1.2 5.4L6.6 5.4L8 0Z"
                fill="white"
              />
            </svg>
          </div>
        </motion.div>

        {/* Content positioning to match the image */}
        <motion.div
          style={{ marginBottom: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', flexGrow: 1 }}
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.h3
            style={{
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: 500,
              marginTop: '1rem',
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
              filter: "blur(0px)",
              opacity: 1,
              transition: { duration: 1.2, delay: 0.2 }
            }}
          >
            {pos.title}
          </motion.h3>

          <motion.p
            style={{
              fontSize: '0.875rem',
              color: '#d1d5db',
              lineHeight: 1.5,
              fontWeight: 350,
              marginBottom: '1.5rem',
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
              filter: "blur(0px)",
              opacity: 0.85,
              transition: { duration: 1.2, delay: 0.4 }
            }}
          >
            Join our {pos.dept} department as a {pos.title} based in {pos.location}. This is a {pos.type.toLowerCase()} position.
          </motion.p>

          {/* Learn More with arrow - matching the image */}
          <motion.a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              filter: "blur(0px)",
              opacity: 0.9,
              transition: { duration: 1.2, delay: 0.6 }
            }}
            whileHover={{ filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))" }}
          >
            Apply Now
            <motion.svg
              style={{ marginLeft: '4px', width: '16px', height: '16px' }}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Careers = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', paddingTop: '100px', position: 'relative' }}>
        
        <div 
          onClick={() => navigate(-1)} 
          style={{ color: '#888', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', position: 'absolute', top: '40px', left: '4vw', zIndex: 50, fontWeight: 600 }}
        >
          <MoveLeft size={20} /> Back
        </div>

        {/* PARALLAX HERO SECTION */}
        <main ref={heroRef} style={{ height: '70vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <motion.div 
            style={{ y: textY, opacity, zIndex: 10, textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontFamily: "'Bebas Neue', sans-serif", margin: 0, lineHeight: 0.9, letterSpacing: '2px' }}>
              SHAPE THE <span style={{ color: '#d4ff3a' }}>FUTURE</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#888', maxWidth: '600px', margin: '2rem auto', lineHeight: 1.6 }}>
              Join a collective of award-winning designers, engineers, and visionaries building the next generation of digital experiences.
            </p>
          </motion.div>
          
          {/* Background Ambient Glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(212,255,58,0.05) 0%, rgba(0,0,0,0) 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
        </main>

        {/* WHY JOIN US SECTION */}
        <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
            <motion.div style={{ height: '100%' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ backgroundColor: 'rgba(173, 173, 173, 0.05)' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(15px)', boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.192), inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164)', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', transition: '0.5s' }}>
                <Zap size={32} color="#d4ff3a" style={{ marginBottom: '1.5rem', flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Impactful Work</h3>
                <p style={{ color: '#aaa', lineHeight: 1.6, margin: 0 }}>We partner with global brands to build products that millions of people use every day. Your code and designs will matter.</p>
              </div>
            </motion.div>
            
            <motion.div style={{ height: '100%' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ backgroundColor: 'rgba(173, 173, 173, 0.05)' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(15px)', boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.192), inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164)', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', transition: '0.5s' }}>
                <Globe size={32} color="#d4ff3a" style={{ marginBottom: '1.5rem', flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Work Anywhere</h3>
                <p style={{ color: '#aaa', lineHeight: 1.6, margin: 0 }}>We are a remote-first agency. Work from our beautiful Jakarta studio or from anywhere in the world.</p>
              </div>
            </motion.div>

            <motion.div style={{ height: '100%' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ backgroundColor: 'rgba(173, 173, 173, 0.05)' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(15px)', boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.192), inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164)', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', transition: '0.5s' }}>
                <Users size={32} color="#d4ff3a" style={{ marginBottom: '1.5rem', flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Elite Team</h3>
                <p style={{ color: '#aaa', lineHeight: 1.6, margin: 0 }}>Surround yourself with top-tier talent. We foster a culture of constant learning, mentorship, and creative freedom.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OPEN ROLES SECTION */}
        <section style={{ padding: '6rem 2rem 10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '4rem', textAlign: 'center' }}>OPEN POSITIONS</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {positions.map((pos, i) => (
              <CareerCard key={pos.id} pos={pos} index={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
