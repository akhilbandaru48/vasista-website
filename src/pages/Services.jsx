import React from 'react';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <PageLayout>
      <PageHero
        badgeIcon="/icons/vasista-element-arrow.svg"
        badgeText="Our Services"
        title="Comprehensive Design Solutions"
        subtitle="From concept to completion, we offer a full range of modular and interior design services tailored to your unique needs and vision."
        ctaText="Get Free Consultation"
        ctaLink="/consultation"
        backgroundImage="/images/services-hero.jpg"
      />
      
      <section className={styles.servicesOverview}>
        <div className={styles.container}>
          <h2>What We Offer</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/icons/module.svg" alt="Modular Design" />
              </div>
              <h3>Modular Design</h3>
              <p>Custom modular solutions for kitchens, bathrooms, and living spaces that maximize functionality and style.</p>
              <ul>
                <li>Custom cabinetry design</li>
                <li>Space optimization</li>
                <li>Multi-functional solutions</li>
                <li>Premium materials</li>
              </ul>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/icons/interior.svg" alt="Interior Design" />
              </div>
              <h3>Interior Design</h3>
              <p>Complete interior transformation services that reflect your personality and enhance your lifestyle.</p>
              <ul className={styles.serviceList}>
                <li>Space planning & layout</li>
                <li>Color & material selection</li>
                <li>Furniture & decor</li>
                <li>Lighting design</li>
              </ul>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/icons/kitchen.svg" alt="Kitchen Design" />
              </div>
              <h3>Kitchen Design</h3>
              <p>Dream kitchens that combine beauty with functionality, from traditional to contemporary styles.</p>
              <ul>
                <li>Custom kitchen layouts</li>
                <li>Cabinet & countertop design</li>
                <li>Appliance integration</li>
                <li>Storage solutions</li>
              </ul>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/icons/living-room.svg" alt="Living Room Design" />
              </div>
              <h3>Living Room Design</h3>
              <p>Comfortable and stylish living spaces that become the heart of your home.</p>
              <ul>
                <li>Furniture arrangement</li>
                <li>Entertainment centers</li>
                <li>Storage & display units</li>
                <li>Accent pieces</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/icons/bathroom.svg" alt="Bathroom Design" />
              </div>
              <h3>Bathroom Design</h3>
              <p>Luxurious and functional bathroom spaces that provide both comfort and style for your daily routine.</p>
              <ul>
                <li>Custom vanity design</li>
                <li>Tile & fixture selection</li>
                <li>Storage optimization</li>
                <li>Lighting & ventilation</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/icons/bedroom.svg" alt="Bedroom Design" />
              </div>
              <h3>Bedroom Design</h3>
              <p>Peaceful and personalized bedroom sanctuaries that promote rest and relaxation.</p>
              <ul>
                <li>Custom bed frames</li>
                <li>Wardrobe & storage</li>
                <li>Lighting & ambiance</li>
                <li>Color & texture design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2>Our Design Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Consultation</h3>
              <p>We start with a free consultation to understand your vision, needs, and budget requirements.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Design Concept</h3>
              <p>Our team creates detailed design concepts and 3D renderings to bring your vision to life.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Planning & Approval</h3>
              <p>We refine the design based on your feedback and create detailed plans for implementation.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Installation</h3>
              <p>Our skilled craftsmen install your new space with precision and attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        {/* <div className={styles.container}>
          <h2>Service Packages</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Basic Package</h3>
              <div className={styles.price}>$2,500</div>
              <p className={styles.priceDescription}>Perfect for single room transformations</p>
              <ul>
                <li>Initial consultation</li>
                <li>Design concept</li>
                <li>Material selection</li>
                <li>Basic installation</li>
              </ul>
              <a href="/contact" className="btn btn-outline">Get Started</a>
            </div>
            
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.featuredBadge}>Most Popular</div>
              <h3>Premium Package</h3>
              <div className={styles.price}>$5,500</div>
              <p className={styles.priceDescription}>Complete home transformation</p>
              <ul>
                <li>Comprehensive consultation</li>
                <li>3D renderings</li>
                <li>Premium materials</li>
                <li>Full installation</li>
                <li>Post-installation support</li>
              </ul>
              <a href="/contact" className="btn btn-lg">Get Started</a>
            </div>
            
            <div className={styles.pricingCard}>
              <h3>Luxury Package</h3>
              <div className={styles.price}>$10,000+</div>
              <p className={styles.priceDescription}>Custom luxury solutions</p>
              <ul>
                <li>Personalized design</li>
                <li>Custom furniture</li>
                <li>Luxury materials</li>
                <li>Project management</li>
                <li>Warranty coverage</li>
              </ul>
              <a href="/contact" className="btn btn-outline">Get Started</a>
            </div>
          </div>
        </div> */}
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Space?</h2>
            <p>Let's discuss your project and create something extraordinary together.</p>
            <div className={styles.ctaButtons}>
              <a href="/consultation" className="btn btn-lg">Schedule Consultation</a>
              <a href="/projects" className="btn btn-outline">View Portfolio</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services; 