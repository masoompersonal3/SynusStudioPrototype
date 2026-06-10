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
      className="relative rounded-[32px] overflow-hidden"
      style={{
        width: "100%",
        minHeight: "380px",
        transformStyle: "preserve-3d",
        backgroundColor: "#080a10",
        boxShadow: "0 -10px 100px 10px rgba(212, 255, 58, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.8)",
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
        className="absolute inset-0 pointer-events-none"
        style={{
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
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #000000 0%, #000000 70%)", zIndex: 0 }}
        animate={{ z: -1 }}
      />

      {/* Noise texture overlay */}
      <motion.div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          zIndex: 10
        }}
        animate={{ z: -0.5 }}
      />

      {/* Neon glow effect matching the website theme (Green & Red) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, rgba(212, 255, 58, 0.6) -10%, rgba(0, 0, 0, 0) 70%),
            radial-gradient(ellipse at bottom left, rgba(255, 51, 0, 0.5) -10%, rgba(0, 0, 0, 0) 70%)
          `,
          filter: "blur(40px)",
          zIndex: 20
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.6,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3"
        style={{
          background: `radial-gradient(circle at bottom center, rgba(212, 255, 58, 0.4) -20%, rgba(0, 0, 0, 0) 60%)`,
          filter: "blur(45px)",
          zIndex: 21
        }}
        animate={{
          opacity: isHovered ? 0.85 : 0.5,
          y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
          z: 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Enhanced bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(212,255,58,0.7) 50%, rgba(255,255,255,0.05) 100%)", zIndex: 25 }}
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 4px rgba(212, 255, 58, 0.7), 0 0 30px 6px rgba(255, 51, 0, 0.5)"
            : "0 0 10px 2px rgba(212, 255, 58, 0.3), 0 0 15px 3px rgba(255, 51, 0, 0.2)",
          opacity: isHovered ? 1 : 0.7,
          z: 0.5
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Card content */}
      <motion.div
        className="relative flex flex-col h-full p-8"
        style={{ zIndex: 40 }}
        animate={{ z: 2 }}
      >
        <motion.div
          className="mb-auto"
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div style={{ color: '#d4ff3a', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            {pos.dept}
          </div>
          <motion.h3
            className="text-white"
            style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1.5rem 0', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.5)" : "none",
              filter: "blur(0px)",
              opacity: 1,
              transition: { duration: 1.2, delay: 0.1 }
            }}
          >
            {pos.title}
          </motion.h3>

          <motion.div
            style={{ color: '#aaa', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', lineHeight: 1.5 }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.5)" : "none",
              filter: "blur(0px)",
              opacity: 0.85,
              transition: { duration: 1.2, delay: 0.2 }
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3300' }}></div>
              {pos.type}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d4ff3a' }}></div>
              {pos.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Apply Button / Arrow */}
        <motion.div
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer'
          }}
          initial={{ filter: "blur(3px)", opacity: 0.7 }}
          animate={{
            filter: "blur(0px)",
            opacity: 0.9,
            transition: { duration: 1.2, delay: 0.3 }
          }}
          whileHover={{ filter: "drop-shadow(0 0 8px rgba(212, 255, 58, 0.8))" }}
        >
          Apply Now
          <motion.div
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ 
              width: '40px', height: '40px', borderRadius: '50%', 
              background: 'rgba(255,255,255,0.1)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <ArrowRight size={18} />
          </motion.div>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                <Zap size={32} color="#d4ff3a" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Impactful Work</h3>
                <p style={{ color: '#aaa', lineHeight: 1.6 }}>We partner with global brands to build products that millions of people use every day. Your code and designs will matter.</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                <Globe size={32} color="#d4ff3a" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Work Anywhere</h3>
                <p style={{ color: '#aaa', lineHeight: 1.6 }}>We are a remote-first agency. Work from our beautiful Jakarta studio or from anywhere in the world.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                <Users size={32} color="#d4ff3a" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Elite Team</h3>
                <p style={{ color: '#aaa', lineHeight: 1.6 }}>Surround yourself with top-tier talent. We foster a culture of constant learning, mentorship, and creative freedom.</p>
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
