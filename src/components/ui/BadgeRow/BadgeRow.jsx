import React from 'react';
import styles from './BadgeRow.module.css';

const BadgeRow = ({ icon, text, iconAlt = "Badge Icon" }) => {
  return (
    <div className={styles.badgeRow}>
      <div className={styles.badgeIcon}>
        <img src={icon} alt={iconAlt} />
      </div>
      <div className={styles.badge}>{text}</div>
    </div>
  );
};

export default BadgeRow; 