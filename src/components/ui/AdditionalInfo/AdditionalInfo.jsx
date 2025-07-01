import React from 'react';
import styles from './AdditionalInfo.module.css';

const AdditionalInfo = ({ businessHours, socialLinks }) => {
  return (
    <div className={styles.additionalInfo}>
      <div className={styles.businessHours}>
        <h4>Business Hours</h4>
        <div className={styles.hoursList}>
          {businessHours.map((schedule, index) => (
            <div key={index} className={styles.hourItem}>
              <span className={styles.day}>{schedule.day}</span>
              <span className={styles.hours}>{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.socialSection}>
        <h4>Follow Us</h4>
        <p>Stay updated with our latest projects and design inspiration</p>
        <div className={styles.socialLinks}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`Follow us on ${social.name}`}
              style={{ '--social-color': social.color }}
            >
              <img src={social.icon} alt={social.name} />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo; 