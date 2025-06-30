import React from 'react';
import styles from './ReputationSection.module.css';

const ReputationSection = () => (
  <section className={styles.reputation}>
    <div className={styles.reputationContent}>
      <h2 className={styles.heading}>A Reputation Built on Innovation, Quality, and Exceptional Design</h2>
      <p className={styles.subheading}>We take pride in creating spaces that not only look stunning but also function perfectly for your lifestyle. Our commitment to innovative design, premium materials, and meticulous craftsmanship sets us apart in the industry.</p>
      <button className="btn btn-lg">Explore Our Portfolio</button>
      <div className={styles.featuresRow}>
        <div 
          className={styles.featureCard}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/award-winning-design.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h3>Award-Winning Design Team</h3>
          <p>Our certified interior designers and skilled craftsmen bring years of experience and creative vision to every project.</p>
        </div>
        <div 
          className={styles.featureCard}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/project-management.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h3>Seamless Project Management</h3>
          <p>From initial concept to final installation, we handle every detail ensuring a stress-free experience and exceptional results.</p>
        </div>
      </div>
    </div>
    <div className={styles.reputationImage}>
      <img src="/images/reputation-excellence.jpg" alt="Design Excellence Reputation" />
    </div>
  </section>
);

export default ReputationSection; 