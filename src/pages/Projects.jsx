import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '/icons/vasista-element-arrow.svg' },
    { id: 'kitchen', name: 'Kitchen Design', icon: '/icons/kitchen.svg' },
    { id: 'living', name: 'Living Room', icon: '/icons/living-room.svg' },
    { id: 'bathroom', name: 'Bathroom', icon: '/icons/faucet.svg' },
    { id: 'office', name: 'Office Space', icon: '/icons/space.svg' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Kitchen Transformation',
      category: 'kitchen',
      shortDescription: 'A complete kitchen renovation featuring custom cabinetry, quartz countertops.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
      area: '250 sq ft',
      duration: '6 weeks',
      budget: '$25,000'
    },
    {
      id: 2,
      title: 'Contemporary Living Room',
      category: 'living',
      shortDescription: 'Open-concept living space with modular furniture and integrated entertainment system.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
      area: '400 sq ft',
      duration: '4 weeks',
      budget: '$18,000'
    },
    {
      id: 3,
      title: 'Luxury Master Bathroom',
      category: 'bathroom',
      shortDescription: 'Spa-inspired bathroom with custom vanities, walk-in shower, and premium fixtures.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&crop=center',
      area: '180 sq ft',
      duration: '5 weeks',
      budget: '$22,000'
    },
    {
      id: 4,
      title: 'Home Office Suite',
      category: 'office',
      shortDescription: 'Professional home office with built-in storage, ergonomic furniture, and modern lighting.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center',
      area: '200 sq ft',
      duration: '3 weeks',
      budget: '$15,000'
    },
    {
      id: 5,
      title: 'Open Kitchen & Dining',
      category: 'kitchen',
      shortDescription: 'Seamless integration of kitchen and dining area with custom island and breakfast nook.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
      area: '350 sq ft',
      duration: '7 weeks',
      budget: '$30,000'
    },
    {
      id: 6,
      title: 'Family Entertainment Room',
      category: 'living',
      shortDescription: 'Multi-functional family room with built-in entertainment center and flexible seating.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
      area: '450 sq ft',
      duration: '5 weeks',
      budget: '$20,000'
    },
    {
      id: 7,
      title: 'Minimalist Kitchen Design',
      category: 'kitchen',
      shortDescription: 'Clean lines and hidden storage create a clutter-free cooking environment.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
      area: '200 sq ft',
      duration: '5 weeks',
      budget: '$28,000'
    },
    {
      id: 8,
      title: 'Cozy Living Space',
      category: 'living',
      shortDescription: 'Warm and inviting living room with custom seating and ambient lighting.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
      area: '300 sq ft',
      duration: '3 weeks',
      budget: '$16,000'
    },
    {
      id: 9,
      title: 'Modern Bathroom Suite',
      category: 'bathroom',
      shortDescription: 'Contemporary bathroom with floating vanities and walk-in shower.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&crop=center',
      area: '150 sq ft',
      duration: '4 weeks',
      budget: '$19,000'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <PageLayout>
      <PageHero
        badgeIcon="/icons/vasista-element-arrow.svg"
        badgeText="Our Portfolio"
        title="Transforming Spaces Into Dreams"
        subtitle="Explore our collection of successful projects that showcase our expertise in modular design and interior transformation."
        ctaText="Start Your Project"
        ctaLink="/contact"
      />
      
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.filters} role="tablist" aria-label="Project categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.filterBtn} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`projects-${category.id}`}
              >
                <img 
                  src={category.icon} 
                  alt="" 
                  className={styles.filterIcon}
                  aria-hidden="true"
                />
                {category.name}
              </button>
            ))}
          </div>
          
          <div 
            className={styles.projectsGrid}
            role="tabpanel"
            id={`projects-${activeCategory}`}
            aria-label={`${categories.find(c => c.id === activeCategory)?.name} projects`}
          >
            {filteredProjects.map(project => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Area:</span>
                      <span>{project.area}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Budget:</span>
                      <span>{project.budget}</span>
                    </div>
                  </div>
                  <div className={styles.projectActions}>
                    <Link to={`/projects/${project.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={styles.statItem}>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your vision and create something extraordinary together.</p>
            <div className={styles.ctaButtons}>
              <a href="/consultation" className="btn btn-lg">Get Free Consultation</a>
              <a href="/services" className="btn btn-outline">View Services</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects; 