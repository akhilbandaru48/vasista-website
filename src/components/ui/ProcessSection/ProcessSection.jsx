import React from 'react';
import styles from './ProcessSection.module.css';

const steps = [
  { 
    number: '01',
    title: 'Initial Consultation', 
    desc: 'We meet to understand your vision, lifestyle needs, and project goals to create a personalized design approach.' 
  },
  { 
    number: '02',
    title: 'Design & Planning', 
    desc: 'Our team develops detailed designs, 3D renderings, and comprehensive project plans tailored to your space.' 
  },
  { 
    number: '03',
    title: 'Fabrication & Installation', 
    desc: 'Skilled craftsmen bring your design to life with precision installation and quality craftsmanship.' 
  },
  { 
    number: '04',
    title: 'Final Reveal & Support', 
    desc: 'We ensure everything exceeds your expectations and provide ongoing support for your transformed space.' 
  },
];

const ProcessSection = () => (
  <section className={styles.process}>
    <h2 className={styles.heading}>Our Proven Design Process</h2>
    <div className={styles.stepper}>
      {steps.map((step, idx) => (
        <div className={styles.step} key={idx}>
          <div className={styles.stepIcon}>{step.number}</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
          {idx < steps.length - 1 && <div className={styles.stepConnector}></div>}
        </div>
      ))}
    </div>
  </section>
);

export default ProcessSection; 