import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navBar = event.target.closest(`.${styles.navBar}`);
      const mobileButton = event.target.closest(`.${styles.mobileMenuButton}`);
      
      if (isMobileMenuOpen && navBar && !mobileButton) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.leftInfo}>
          <span>Modular & Interior Design Experts</span>
          <span className={styles.dot}>•</span>
          <span>Licensed & Insured</span>
          <span className={styles.dot}>•</span>
          <span>Free Consultations</span>
        </div>
        <div className={styles.rightInfo}>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <div className={styles.socials}>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className={styles.socialIcon} /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className={styles.socialIcon} /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} /></a>
          </div>
          <div className={styles.phone}>
            <span>(123) 456-7890</span>
          </div>
        </div>
      </div>
      <nav className={styles.navBar}>
        <div className={styles.logo}>Vasista</div>
        
        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        
        <div className={styles.navButton}>
          <button className="btn btn-lg">Get Free Consultation</button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 