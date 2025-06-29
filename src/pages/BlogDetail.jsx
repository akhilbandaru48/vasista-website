import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import Breadcrumb from '../components/ui/Breadcrumb/Breadcrumb';
import styles from './BlogDetail.module.css';

const BlogDetail = () => {
  const { slug } = useParams();

  // Mock blog data - in a real app, this would come from an API or CMS
  const blogPosts = {
    "modern-kitchen-design-tips": {
      id: 1,
      title: "10 Essential Tips for Modern Kitchen Design",
      content: `
        <p>Designing a modern kitchen requires careful consideration of both aesthetics and functionality. Here are ten essential tips to help you create a kitchen that's both beautiful and practical.</p>
        
        <h2>1. Plan Your Layout Carefully</h2>
        <p>The kitchen triangle—connecting your sink, stove, and refrigerator—should be the foundation of your layout. This creates an efficient workflow and reduces unnecessary steps during meal preparation.</p>
        
        <h2>2. Choose the Right Materials</h2>
        <p>Modern kitchens benefit from durable, low-maintenance materials. Quartz countertops offer both beauty and functionality, while engineered wood provides the warmth of natural wood with better durability.</p>
        
        <h2>3. Maximize Storage Solutions</h2>
        <p>Incorporate smart storage solutions like pull-out drawers, corner carousels, and vertical dividers. These maximize your available space and keep your kitchen organized.</p>
        
        <h2>4. Focus on Lighting</h2>
        <p>Layer your lighting with ambient, task, and accent lighting. Under-cabinet lighting is essential for food preparation, while pendant lights over islands add both function and style.</p>
        
        <h2>5. Select the Right Appliances</h2>
        <p>Choose appliances that fit your cooking style and space. Built-in appliances create a seamless look, while smart appliances add convenience to your daily routine.</p>
        
        <h2>6. Consider the Color Palette</h2>
        <p>Modern kitchens often feature neutral color palettes with bold accents. White or light cabinets with colorful backsplashes or accessories create a clean, contemporary look.</p>
        
        <h2>7. Incorporate Technology</h2>
        <p>Smart home technology can enhance your kitchen experience. From touchless faucets to smart refrigerators, technology can make your kitchen more efficient and enjoyable.</p>
        
        <h2>8. Don't Forget Ventilation</h2>
        <p>Proper ventilation is crucial for maintaining air quality and preventing odors. A range hood that vents to the outside is ideal for most kitchens.</p>
        
        <h2>9. Add Personal Touches</h2>
        <p>While modern kitchens are often minimal, don't forget to add personal touches. Artwork, plants, or unique hardware can make your kitchen feel more welcoming.</p>
        
        <h2>10. Plan for the Future</h2>
        <p>Consider how your needs might change over time. Universal design principles ensure your kitchen will remain functional as you age.</p>
        
        <p>By following these tips, you can create a modern kitchen that combines style, functionality, and longevity. Remember, the best kitchen design is one that works for your specific lifestyle and needs.</p>
      `,
      category: "Kitchen Design",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/images/blog-kitchen.jpg",
      excerpt: "Discover the key principles that make a kitchen both beautiful and functional. From layout optimization to material selection, learn how to create your dream kitchen."
    },
    "future-modular-furniture-small-spaces": {
      id: 2,
      title: "The Future of Modular Furniture: Smart Solutions for Small Spaces",
      content: `
        <p>As urban living spaces continue to shrink, the demand for innovative modular furniture solutions is growing. Let's explore how modern design is revolutionizing small space living.</p>
        
        <h2>Understanding Modular Design</h2>
        <p>Modular furniture consists of standardized units that can be arranged in different combinations. This flexibility allows homeowners to adapt their spaces to changing needs without major renovations.</p>
        
        <h2>Key Benefits of Modular Furniture</h2>
        <ul>
          <li><strong>Flexibility:</strong> Easy to reconfigure for different uses</li>
          <li><strong>Space Efficiency:</strong> Maximizes every square foot</li>
          <li><strong>Cost-Effective:</strong> Reduces the need for multiple pieces</li>
          <li><strong>Sustainability:</strong> Longer lifespan through adaptability</li>
        </ul>
        
        <h2>Innovative Solutions for Small Spaces</h2>
        <p>Modern modular furniture goes beyond basic storage units. Today's solutions include:</p>
        
        <h3>Transformable Furniture</h3>
        <p>Pieces that serve multiple functions—sofas that become beds, coffee tables that expand into dining tables, and storage ottomans that provide seating and organization.</p>
        
        <h3>Wall-Mounted Systems</h3>
        <p>Vertical storage solutions that keep floors clear while providing ample storage. These systems can include everything from bookshelves to home offices.</p>
        
        <h3>Customizable Storage</h3>
        <p>Modular storage units that can be configured to fit specific spaces and needs, from closets to entertainment centers.</p>
        
        <h2>Technology Integration</h2>
        <p>The future of modular furniture includes smart technology integration. Imagine storage units with built-in charging stations, lighting, and even climate control for wine storage.</p>
        
        <h2>Design Considerations</h2>
        <p>When choosing modular furniture, consider:</p>
        <ul>
          <li>Quality of materials and construction</li>
          <li>Ease of assembly and reconfiguration</li>
          <li>Compatibility with your existing decor</li>
          <li>Long-term flexibility for changing needs</li>
        </ul>
        
        <p>Modular furniture represents the future of small space living, offering solutions that are as beautiful as they are functional. As technology advances, we can expect even more innovative solutions that make the most of every square foot.</p>
      `,
      category: "Modular Design",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/images/blog-modular.jpg",
      excerpt: "Explore innovative modular furniture designs that maximize space efficiency while maintaining style and comfort in compact living environments."
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <PageLayout>
        <div className={styles.errorContainer}>
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-lg">Back to Blog</Link>
        </div>
      </PageLayout>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title, path: `/blog/${slug}` }
  ];

  return (
    <PageLayout>
      <Breadcrumb items={breadcrumbItems} />
      
      <article className={styles.blogDetail}>
        <div className={styles.container}>
          <header className={styles.blogHeader}>
            <div className={styles.blogMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
            <h1 className={styles.blogTitle}>{post.title}</h1>
            <p className={styles.blogExcerpt}>{post.excerpt}</p>
            <div className={styles.authorInfo}>
              <span>By {post.author}</span>
            </div>
          </header>
          
          <div className={styles.blogImage}>
            <img src={post.image} alt={post.title} />
          </div>
          
          <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <footer className={styles.blogFooter}>
            <div className={styles.shareSection}>
              <h3>Share this article</h3>
              <div className={styles.shareButtons}>
                <a href="#" className={styles.shareButton}>Twitter</a>
                <a href="#" className={styles.shareButton}>Facebook</a>
                <a href="#" className={styles.shareButton}>LinkedIn</a>
              </div>
            </div>
            
            <div className={styles.navigation}>
              <Link to="/blog" className="btn btn-outline">← Back to Blog</Link>
            </div>
          </footer>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogDetail; 