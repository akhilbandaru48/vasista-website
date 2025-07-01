import React from 'react';
import Header from '../components/ui/Header/Header';
import HeroSection from '../components/ui/HeroSection/HeroSection';
import AboutSection from '../components/ui/AboutSection/AboutSection';
import ServicesSection from '../components/ui/ServicesSection/ServicesSection';
import ReputationSection from '../components/ui/ReputationSection/ReputationSection';
import ProcessSection from '../components/ui/ProcessSection/ProcessSection';
import GallerySection from '../components/ui/GallerySection/GallerySection';
import TestimonialsSection from '../components/ui/TestimonialsSection/TestimonialsSection';
import BlogSection from '../components/ui/BlogSection/BlogSection';
import FooterCTA from '../components/ui/FooterCTA/FooterCTA';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReputationSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <FooterCTA />
    </div>
  );
};

export default Home; 