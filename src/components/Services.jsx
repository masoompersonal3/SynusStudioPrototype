import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const servicesData = [
  {
    num: "01",
    name: "Web Dev",
    desc: "Custom web applications, landing pages, and responsive sites built with modern frameworks. Performance-driven, scalable, and beautifully designed.",
    sublist: ["React / Next.js", "Frontend", "Backend", "Full-Stack"]
  },
  {
    num: "02",
    name: "App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences from initial concept to app store deployment.",
    sublist: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    num: "03",
    name: "Automation Tools",
    desc: "Custom scripts, bots, and workflow automations to eliminate repetitive tasks. Boosting productivity through intelligent system integrations.",
    sublist: ["Workflow Scripts", "API Integrations", "Data Scraping", "Task Bots"]
  },
  {
    num: "04",
    name: "College Projects",
    desc: "Complete assistance for college level mini and major projects. Including comprehensive reports, presentations (PPT), and detailed execution logs.",
    sublist: ["Mini Projects", "Major Projects", "Reports & Logs", "PPTs"]
  },
  {
    num: "05",
    name: "Domain & Hosting",
    desc: "End-to-end service from local development to global deployment. We handle server configuration, domain acquisition, and cloud hosting setup.",
    sublist: ["Domain Setup", "Cloud Hosting", "SSL Certificates", "Deployment"]
  },
  {
    num: "06",
    name: "Hackathon Projects",
    desc: "Rapid prototyping and advanced concept development for hackathons. Fast-paced, high-impact deliverables built to impress judges.",
    sublist: ["Rapid Prototyping", "MVP Build", "Pitch Decks", "Complex Logic"]
  },
  {
    num: "07",
    name: "Portfolio Services",
    desc: "Bespoke personal and agency portfolio development. Showcasing your work with high-end animations, unique layouts, and flawless typography.",
    sublist: ["Personal Sites", "Agency Portfolios", "Case Studies", "Custom UI"]
  }
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-head">
        <div className="services-head-num">[04] / Services</div>
        <h2 className="services-head-title">Services We Provide</h2>
        <div className="services-head-count">07 Categories</div>
      </div>
      <ul className="services-list">
        {servicesData.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <li className={`services-item ${isOpen ? 'open' : ''}`} key={index}>
              <button 
                className="services-trigger" 
                onClick={() => togglePanel(index)}
              >
                <span className="services-num">{service.num}</span>
                <span className="services-name">{service.name}</span>
                <span className="services-arrow">{isOpen ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    className="services-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="services-panel-inner">
                      <div className="services-panel-content">
                        <p className="services-desc">{service.desc}</p>
                        <ul className="services-sublist">
                          {service.sublist.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Services;
