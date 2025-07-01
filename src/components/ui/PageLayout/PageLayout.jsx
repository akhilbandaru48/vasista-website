import React from 'react';
import Header from '../Header/Header';
import FooterCTA from '../FooterCTA/FooterCTA';
import styles from './PageLayout.module.css';

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`${styles.pageLayout} ${className}`}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <FooterCTA />
    </div>
  );
};

export default PageLayout; 