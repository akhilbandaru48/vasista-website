import React from 'react';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <PageLayout>
      <PageHero
        badgeIcon="/icons/vasista-element-arrow.svg"
        badgeText="Our Story & Mission"
        title="Crafting Spaces That Inspire"
        subtitle="For over 15 years, Vasista has been transforming homes and businesses with innovative modular solutions and stunning interior designs that reflect our clients' unique vision and lifestyle."
        ctaText="View Our Portfolio"
        ctaLink="/projects"
      />
      
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Our Journey</h2>
              <p>Founded in 2008, Vasista began with a simple mission: to create functional, beautiful spaces that enhance people's lives. What started as a small team of passionate designers has grown into a full-service modular and interior design company serving clients across the region.</p>
              <p>We believe that great design is not just about aesthetics—it's about creating environments that support and inspire the people who live and work in them. Every project we undertake is an opportunity to blend creativity with functionality, innovation with tradition.</p>
            </div>
            <div className={styles.storyImage}>
              <img src="/images/about-story.jpg" alt="Vasista team working on design" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/icons/space.svg" alt="Innovation" />
              </div>
              <h3>Innovation</h3>
              <p>We constantly explore new materials, technologies, and design approaches to deliver cutting-edge solutions that exceed expectations.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/icons/meeting.svg" alt="Collaboration" />
              </div>
              <h3>Collaboration</h3>
              <p>We work closely with our clients, architects, and craftsmen to ensure every detail aligns with your vision and requirements.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/icons/faucet.svg" alt="Quality" />
              </div>
              <h3>Quality</h3>
              <p>From concept to completion, we maintain the highest standards of craftsmanship and attention to detail in every project.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/icons/interior-design.svg" alt="Sustainability" />
              </div>
              <h3>Sustainability</h3>
              <p>We prioritize eco-friendly materials and sustainable practices to create beautiful spaces that are kind to our planet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="/images/team-1.jpg" alt="Ananya Sharma - Lead Designer" />
              </div>
              <h3>Ananya Sharma</h3>
              <p className={styles.memberRole}>Lead Designer</p>
              <p>With over 12 years of experience in interior design, Ananya brings creativity and precision to every project.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="/images/team-2.jpg" alt="Rohan Mehta - Modular Specialist" />
              </div>
              <h3>Rohan Mehta</h3>
              <p className={styles.memberRole}>Modular Specialist</p>
              <p>Rohan's expertise in modular design ensures efficient, flexible solutions for modern living spaces.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src="/images/team-3.jpg" alt="Priya Patel - Project Manager" />
              </div>
              <h3>Priya Patel</h3>
              <p className={styles.memberRole}>Project Manager</p>
              <p>Priya ensures every project runs smoothly, on time, and within budget while maintaining our high standards.</p>
            </div>
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
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About; 