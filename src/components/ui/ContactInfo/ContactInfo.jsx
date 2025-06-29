import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: 'Email Us',
      value: 'info@vasista.com',
      link: 'mailto:info@vasista.com',
      description: 'Send us an email anytime'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Visit Us',
      value: '123 Design Street, Creative City, CC 12345',
      link: 'https://maps.google.com',
      description: 'Schedule a consultation'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '/icons/facebook.svg',
      link: 'https://facebook.com/vasista',
      color: '#1877f2'
    },
    {
      name: 'Twitter',
      icon: '/icons/twitter.svg',
      link: 'https://twitter.com/vasista',
      color: '#1da1f2'
    },
    {
      name: 'LinkedIn',
      icon: '/icons/linkedin.svg',
      link: 'https://linkedin.com/company/vasista',
      color: '#0077b5'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className={styles.contactInfoContainer}>
      <div className={styles.contactMethods}>
        <div className={styles.contactMethodsHeader}>
        <h3>Get in Touch</h3>
        <p>Choose your preferred way to reach us</p>
        </div>
       
        <div className={styles.methodsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={styles.contactMethod}>
              <div className={styles.methodIcon}>
                {method.icon}
              </div>
              <div className={styles.methodContent}>
                <h4>{method.title}</h4>
                <a 
                  href={method.link} 
                  className={styles.methodValue}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.value}
                </a>
                <p className={styles.methodDescription}>{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default ContactInfo; 