import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Architectural Trends in 2025",
      excerpt: "Discover the cutting-edge architectural trends that will dominate 2025, from sustainable materials to smart home integration and biophilic design principles.",
      category: "Architecture",
      author: "Vasista Design Team",
      date: "March 20, 2024",
      readTime: "6 min read",
      image: "/images/modern-interior.jpg",
      slug: "top-5-architectural-trends-2025"
    },
    {
      id: 2,
      title: "How to Plan Your Dream Home in India",
      excerpt: "A comprehensive guide to planning your dream home in India, covering everything from site selection and Vastu principles to modern design considerations.",
      category: "Planning",
      author: "Arjun Sharma",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/images/design-inspiration.jpg",
      slug: "plan-dream-home-india"
    },
    {
      id: 3,
      title: "Sustainable Building Materials You Should Know",
      excerpt: "Explore eco-friendly building materials that are revolutionizing construction while maintaining durability, aesthetics, and cost-effectiveness.",
      category: "Sustainability",
      author: "Priya Patel",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/images/space-planning.jpg",
      slug: "sustainable-building-materials"
    },
    {
      id: 4,
      title: "Inside a Vasista Project: Design to Execution Journey",
      excerpt: "Follow the complete journey of a Vasista project from initial concept to final execution, showcasing our design methodology and attention to detail.",
      category: "Case Study",
      author: "Vasista Team",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "/images/color-psychology.jpg",
      slug: "vasista-project-design-execution"
    },
    {
      id: 5,
      title: "Kitchen Design Revolution: Smart Modular Solutions",
      excerpt: "Learn how modern modular kitchen designs are revolutionizing the heart of every home with smart storage solutions and contemporary aesthetics.",
      category: "Kitchen Design",
      author: "Meera Iyer",
      date: "February 28, 2024",
      readTime: "5 min read",
      image: "/images/kitchen-renovation.jpg",
      slug: "modular-kitchen-revolution"
    },
    {
      id: 6,
      title: "Maximizing Small Spaces: 5 Modular Design Secrets",
      excerpt: "Discover innovative modular solutions that transform cramped spaces into functional, beautiful areas that maximize every square foot.",
      category: "Modular Design",
      author: "Rahul Verma",
      date: "February 20, 2024",
      readTime: "6 min read",
      image: "/images/space-planning.jpg",
      slug: "maximizing-small-spaces-modular-design"
    },
    {
      id: 7,
      title: "10 Essential Tips for Modern Kitchen Design",
      excerpt: "Discover the key principles that make a kitchen both beautiful and functional. From layout optimization to material selection, learn how to create your dream kitchen.",
      category: "Kitchen Design",
      author: "Ananya Sharma",
      date: "February 15, 2024",
      readTime: "5 min read",
      image: "/images/modular-kitchen-design.jpg",
      slug: "modern-kitchen-design-tips"
    },
    {
      id: 8,
      title: "The Future of Modular Furniture: Smart Solutions for Small Spaces",
      excerpt: "Explore innovative modular furniture designs that maximize space efficiency while maintaining style and comfort in compact living environments.",
      category: "Modular Design",
      author: "Rohan Mehta",
      date: "February 10, 2024",
      readTime: "7 min read",
      image: "/images/custom-furniture.jpg",
      slug: "future-modular-furniture-small-spaces"
    },
    {
      id: 9,
      title: "Color Psychology in Interior Design: Creating the Perfect Mood",
      excerpt: "Understand how different colors affect our emotions and learn how to use color psychology to create the perfect atmosphere in your home.",
      category: "Interior Design",
      author: "Priya Patel",
      date: "February 5, 2024",
      readTime: "6 min read",
      image: "/images/color-psychology.jpg",
      slug: "color-psychology-interior-design"
    }
  ];

  return (
    <PageLayout>
      <PageHero
        badgeIcon="/icons/vasista-element-arrow.svg"
        badgeText="Insights & Inspiration"
        title="Vasista Blog"
        subtitle="Explore our latest articles, tips, and design inspiration for your next project."
        ctaText="Subscribe to Updates"
        ctaLink="#newsletter"
        backgroundImage="/images/blog-hero.jpg"
      />
      
      <section className={styles.blogSection}>
        <div className={styles.blog_Container}>
          <div className={styles.blogHeader}>
            <h2>Latest Articles</h2>
            <p>Stay updated with the latest trends, tips, and insights in modular and interior design.</p>
          </div>
          
          <div className={styles.blogGrid}>
            {blogPosts.map(post => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <img src={post.image} alt={post.title} />
                  <div className={styles.blogCategory}>{post.category}</div>
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogAuthor}>{post.author}</span>
                    <span className={styles.blogDate}>{post.date}</span>
                    <span className={styles.blogReadTime}>{post.readTime}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="btn btn-outline">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className={styles.blogPagination}>
            <button className={styles.paginationBtn} disabled>Previous</button>
            <div className={styles.paginationNumbers}>
              <span className={styles.activePage}>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <button className={styles.paginationBtn}>Next</button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog; 