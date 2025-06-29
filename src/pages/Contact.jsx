import React from 'react';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from './Contact.module.css';

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
          <h2>Contact Form</h2>
          <div className={styles.placeholder}>
            <p>Contact form coming soon. For inquiries, email us at <a href="mailto:info@vasista.com">info@vasista.com</a>.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact; 