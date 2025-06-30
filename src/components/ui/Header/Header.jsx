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

  // Helper function to check if a link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

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
          <a href="#" aria-label="Careers">Careers</a>
          <a href="#" aria-label="FAQ">FAQ</a>
          <div className={styles.socials}>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" className={styles.socialIcon} />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
            </a>
          </div>
          <div className={styles.phone}>
            <span>(123) 456-7890</span>
          </div>
        </div>
      </div>
      <nav className={styles.navBar} role="navigation" aria-label="Main navigation">
        <Link to="/" className={styles.logo} aria-label="Vasista Home">
          Vasista
        </Link>
        
        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul 
          className={`${styles.menu} ${isMobileMenuOpen ? styles.active : ''}`}
          id="main-menu"
          role="menubar"
        >
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <Link 
                to={item.path} 
                className={`${styles.menuLink} ${isActiveLink(item.path) ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
                aria-current={isActiveLink(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className={styles.navButton}>
          <Link to="/consultation" className="btn btn-lg" aria-label="Get Free Consultation">
            Get Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 