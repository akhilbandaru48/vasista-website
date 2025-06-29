import React from 'react';
import styles from './AboutSection.module.css';
import BadgeRow from '../BadgeRow/BadgeRow';

const AboutSection = () => (
  <section className={styles.aboutSection}>
    <div className={styles.aboutContent}>
      <div className={styles.aboutContentText}>
        <div className={styles.aboutContentTextHeading}><h2 className={styles.heading}>Crafting Dreams Into Reality. Designing Spaces That Inspire.</h2></div>
        <div className={styles.aboutContentTextSubheading}>
          <BadgeRow
            icon="/icons/vasista-element-arrow.svg" 
            text="Transforming Spaces with Innovative Design Solutions"
            iconAlt="Innovative Design Solutions"
          />
          <p className={styles.subheading}>Our team of passionate designers and skilled craftsmen work together to create modular solutions and interior designs that not only meet your needs but exceed your expectations. We're committed to transforming houses into homes and spaces into experiences.</p>
          <button className="btn btn-lg">Discover Our Story</button>
        </div>
      </div>

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