import React from 'react';
import styles from './GallerySection.module.css';

const images = [
  '/public/images/gallery1.png',
  '/public/images/gallery2.png',
  '/public/images/gallery3.png',
  '/public/images/gallery4.png',
  '/public/images/gallery5.png',
  '/public/images/gallery6.png',
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