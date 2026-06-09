import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="pricing-section">
      <motion.div 
        className="pricing-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={textVariants} className="pricing-title">
          FLEXIBLE PRICING FOR<br/>CREATIVE SOLUTIONS
        </motion.h2>
        <motion.p variants={textVariants} className="pricing-subtitle">
          Choose a plan that fits your needs designed to support your brand<br/>with scalable and impactful creative services.
        </motion.p>
      </motion.div>

      <motion.div 
        className="pricing-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Standard Card */}
        <motion.div variants={cardVariants} className="pricing-card bg-white text-black">
          <div className="pricing-card-header">
            <h3>Standard</h3>
            <p>Perfect for individuals</p>
            <div className="price"><span>$300</span>/project</div>
          </div>
          <ul className="pricing-features">
            <li><Check size={16} /> Basic design support</li>
            <li><Check size={16} /> 1-2 revision rounds</li>
            <li><Check size={16} /> Simple landing page / UI design</li>
            <li><Check size={16} /> Standard delivery time</li>
          </ul>
          <button className="btn btn-outline-black mt-auto">Get Started</button>
        </motion.div>

        {/* Professional Card */}
        <motion.div variants={cardVariants} className="pricing-card bg-purple text-black relative">
          <div className="badge-popular">⭐ Most Popular</div>
          <div className="pricing-card-header">
            <h3>Professional</h3>
            <p>Perfect for Growing Brands</p>
            <div className="price"><span>$800</span>/project</div>
          </div>
          <ul className="pricing-features">
            <li><Check size={16} /> Full design solution (web / app)</li>
            <li><Check size={16} /> Up to 5 revisions</li>
            <li><Check size={16} /> UI/UX strategy included</li>
            <li><Check size={16} /> Design system basics</li>
            <li><Check size={16} /> Priority delivery</li>
          </ul>
          <button className="btn btn-primary mt-auto">Get Started</button>
        </motion.div>

        {/* Custom Plan Card */}
        <motion.div variants={cardVariants} className="pricing-card bg-white text-black">
          <div className="pricing-card-header">
            <h3>Custom Plan</h3>
            <p>Perfect for Large Companies</p>
            <div className="price-text">Talk to Us!</div>
          </div>
          <ul className="pricing-features">
            <li><Check size={16} /> All features from Starter & Pro</li>
            <li><Check size={16} /> End-to-end product design</li>
            <li><Check size={16} /> Advanced UX research</li>
            <li><Check size={16} /> Dedicated designer support</li>
            <li><Check size={16} /> Ongoing design partnership</li>
          </ul>
          <button className="btn btn-outline-black mt-auto">Contact Us</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;
