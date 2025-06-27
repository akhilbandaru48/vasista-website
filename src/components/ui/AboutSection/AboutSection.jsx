import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => (
  <section className={styles.about}>
    <div className={styles.aboutContent}>
      <h2 className={styles.heading}>Crafting Dreams Into Reality. Designing Spaces That Inspire.</h2>
      <p className={styles.subheading}>At Vasista, we believe every space has the potential to become extraordinary. Our team of passionate designers and skilled craftsmen work together to create modular solutions and interior designs that not only meet your needs but exceed your expectations. We're committed to transforming houses into homes and spaces into experiences.</p>
      <button className="btn btn-lg">Discover Our Story</button>
      <div className={styles.statsRow}>
        <div className={styles.stat}><span>15+</span> Years of Excellence</div>
        <div className={styles.stat}><span>500+</span> Projects Completed</div>
        <div className={styles.stat}><span>98%</span> Client Satisfaction</div>
        <div className={styles.stat}><span>100%</span> Custom Solutions</div>
      </div>
    </div>
    <div className={styles.aboutImage}>
      <img src="/public/images/about-tree.png" alt="About Our Design Team" />
    </div>
  </section>
);

export default AboutSection; 