import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
          <a href="#">Careers</a>
          <a href="#">FAQ</a>
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
        <Link to="/" className={styles.logo}>Vasista</Link>
        
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
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
        
        <div className={styles.navButton}>
          <Link to="/consultation" className="btn btn-lg">Get Free Consultation</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 