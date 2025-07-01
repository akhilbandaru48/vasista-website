import React from 'react';
import styles from './PageHero.module.css';
import BadgeRow from '../BadgeRow/BadgeRow';

const PageHero = ({ 
  badgeIcon, 
  badgeText, 
  title, 
  subtitle, 
  highlightText = '', 
  ctaText = '', 
  ctaLink = '/contact',
  showSocials = false,
  backgroundImage = ''
}) => {
  const renderTitle = () => {
    if (highlightText) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className={styles.highlight}>{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  const heroStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgb(255 255 255 / 60%), rgb(255 255 255 / 20%)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section className={styles.pageHero} style={heroStyle}>
      <div className={styles.heroContent}>
        {badgeIcon && badgeText && (
          <BadgeRow 
            icon={badgeIcon} 
            text={badgeText}
            iconAlt="Page Hero Badge"
          />
        )}
        <h1 className={styles.title}>{renderTitle()}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaText && (
          <div className={styles.ctaRow}>
            <a href={ctaLink} className="btn btn-lg">{ctaText}</a>
            {showSocials && (
              <div className={styles.socials}>
                <a href="#" aria-label="Twitter"><img src="/icons/twitter.svg" alt="Twitter" className="social-icon" /></a>
                <a href="#" aria-label="Facebook"><img src="/icons/facebook.svg" alt="Facebook" className="social-icon" /></a>
                <a href="#" aria-label="LinkedIn"><img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" /></a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero; 