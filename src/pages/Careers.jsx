import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight, Users, Zap, Globe, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const positions = [
  { id: 1, title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Remote / Jakarta', dept: 'Engineering' },
  { id: 2, title: 'Lead Product Designer', type: 'Full-time', location: 'Jakarta, Indonesia', dept: 'Design' },
  { id: 3, title: 'Creative Art Director', type: 'Full-time', location: 'Remote / Global', dept: 'Creative' },
  { id: 4, title: 'Growth Marketing Manager', type: 'Full-time', location: 'Remote', dept: 'Marketing' }
];

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
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '3rem', textAlign: 'center' }}>OPEN POSITIONS</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {positions.map((pos, i) => (
              <motion.div 
                key={pos.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '2rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ color: '#d4ff3a', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {pos.dept}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>{pos.title}</h3>
                  <div style={{ color: '#888', marginTop: '0.5rem', fontSize: '0.9rem', display: 'flex', gap: '1rem' }}>
                    <span>{pos.type}</span>
                    <span>•</span>
                    <span>{pos.location}</span>
                  </div>
                </div>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MoveRight size={24} color="#000" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
