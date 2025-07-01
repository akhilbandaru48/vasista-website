import React from 'react';
import styles from './GallerySection.module.css';

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/kitchen-renovation.jpg',
  '/images/living-room-design.jpg',
  '/images/bathroom-renovation.jpg',
];

const GallerySection = () => (
  <section className={styles.gallery}>
    <h2 className={styles.heading}>Transforming Spaces Into Extraordinary Experiences</h2>
    <div className={styles.grid}>
      {images.map((src, idx) => (
        <div className={styles.imageWrapper} key={idx}>
          <img src={src} alt={`Gallery ${idx + 1}`} />
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection; 