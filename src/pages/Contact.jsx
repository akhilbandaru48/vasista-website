import React from 'react';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import ContactInfo from '../components/ui/ContactInfo/ContactInfo';
import styles from '../styles/Contact.module.css';
import AdditionalInfo from '../components/ui/AdditionalInfo/AdditionalInfo';

const Contact = () => {
  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
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

  return (
    
    <PageLayout>
      <PageHero
        badgeIcon="/icons/vasista-element-arrow.svg"
        badgeText="Get In Touch"
        title="Contact Vasista"
        subtitle="Have a question or want to start your project? Reach out to our team and we'll get back to you soon."
        ctaText="Call Now"
        ctaLink="tel:1234567890"
      />
      
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.formSection}>
              <ContactForm />
            </div>
            
            <div className={styles.infoSection}>
              <ContactInfo />
            </div>

          </div>
          <div>
          <AdditionalInfo 
          businessHours={businessHours}
          socialLinks={socialLinks}
/>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact; 