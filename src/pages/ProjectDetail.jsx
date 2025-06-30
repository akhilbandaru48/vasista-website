import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import styles from '../styles/ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or CMS
  const projects = {
    1: {
      id: 1,
      title: 'Modern Kitchen Transformation',
      category: 'kitchen',
      shortDescription: 'A complete kitchen renovation featuring custom cabinetry, quartz countertops, and smart storage solutions.',
      fullDescription: 'This comprehensive kitchen transformation involved completely reimagining the space to create a modern, functional, and beautiful cooking environment. The project focused on maximizing efficiency while maintaining aesthetic appeal. Every detail was carefully considered, from the custom cabinetry to the smart storage solutions that make daily meal preparation a joy.',
      longDescription: `
        <p>This kitchen transformation project was a complete overhaul of a dated, inefficient space into a modern culinary haven. The client wanted a kitchen that would serve as both a functional workspace and a gathering place for family and friends.</p>
        
        <p>The project began with a thorough analysis of the existing space and the client's cooking habits. We discovered that the current layout created unnecessary steps and lacked adequate storage for modern appliances and cookware.</p>
        
        <p>Our design solution focused on creating a kitchen triangle that minimized movement while maximizing functionality. We incorporated custom cabinetry with innovative storage solutions, including pull-out drawers, corner carousels, and vertical dividers that make every inch of space count.</p>
        
        <p>The material selection was crucial to achieving both beauty and durability. We chose quartz countertops for their low maintenance and timeless appeal, while the custom backsplash adds a personal touch that reflects the client's style.</p>
      `,
      images: [
        '/images/kitchen-renovation.jpg',
        '/images/modular-kitchen-design.jpg',
        '/images/kitchen-renovation.jpg',
        '/images/modular-kitchen-design.jpg'
      ],
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
      clientFeedback: '"The transformation exceeded our expectations. The kitchen is now both beautiful and incredibly functional."',
      techStack: [
        'Custom Cabinetry Design',
        'Quartz Countertops',
        'LED Lighting System',
        'Smart Storage Solutions',
        'Professional Appliances'
      ],
      externalLinks: {
        portfolio: '/projects',
        similarProjects: '/projects?category=kitchen'
      }
    },
    2: {
      id: 2,
      title: 'Contemporary Living Room',
      category: 'living',
      shortDescription: 'Open-concept living space with modular furniture and integrated entertainment system.',
      fullDescription: 'This living room redesign created a versatile space that accommodates both family gatherings and intimate entertainment. The modular approach allows for easy reconfiguration based on different needs.',
      longDescription: `
        <p>This living room transformation focused on creating a space that could adapt to various activities and moods. The client needed a room that could comfortably host large family gatherings while also providing intimate spaces for quiet evenings.</p>
        
        <p>The challenge was to design a space that felt cohesive yet flexible. We achieved this through a modular furniture system that can be easily reconfigured, smart lighting that adapts to different activities, and acoustic treatments that ensure optimal sound quality for both entertainment and conversation.</p>
        
        <p>The entertainment center was custom-designed to house all media equipment while maintaining a clean, uncluttered appearance. The modular sectional provides comfortable seating for large groups while also offering hidden storage for blankets, pillows, and other living room essentials.</p>
        
        <p>Lighting was a key consideration in this project. We implemented a layered lighting system with ambient, task, and accent lighting that can be controlled independently to create the perfect atmosphere for any occasion.</p>
      `,
      images: [
        '/images/living-room-design.jpg',
        '/images/living-room-transformation.jpg',
        '/images/living-room-design.jpg',
        '/images/living-room-transformation.jpg'
      ],
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
      clientFeedback: '"The space is incredibly versatile. We can host large gatherings or enjoy quiet family time with equal comfort."',
      techStack: [
        'Modular Furniture Design',
        'Smart Lighting System',
        'Acoustic Treatment',
        'Entertainment Integration',
        'Flexible Storage Solutions'
      ],
      externalLinks: {
        portfolio: '/projects',
        similarProjects: '/projects?category=living'
      }
    },
    3: {
      id: 3,
      title: 'Luxury Master Bathroom',
      category: 'bathroom',
      shortDescription: 'Spa-inspired bathroom with custom vanities, walk-in shower, and premium fixtures.',
      fullDescription: 'This master bathroom transformation created a luxurious spa-like retreat within the home. Every detail was carefully considered to create a serene and functional space.',
      longDescription: `
        <p>This master bathroom transformation was designed to create a personal spa retreat that provides both luxury and functionality. The client wanted a space that would make every morning feel like a spa day while maintaining practical features for daily use.</p>
        
        <p>The design process began with understanding the client's morning routine and relaxation preferences. We discovered that they valued both efficiency and indulgence, so we created a space that accommodates quick morning routines while also providing luxurious features for relaxation.</p>
        
        <p>The walk-in shower was custom-designed with multiple shower heads and body sprays, creating a spa-like experience. The freestanding soaking tub was positioned to take advantage of natural light while providing a focal point for the room.</p>
        
        <p>Smart technology was integrated throughout the space, from the heated floors to the smart mirror with built-in lighting and Bluetooth speakers. These features enhance the daily experience while maintaining the elegant aesthetic.</p>
      `,
      images: [
        '/images/bathroom-renovation.jpg',
        '/images/bathroom-design.jpg',
        '/images/bathroom-renovation.jpg',
        '/images/bathroom-design.jpg'
      ],
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
      clientFeedback: '"Every morning feels like a spa day. The attention to detail is remarkable."',
      techStack: [
        'Smart Bathroom Technology',
        'Luxury Fixtures',
        'Heated Flooring System',
        'Custom Tile Design',
        'Integrated Lighting'
      ],
      externalLinks: {
        portfolio: '/projects',
        similarProjects: '/projects?category=bathroom'
      }
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <PageLayout>
        <div className={styles.errorContainer}>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-lg">Back to Projects</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className={styles.projectDetail}>
        <div className={styles.container}>
          {/* Project Header */}
          <header className={styles.projectHeader}>
            <div className={styles.projectMeta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.duration}>{project.duration}</span>
              <span className={styles.budget}>{project.budget}</span>
            </div>
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.projectSubtitle}>{project.fullDescription}</p>
            <div className={styles.projectStats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Area</span>
                <span className={styles.statValue}>{project.area}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Duration</span>
                <span className={styles.statValue}>{project.duration}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Budget</span>
                <span className={styles.statValue}>{project.budget}</span>
              </div>
            </div>
          </header>

          {/* Project Images */}
          <section className={styles.projectImages}>
            <div className={styles.mainImage}>
              <img src={project.images[0]} alt={project.title} />
            </div>
            <div className={styles.imageGrid}>
              {project.images.slice(1).map((image, index) => (
                <div key={index} className={styles.imageItem}>
                  <img src={image} alt={`${project.title} detail ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>

          {/* Project Content */}
          <div className={styles.projectContent}>
            <div className={styles.mainContent}>
              {/* Full Description */}
              <section className={styles.description}>
                <h2>Project Overview</h2>
                <div 
                  className={styles.descriptionContent}
                  dangerouslySetInnerHTML={{ __html: project.longDescription }}
                />
              </section>

              {/* Features */}
              <section className={styles.features}>
                <h2>Key Features</h2>
                <div className={styles.featuresGrid}>
                  {project.features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                      <span className={styles.featureIcon}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack */}
              <section className={styles.techStack}>
                <h2>Technologies & Materials</h2>
                <div className={styles.techGrid}>
                  {project.techStack.map((tech, index) => (
                    <div key={index} className={styles.techItem}>
                      {tech}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className={styles.sidebar}>
              {/* Challenges & Solutions */}
              <section className={styles.challenges}>
                <h3>Challenges & Solutions</h3>
                <div className={styles.challengeSolution}>
                  <div className={styles.challenge}>
                    <h4>Challenge</h4>
                    <p>{project.challenges}</p>
                  </div>
                  <div className={styles.solution}>
                    <h4>Solution</h4>
                    <p>{project.solutions}</p>
                  </div>
                </div>
              </section>

              {/* Client Feedback */}
              <section className={styles.clientFeedback}>
                <h3>Client Feedback</h3>
                <blockquote>"{project.clientFeedback}"</blockquote>
              </section>

              {/* Navigation */}
              <section className={styles.navigation}>
                <Link to="/projects" className="btn btn-outline">
                  ← Back to Projects
                </Link>
                <Link to={project.externalLinks.similarProjects} className="btn btn-outline">
                  View Similar Projects
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default ProjectDetail; 