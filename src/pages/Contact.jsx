import React from 'react';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import ContactInfo from '../components/ui/ContactInfo/ContactInfo';
import styles from '../styles/Contact.module.css';

const Contact = () => {
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
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact; 