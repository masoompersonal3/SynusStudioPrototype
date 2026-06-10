import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MoveLeft } from 'lucide-react';
import { FooterTop } from '../components/Footer';

const projectData = {
  1: { title: 'IPNPROXY', type: 'Website', img: '/assets/1.png' },
  2: { title: 'BOOSTIFY', type: 'Website', img: '/assets/2.png' },
  3: { title: 'WAVEPROXIES', type: 'Website', img: '/assets/3.png' },
  4: { title: 'IPNVPN', type: 'Mobile App', img: '/assets/4.jpeg' },
  5: { title: 'BATIVIA', type: 'Website', img: '/assets/5.jpeg' },
  6: { title: 'BAEDECO', type: 'Website', img: '/assets/6.png' },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) {
    return <div style={{ color: 'white', paddingTop: '20vh', textAlign: 'center', minHeight: '100vh' }}>Project Not Found</div>;
  }

  return (
    <>
      <div style={{ backgroundColor: '#0b0f19', color: '#fff', minHeight: '100vh', paddingTop: '150px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div 
            onClick={() => navigate(-1)} 
            style={{ color: '#888', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', cursor: 'pointer' }}
          >
            <MoveLeft size={20} /> Back to Projects
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: "'Bebas Neue', sans-serif", margin: '0 0 1rem 0', lineHeight: 1 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '4rem', fontWeight: 'bold' }}
          >
            {project.type}
          </motion.div>

          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            src={project.img} 
            alt={project.title} 
            style={{ width: '100%', height: '60vh', objectFit: 'cover', borderRadius: '30px', marginBottom: '4rem' }}
          />

          <div className="project-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', paddingBottom: '6rem' }}>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: "'Bebas Neue', sans-serif", color: '#d4ff3a' }}>Client Requirements</h3>
              <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '1.1rem' }}>
                The client approached us to redefine their digital presence and create a seamless {project.type.toLowerCase()} experience. They needed a highly scalable platform capable of handling intense user traffic while maintaining a premium, modern aesthetic. The primary objective was to increase conversion rates and establish a strong brand identity in a competitive market.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: "'Bebas Neue', sans-serif", color: '#d4ff3a' }}>Our Solution</h3>
              <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '1.1rem' }}>
                We completely overhauled the architecture using cutting-edge technologies. By implementing dynamic animations and a custom design system, we ensured the {project.type.toLowerCase()} felt alive and responsive. We integrated advanced caching and optimized assets, resulting in a 300% increase in load speeds and a dramatic boost in user engagement.
              </p>
            </div>
          </div>

          <div style={{ padding: '4rem', background: '#111', borderRadius: '30px', marginBottom: '6rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontFamily: "'Bebas Neue', sans-serif" }}>Client Review</h3>
            <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontStyle: 'italic', color: '#fff', marginBottom: '2rem' }}>
              "SynusStudio didn't just build a {project.type.toLowerCase()}; they built an experience. Their attention to detail and commitment to excellence totally transformed our brand. We couldn't be happier with the results."
            </p>
            <div style={{ color: '#d4ff3a', fontWeight: 'bold' }}>— CEO, {project.title}</div>
          </div>

        </div>
        <FooterTop />
      </div>
    </>
  );
};

export default ProjectDetails;
