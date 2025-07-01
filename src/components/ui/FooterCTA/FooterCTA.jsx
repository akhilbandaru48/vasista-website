import React from 'react';
import styles from './FooterCTA.module.css';

const FooterCTA = () => (
  <footer 
    className={styles.footerCta}
    style={{
      backgroundImage: `linear-gradient(rgb(255 255 255 / 60%), rgb(255 255 255 / 20%)), url('/images/footer-bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className={styles.ctaRow}>
      <h2 className={styles.heading}>Ready to Transform Your Space?</h2>
      <button className="btn btn-lg">Start Your Design Journey Today!</button>
    </div>
    <div className={styles.footerMain}>
      <div className={styles.brandInfo}>
        <div className={styles.logo}>Vasista</div>
        <p>Premium modular and interior design solutions for residential and commercial spaces. Creating extraordinary experiences through innovative design and expert craftsmanship.</p>
        <div className={styles.contactBox}>
          <span>Ready to Get Started?</span>
          <span>Call: (123) 456-7890</span>
        </div>
      </div>
      <div className={styles.linksSection}>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Modular Solutions</a></li>
            <li><a href="#">Interior Design</a></li>
            <li><a href="#">Kitchen Design</a></li>
            <li><a href="#">Custom Furniture</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>123 Design Street, City, TX 12345</li>
            <li>info@vasista.com</li>
            <li>(123) 456-7890</li>
          </ul>
          <div className={styles.socials}>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="social-icon" /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="social-icon" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      © Copyright 2024 • Vasista All Rights Reserved • Privacy Policy
    </div>
  </footer>
);

export default FooterCTA; 