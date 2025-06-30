import React from 'react';
import styles from './HeroSection.module.css';
import BadgeRow from '../BadgeRow/BadgeRow';

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <BadgeRow 
        icon="/icons/vasista-element-arrow.svg" 
        text="Over 15 Years of Modular & Interior Design Excellence"
        iconAlt="Modular Interior Design Hero"
      />
      <h1 className={styles.title}>Transform Your <span className={styles.highlight}>Space Into</span> Something Extraordinary</h1>
      <p className={styles.subtitle}>From custom modular solutions to stunning interior transformations, we bring your vision to life with innovative design, premium materials, and expert craftsmanship. Your dream space is just one consultation away.</p>
      <div className={styles.ctaRow}>
        <button className="btn btn-lg">Start Your Transformation</button>
        <div className={styles.socials}>
          <a href="#" aria-label="Twitter"><img src="/icons/twitter.svg" alt="Twitter" className="social-icon" /></a>
          <a href="#" aria-label="Facebook"><img src="/icons/facebook.svg" alt="Facebook" className="social-icon" /></a>
          <a href="#" aria-label="LinkedIn"><img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" /></a>
        </div>
      </div>
    </div>
    <div className={styles.heroImage}>
      <img src="/images/hero-modern-interior.jpg" alt="Modern Interior Design Hero" />
    </div>
  </section>
);

export default HeroSection; 