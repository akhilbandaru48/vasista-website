import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogSection.module.css';

const blogs = [
  {
    id: 1,
    slug: 'top-5-architectural-trends-2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    title: 'Top 5 Architectural Trends in 2025',
    date: 'March 20, 2024',
    category: 'Architecture',
    readTime: '6 min read',
    desc: 'Discover the cutting-edge architectural trends that will dominate 2025, from sustainable materials to smart home integration and biophilic design principles.',
  },
  {
    id: 2,
    slug: 'plan-dream-home-india',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    title: 'How to Plan Your Dream Home in India',
    date: 'March 15, 2024',
    category: 'Planning',
    readTime: '8 min read',
    desc: 'A comprehensive guide to planning your dream home in India, covering everything from site selection and Vastu principles to modern design considerations.',
  },
  {
    id: 3,
    slug: 'sustainable-building-materials',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    title: 'Sustainable Building Materials You Should Know',
    date: 'March 10, 2024',
    category: 'Sustainability',
    readTime: '7 min read',
    desc: 'Explore eco-friendly building materials that are revolutionizing construction while maintaining durability, aesthetics, and cost-effectiveness.',
  },
  {
    id: 4,
    slug: 'vasista-project-design-execution',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&crop=center',
    title: 'Inside a Vasista Project: Design to Execution Journey',
    date: 'March 5, 2024',
    category: 'Case Study',
    readTime: '10 min read',
    desc: 'Follow the complete journey of a Vasista project from initial concept to final execution, showcasing our design methodology and attention to detail.',
  },
  {
    id: 5,
    slug: 'modular-kitchen-revolution',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
    title: 'Kitchen Design Revolution: Smart Modular Solutions',
    date: 'February 28, 2024',
    category: 'Kitchen Design',
    readTime: '5 min read',
    desc: 'Learn how modern modular kitchen designs are revolutionizing the heart of every home with smart storage solutions and contemporary aesthetics.',
  },
  {
    id: 6,
    slug: 'maximizing-small-spaces-modular-design',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center',
    title: 'Maximizing Small Spaces: 5 Modular Design Secrets',
    date: 'February 20, 2024',
    category: 'Modular Design',
    readTime: '6 min read',
    desc: 'Discover innovative modular solutions that transform cramped spaces into functional, beautiful areas that maximize every square foot.',
  },
];

const BlogSection = () => (
  <section className={styles.blog}>
    <div className={styles.blog_container}>
      <div className={styles.blog_header}>
        <h2 className={styles.blog_heading}>The Vasista Design Blog</h2>
        <p className={styles.blog_subtitle}>
          Insights, inspiration, and expert tips for modern Indian homes
        </p>
      </div>
      
      <div className={styles.blog_cardsGrid}>
        {blogs.slice(0, 4).map((blog) => (
          <Link 
            to={`/blog/${blog.slug}`} 
            className={styles.blog_card} 
            key={blog.id}
          >
            <div className={styles.blog_imageContainer}>
              <img src={blog.image} alt={blog.title} className={styles.blog_cardImage} />
              <div className={styles.blog_categoryBadge}>{blog.category}</div>
              <div className={styles.blog_overlay} />
            </div>
            <div className={styles.blog_cardContent}>
              <div className={styles.blog_meta}>
                <span className={styles.blog_date}>{blog.date}</span>
                <span className={styles.blog_readTime}>{blog.readTime}</span>
              </div>
              <h3 className={styles.blog_cardTitle}>{blog.title}</h3>
              <p className={styles.blog_cardDesc}>{blog.desc}</p>
              <div className={styles.blog_readMore}>
                <span>Read More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className={styles.blog_cta}> 
        <Link to="/blog" className={styles.blog_viewAllBtn}>
          View All Articles
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default BlogSection; 