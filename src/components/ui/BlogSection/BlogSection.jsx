import React from 'react';
import styles from './BlogSection.module.css';

const blogs = [
  {
    image: '/public/images/blog1.png',
    title: 'Maximizing Small Spaces: 5 Modular Design Secrets',
    date: 'June 15, 2023',
    desc: 'Discover innovative modular solutions that transform cramped spaces into functional, beautiful areas.',
  },
  {
    image: '/public/images/blog2.png',
    title: '2024 Interior Design Trends: What\'s Hot This Year',
    date: 'May 20, 2023',
    desc: 'Explore the latest design trends and how to incorporate them into your modular and interior projects.',
  },
  {
    image: '/public/images/blog3.png',
    title: 'Kitchen Design Revolution: Smart Modular Solutions',
    date: 'Jul 2, 2023',
    desc: 'Learn how modern modular kitchen designs are revolutionizing the heart of every home.',
  },
];

const BlogSection = () => (
  <section className={styles.blog}>
    <h2 className={styles.heading}>The Vasista Design Blog</h2>
    <div className={styles.cardsGrid}>
      {blogs.map((b, idx) => (
        <div className={styles.card} key={idx}>
          <img src={b.image} alt={b.title} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <span className={styles.date}>{b.date}</span>
            <h3 className={styles.cardTitle}>{b.title}</h3>
            <p className={styles.cardDesc}>{b.desc}</p>
            <a href="#" className={styles.readMore}>Read More</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection; 