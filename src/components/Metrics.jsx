import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, TrendingUp, Award } from 'lucide-react';

const Counter = ({ value }) => {
  const numMatches = value.match(/(\d+)/);
  const targetNumber = numMatches ? parseInt(numMatches[1], 10) : 0;
  const suffix = value.replace(/[0-9]/g, '');

  const [count, setCount] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && targetNumber > 1) {
      let start = 1;
      const end = targetNumber;

      const duration = 2000;
      const incrementTime = Math.max(duration / end, 10);

      const timer = setInterval(() => {
        start += Math.ceil((end - start) / 20) || 1;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    } else if (inView) {
      setCount(targetNumber);
    }
  }, [inView, targetNumber]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Metrics = () => {
  return (
    <section className="metrics-section">
      <div className="metrics-container">
        <div className="metrics-left">
           <div className="overflow-hidden">
              <motion.h2 
                className="metrics-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6 }}
              >
                CREATIVE SOLUTIONS
              </motion.h2>
           </div>
           <div className="overflow-hidden metrics-title-row">
              <motion.h2 
                className="metrics-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                BUILT FOR
              </motion.h2>
              <motion.div 
                className="wavy-graphic" 
                style={{ width: '120px' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
           </div>
           <div className="overflow-hidden">
              <motion.h2 
                className="metrics-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                REAL IMPACT
              </motion.h2>
           </div>
           
           <motion.p 
             className="metrics-subtext"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
           >
             We combine strategic thinking with creative excellence to deliver measurable results that propel your brand forward.
           </motion.p>
        </div>

        <div className="metrics-right">
           <div className="metrics-row">
              {/* Card 1 */}
              <motion.div className="metric-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="card__shine" />
                <div className="card__glow" />
                <div className="card__content">
                  <div className="card__badge">NEW</div>
                  <div className="card__image" style={{ background: 'linear-gradient(45deg, #d4ff3a, #b3d92f)' }}>
                    <div className="card-top" style={{ padding: '1rem', color: '#000' }}>
                       <span className="card-label">CLIENT RETENTION</span>
                       <div className="card-icon" style={{ background: 'rgba(0,0,0,0.1)' }}><CheckCircle2 size={18} /></div>
                    </div>
                  </div>
                  <div className="card__text" style={{ marginTop: 'auto' }}>
                     <p className="card__title">Retention Rate</p>
                     <p className="card__description">High satisfaction</p>
                  </div>
                  <div className="card__footer">
                    <h3 className="metric-number"><Counter value="98%" /></h3>
                    <div className="card__button">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div className="metric-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="card__shine" />
                <div className="card__glow" />
                <div className="card__content">
                  <div className="card__image" style={{ background: 'linear-gradient(45deg, #a855f7, #9333ea)' }}>
                    <div className="card-top" style={{ padding: '1rem', color: '#fff' }}>
                       <span className="card-label">PROJECTS DELIVERED</span>
                       <div className="card-icon" style={{ background: 'rgba(255,255,255,0.2)' }}><CheckCircle2 size={18} /></div>
                    </div>
                  </div>
                  <div className="card__text" style={{ marginTop: 'auto' }}>
                     <p className="card__title">Completed Work</p>
                     <p className="card__description">Global projects</p>
                  </div>
                  <div className="card__footer">
                    <h3 className="metric-number"><Counter value="120+" /></h3>
                    <div className="card__button">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
           </div>
           
           <div className="metrics-row">
              {/* Card 3 */}
              <motion.div className="metric-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="card__shine" />
                <div className="card__glow" />
                <div className="card__content">
                  <div className="card__image" style={{ background: 'linear-gradient(45deg, #ff5e5e, #e04848)' }}>
                    <div className="card-top" style={{ padding: '1rem', color: '#fff' }}>
                       <span className="card-label">REVENUE GENERATED</span>
                       <div className="card-icon" style={{ background: 'rgba(255,255,255,0.2)' }}><TrendingUp size={18} /></div>
                    </div>
                  </div>
                  <div className="card__text" style={{ marginTop: 'auto' }}>
                     <p className="card__title">Total Value</p>
                     <p className="card__description">Added for clients</p>
                  </div>
                  <div className="card__footer">
                    <h3 className="metric-number"><Counter value="45M" /></h3>
                    <div className="card__button">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div className="metric-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="card__shine" />
                <div className="card__glow" />
                <div className="card__content">
                  <div className="card__badge" style={{ background: '#3b82f6' }}>TOP</div>
                  <div className="card__image" style={{ background: 'linear-gradient(45deg, #3b82f6, #2563eb)' }}>
                    <div className="card-top" style={{ padding: '1rem', color: '#fff' }}>
                       <span className="card-label">AWARDS WON</span>
                       <div className="card-icon" style={{ background: 'rgba(255,255,255,0.2)' }}><Award size={18} /></div>
                    </div>
                  </div>
                  <div className="card__text" style={{ marginTop: 'auto' }}>
                     <p className="card__title">Recognition</p>
                     <p className="card__description">Industry accolades</p>
                  </div>
                  <div className="card__footer">
                    <h3 className="metric-number"><Counter value="15+" /></h3>
                    <div className="card__button">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
