import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Modern Kitchen Design",
      excerpt: "Discover the key principles that make a kitchen both beautiful and functional. From layout optimization to material selection, learn how to create your dream kitchen.",
      category: "Kitchen Design",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/images/blog-kitchen.jpg",
      slug: "modern-kitchen-design-tips"
    },
    {
      id: 2,
      title: "The Future of Modular Furniture: Smart Solutions for Small Spaces",
      excerpt: "Explore innovative modular furniture designs that maximize space efficiency while maintaining style and comfort in compact living environments.",
      category: "Modular Design",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/images/blog-modular.jpg",
      slug: "future-modular-furniture-small-spaces"
    },
    {
      id: 3,
      title: "Color Psychology in Interior Design: Creating the Perfect Mood",
      excerpt: "Understand how different colors affect our emotions and learn how to use color psychology to create the perfect atmosphere in your home.",
      category: "Interior Design",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "/images/blog-color.jpg",
      slug: "color-psychology-interior-design"
    },
    {
      id: 4,
      title: "Sustainable Materials: Eco-Friendly Choices for Your Home",
      excerpt: "Discover environmentally conscious material options that don't compromise on style or durability for your next home renovation project.",
      category: "Sustainability",
      author: "David Kim",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "/images/blog-sustainable.jpg",
      slug: "sustainable-materials-eco-friendly-home"
    },
    {
      id: 5,
      title: "Maximizing Natural Light: Window and Lighting Design Strategies",
      excerpt: "Learn how to harness natural light effectively through strategic window placement and lighting design to create bright, welcoming spaces.",
      category: "Lighting Design",
      author: "Lisa Thompson",
      date: "February 20, 2024",
      readTime: "4 min read",
      image: "/images/blog-lighting.jpg",
      slug: "maximizing-natural-light-window-design"
    },
    {
      id: 6,
      title: "From Concept to Reality: Our Complete Design Process",
      excerpt: "Take a behind-the-scenes look at how we transform client visions into stunning, functional spaces through our proven design methodology.",
      category: "Design Process",
      author: "Vasista Team",
      date: "February 15, 2024",
      readTime: "10 min read",
      image: "/images/blog-process.jpg",
      slug: "concept-reality-complete-design-process"
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
      />
      
      <section className={styles.blogSection}>
        <div className={styles.container}>
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