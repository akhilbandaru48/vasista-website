import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  { icon: '/public/icons/interior-design.svg', title: 'Custom Modular Solutions', desc: 'Tailored modular designs that maximize space efficiency and enhance functionality for any room.' },
  { icon: '/public/icons/interior.svg', title: 'Interior Design & Styling', desc: 'Complete interior transformation services from concept to completion with expert styling.' },
  { icon: '/public/icons/kitchen.svg', title: 'Kitchen & Bathroom Design', desc: 'Innovative kitchen and bathroom solutions that combine beauty with practical functionality.' },
  { icon: '/public/icons/space.svg', title: 'Space Planning & Optimization', desc: 'Strategic space planning to make the most of your square footage and improve flow.' },
  { icon: '/public/icons/living-room.svg', title: 'Custom Furniture & Built-ins', desc: 'Handcrafted furniture and built-in solutions designed specifically for your space.' },
  { icon: '/public/icons/module.svg', title: 'Design Consultation & Planning', desc: 'Professional design consultation to bring your vision to life with detailed planning.' },
];

const ServicesSection = () => (
  <section className={styles.services}>
    <h2 className={styles.heading}>Comprehensive Design Services That Transform Your Space</h2>
    <div className={styles.servicesContent}>
      <div className={styles.mainImage}>
        <img src="/icons/Automated_Testing.avif" alt="Modular & Interior Design Services" />
      </div>
      <div className={styles.cardsGrid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx}>
            <img src={service.icon} alt={service.title} className={styles.icon} />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 