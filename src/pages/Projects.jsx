import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const expandedRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchen Design' },
    { id: 'living', name: 'Living Room' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'office', name: 'Office Space' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Transformation',
      category: 'kitchen',
      shortDescription: 'A complete kitchen renovation featuring custom cabinetry, quartz countertops, and smart storage solutions.',
      fullDescription: 'This comprehensive kitchen transformation involved completely reimagining the space to create a modern, functional, and beautiful cooking environment. The project focused on maximizing efficiency while maintaining aesthetic appeal.',
      image: 'https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Kitchen+Project',
      area: '250 sq ft',
      duration: '6 weeks',
      budget: '$25,000',
      features: [
        'Custom shaker-style cabinetry',
        'Quartz countertops with waterfall edge',
        'Smart storage solutions with pull-out drawers',
        'Under-cabinet LED lighting',
        'Stainless steel appliances',
        'Custom backsplash with geometric tiles'
      ],
      challenges: 'Limited space required creative storage solutions and careful appliance placement to maintain workflow efficiency.',
      solutions: 'Implemented custom corner carousels, vertical dividers, and multi-functional island design to maximize every square foot.',
      clientFeedback: '"The transformation exceeded our expectations. The kitchen is now both beautiful and incredibly functional."'
    },
    {
      id: 2,
      title: 'Contemporary Living Room',
      category: 'living',
      shortDescription: 'Open-concept living space with modular furniture and integrated entertainment system.',
      fullDescription: 'This living room redesign created a versatile space that accommodates both family gatherings and intimate entertainment. The modular approach allows for easy reconfiguration based on different needs.',
      image: 'https://via.placeholder.com/400x300/50C878/FFFFFF?text=Living+Room+Project',
      area: '400 sq ft',
      duration: '4 weeks',
      budget: '$18,000',
      features: [
        'Modular sectional with hidden storage',
        'Built-in entertainment center',
        'Accent wall with geometric pattern',
        'Smart lighting system',
        'Acoustic wall panels',
        'Flexible seating arrangements'
      ],
      challenges: 'Creating a space that could transition between family movie nights and formal entertaining.',
      solutions: 'Designed a modular furniture system with hidden storage and convertible seating that adapts to different occasions.',
      clientFeedback: '"The space is incredibly versatile. We can host large gatherings or enjoy quiet family time with equal comfort."'
    },
    {
      id: 3,
      title: 'Luxury Master Bathroom',
      category: 'bathroom',
      shortDescription: 'Spa-inspired bathroom with custom vanities, walk-in shower, and premium fixtures.',
      fullDescription: 'This master bathroom transformation created a luxurious spa-like retreat within the home. Every detail was carefully considered to create a serene and functional space.',
      image: 'https://via.placeholder.com/400x300/9370DB/FFFFFF?text=Bathroom+Project',
      area: '180 sq ft',
      duration: '5 weeks',
      budget: '$22,000',
      features: [
        'Double vanity with custom mirrors',
        'Walk-in shower with multiple shower heads',
        'Heated floors',
        'Freestanding soaking tub',
        'Custom tile work',
        'Smart mirror with built-in lighting'
      ],
      challenges: 'Converting a traditional bathroom into a modern spa retreat while maintaining functionality.',
      solutions: 'Integrated smart technology with luxury finishes and created a seamless flow between different functional areas.',
      clientFeedback: '"Every morning feels like a spa day. The attention to detail is remarkable."'
    },
    {
      id: 4,
      title: 'Home Office Suite',
      category: 'office',
      shortDescription: 'Professional home office with built-in storage, ergonomic furniture, and modern lighting.',
      fullDescription: 'This home office design prioritizes productivity and comfort, creating a professional workspace that seamlessly integrates with the home environment.',
      image: 'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Office+Project',
      area: '200 sq ft',
      duration: '3 weeks',
      budget: '$15,000',
      features: [
        'Built-in desk with cable management',
        'Ergonomic chair and adjustable monitor arm',
        'Custom shelving and storage',
        'Task and ambient lighting',
        'Acoustic panels for sound control',
        'Convertible guest bed option'
      ],
      challenges: 'Creating a professional workspace that could also accommodate occasional guests.',
      solutions: 'Designed a convertible system with a hidden Murphy bed and flexible storage that serves both purposes seamlessly.',
      clientFeedback: '"I can focus better than ever, and when guests visit, the space transforms perfectly."'
    },
    {
      id: 5,
      title: 'Open Kitchen & Dining',
      category: 'kitchen',
      shortDescription: 'Seamless integration of kitchen and dining area with custom island and breakfast nook.',
      fullDescription: 'This project broke down walls to create a cohesive kitchen and dining experience. The custom island serves as both a cooking station and gathering place.',
      image: 'https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Kitchen+Dining+Project',
      area: '350 sq ft',
      duration: '7 weeks',
      budget: '$30,000',
      features: [
        'Custom kitchen island with seating',
        'Breakfast nook with built-in bench',
        'Open shelving for display',
        'Pendant lighting over island',
        'Sliding glass doors to patio',
        'Wine storage and beverage center'
      ],
      challenges: 'Removing load-bearing walls while maintaining structural integrity and creating flow between spaces.',
      solutions: 'Engineered a structural beam system and designed the layout to maximize natural light and traffic flow.',
      clientFeedback: '"The space is perfect for both everyday meals and entertaining. The flow is incredible."'
    },
    {
      id: 6,
      title: 'Family Entertainment Room',
      category: 'living',
      shortDescription: 'Multi-functional family room with built-in entertainment center and flexible seating.',
      fullDescription: 'This entertainment room was designed to be the heart of family life, accommodating everything from movie nights to game days with friends.',
      image: 'https://via.placeholder.com/400x300/50C878/FFFFFF?text=Entertainment+Room+Project',
      area: '450 sq ft',
      duration: '5 weeks',
      budget: '$20,000',
      features: [
        'Built-in entertainment center',
        'Theater-style seating with storage',
        'Gaming corner with custom desk',
        'Sound system integration',
        'Blackout curtains and lighting',
        'Snack bar with mini fridge'
      ],
      challenges: 'Creating a space that could handle both quiet family time and energetic social gatherings.',
      solutions: 'Implemented flexible lighting, acoustic treatments, and modular furniture that adapts to different activities.',
      clientFeedback: '"This room has become the center of our family life. It is perfect for every occasion."'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const handleCloseExpanded = () => {
    setExpandedProject(null);
  };

  // Focus management for accessibility
  useEffect(() => {
    if (expandedProject && expandedRef.current) {
      expandedRef.current.focus();
    }
  }, [expandedProject]);

  // Handle escape key to close expanded project
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && expandedProject) {
        setExpandedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [expandedProject]);

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
                <div 
                  className={styles.projectImage}
                  onClick={() => handleProjectClick(project.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedProject === project.id}
                  aria-controls={`project-details-${project.id}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleProjectClick(project.id);
                    }
                  }}
                >
                  <img src={project.image} alt={project.title} />
                  <div className={styles.projectOverlay}>
                    <button 
                      className="btn btn-outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                    >
                      {expandedProject === project.id ? 'Close Details' : 'Quick View'}
                    </button>
                  </div>
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
                    <button 
                      className="btn btn-outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                    >
                      {expandedProject === project.id ? 'Close Details' : 'Quick View'}
                    </button>
                    <Link to={`/projects/${project.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
                
                {/* Expanded Project Details */}
                <div 
                  className={`${styles.expandedDetails} ${expandedProject === project.id ? styles.expanded : ''}`}
                  id={`project-details-${project.id}`}
                  ref={expandedProject === project.id ? expandedRef : null}
                  tabIndex={expandedProject === project.id ? 0 : -1}
                  role="region"
                  aria-label={`Detailed information for ${project.title}`}
                >
                  <div className={styles.expandedContent}>
                    <div className={styles.expandedHeader}>
                      <h4>Project Overview</h4>
                      <button 
                        className={styles.closeButton}
                        onClick={handleCloseExpanded}
                        aria-label="Close project details"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className={styles.expandedBody}>
                      <div className={styles.fullDescription}>
                        <h5>Description</h5>
                        <p>{project.fullDescription}</p>
                      </div>
                      
                      <div className={styles.projectFeatures}>
                        <h5>Key Features</h5>
                        <ul>
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={styles.projectChallenges}>
                        <h5>Challenges & Solutions</h5>
                        <div className={styles.challengeSolution}>
                          <div>
                            <strong>Challenge:</strong>
                            <p>{project.challenges}</p>
                          </div>
                          <div>
                            <strong>Solution:</strong>
                            <p>{project.solutions}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={styles.clientFeedback}>
                        <h5>Client Feedback</h5>
                        <blockquote>"{project.clientFeedback}"</blockquote>
                      </div>
                    </div>
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
              <a href="/contact" className="btn btn-lg">Get Free Consultation</a>
              <a href="/services" className="btn btn-outline">View Services</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects; 