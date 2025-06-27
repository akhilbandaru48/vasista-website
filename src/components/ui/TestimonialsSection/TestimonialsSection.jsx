import React from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    review: "Vasista transformed our cramped kitchen into a functional, beautiful space. Their modular solutions maximized every inch, and the design exceeded our expectations. The team was professional and creative throughout.",
    location: 'Kitchen Renovation, Residential Client, TX',
  },
  {
    name: 'Michael Chen',
    review: 'The custom built-ins they designed for our living room are absolutely stunning. Their attention to detail and quality craftsmanship is unmatched. Our space now feels both elegant and practical.',
    location: 'Living Room Design, Professional Client, TX',
  },
];

const TestimonialsSection = () => (
  <section className={styles.testimonials}>
    <h2 className={styles.heading}>What Our Clients Are Saying</h2>
    <div className={styles.cardsGrid}>
      {testimonials.map((t, idx) => (
        <div className={styles.card} key={idx}>
          <p className={styles.review}>&ldquo;{t.review}&rdquo;</p>
          <div className={styles.meta}>
            <span className={styles.name}>{t.name}</span>
            <span className={styles.location}>{t.location}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection; 