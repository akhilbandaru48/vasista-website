import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import styles from '../styles/BlogDetail.module.css';

const BlogDetail = () => {
  const { slug } = useParams();

  // Mock blog data - in a real app, this would come from an API or CMS
  const blogPosts = {
    "top-5-architectural-trends-2025": {
      id: 1,
      title: "Top 5 Architectural Trends in 2025",
      content: `
        <p>As we approach 2025, the architectural landscape is evolving rapidly, driven by technological advancements, environmental concerns, and changing lifestyle needs. Here are the top five architectural trends that will dominate the industry.</p>
        
        <h2>1. Biophilic Design Integration</h2>
        <p>Biophilic design, which incorporates natural elements into built environments, is becoming increasingly popular. This trend includes living walls, natural materials, abundant natural light, and indoor gardens. The connection to nature has been proven to improve mental health and productivity.</p>
        
        <h2>2. Smart Home Technology Integration</h2>
        <p>Smart home technology is moving beyond basic automation to become an integral part of architectural design. From AI-powered climate control to automated lighting systems, technology is being seamlessly integrated into the fabric of buildings.</p>
        
        <h2>3. Sustainable and Net-Zero Buildings</h2>
        <p>Sustainability is no longer optional—it's essential. Net-zero buildings that produce as much energy as they consume are becoming the standard. This includes solar panels, green roofs, and advanced insulation systems.</p>
        
        <h2>4. Adaptive Reuse and Renovation</h2>
        <p>Instead of demolishing old buildings, architects are finding creative ways to repurpose existing structures. This trend reduces environmental impact while preserving cultural heritage and creating unique spaces.</p>
        
        <h2>5. Minimalist and Functional Design</h2>
        <p>Clean lines, open spaces, and multifunctional areas are defining modern architecture. This trend emphasizes quality over quantity, with every element serving a purpose while maintaining aesthetic appeal.</p>
        
        <p>These trends reflect a growing awareness of our environmental impact and a desire for spaces that enhance our quality of life. As we move forward, these principles will continue to shape the future of architecture.</p>
      `,
      category: "Architecture",
      author: "Vasista Design Team",
      date: "March 20, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center",
      excerpt: "Discover the cutting-edge architectural trends that will dominate 2025, from sustainable materials to smart home integration and biophilic design principles."
    },
    "plan-dream-home-india": {
      id: 2,
      title: "How to Plan Your Dream Home in India",
      content: `
        <p>Planning your dream home in India requires careful consideration of cultural, climatic, and practical factors. This comprehensive guide will help you navigate the process from concept to completion.</p>
        
        <h2>Understanding Vastu Principles</h2>
        <p>Vastu Shastra, the ancient Indian science of architecture, provides guidelines for creating harmonious living spaces. Key principles include:</p>
        <ul>
          <li>North-east direction for prayer rooms</li>
          <li>Kitchen in the south-east</li>
          <li>Master bedroom in the south-west</li>
          <li>Proper ventilation and natural light</li>
        </ul>
        
        <h2>Site Selection and Analysis</h2>
        <p>Choose your site carefully, considering factors like:</p>
        <ul>
          <li>Soil quality and foundation requirements</li>
          <li>Access to utilities and infrastructure</li>
          <li>Local building codes and regulations</li>
          <li>Future development plans in the area</li>
        </ul>
        
        <h2>Climate-Responsive Design</h2>
        <p>India's diverse climate requires thoughtful design solutions:</p>
        <ul>
          <li>Hot and dry regions: Thick walls, courtyards, and shading devices</li>
          <li>Humid regions: Cross-ventilation and elevated structures</li>
          <li>Cold regions: Insulation and south-facing windows</li>
        </ul>
        
        <h2>Modern Design Considerations</h2>
        <p>While respecting traditional principles, modern homes should include:</p>
        <ul>
          <li>Open floor plans for flexibility</li>
          <li>Smart home technology integration</li>
          <li>Sustainable materials and energy efficiency</li>
          <li>Multifunctional spaces</li>
        </ul>
        
        <p>By combining traditional wisdom with modern innovation, you can create a home that's both culturally rooted and functionally advanced.</p>
      `,
      category: "Planning",
      author: "Arjun Sharma",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center",
      excerpt: "A comprehensive guide to planning your dream home in India, covering everything from site selection and Vastu principles to modern design considerations."
    },
    "sustainable-building-materials": {
      id: 3,
      title: "Sustainable Building Materials You Should Know",
      content: `
        <p>The construction industry is undergoing a green revolution, with innovative sustainable materials that don't compromise on quality or aesthetics. Here are the most promising eco-friendly building materials.</p>
        
        <h2>Bamboo: The Green Steel</h2>
        <p>Bamboo is one of the most sustainable building materials available. It grows rapidly, requires minimal processing, and has a strength-to-weight ratio comparable to steel. Perfect for flooring, furniture, and structural elements.</p>
        
        <h2>Recycled Steel</h2>
        <p>Steel is 100% recyclable and can be reused indefinitely without losing its properties. Using recycled steel reduces energy consumption by 75% compared to producing new steel.</p>
        
        <h2>Hempcrete</h2>
        <p>Made from hemp fibers and lime, hempcrete is a lightweight, insulating material that's carbon-negative. It's fire-resistant, pest-resistant, and provides excellent thermal performance.</p>
        
        <h2>Reclaimed Wood</h2>
        <p>Using reclaimed wood reduces deforestation and gives new life to beautiful, aged timber. Each piece has unique character and history, adding warmth and personality to spaces.</p>
        
        <h2>Rammed Earth</h2>
        <p>Rammed earth construction uses natural soil mixed with stabilizers to create solid walls. It's energy-efficient, durable, and creates beautiful, textured surfaces.</p>
        
        <h2>Benefits of Sustainable Materials</h2>
        <ul>
          <li>Reduced environmental impact</li>
          <li>Lower energy costs</li>
          <li>Better indoor air quality</li>
          <li>Increased property value</li>
          <li>Compliance with green building standards</li>
        </ul>
        
        <p>Choosing sustainable materials is not just good for the environment—it's also a smart investment in your home's future value and your family's health.</p>
      `,
      category: "Sustainability",
      author: "Priya Patel",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      excerpt: "Explore eco-friendly building materials that are revolutionizing construction while maintaining durability, aesthetics, and cost-effectiveness."
    },
    "vasista-project-design-execution": {
      id: 4,
      title: "Inside a Vasista Project: Design to Execution Journey",
      content: `
        <p>Every Vasista project follows a carefully crafted methodology that ensures excellence from concept to completion. Let's take you behind the scenes of our design and execution process.</p>
        
        <h2>Phase 1: Discovery and Consultation</h2>
        <p>Our journey begins with understanding your vision, lifestyle, and requirements. We conduct detailed consultations to understand:</p>
        <ul>
          <li>Your design preferences and style</li>
          <li>Functional requirements and space needs</li>
          <li>Budget considerations and timeline</li>
          <li>Site-specific challenges and opportunities</li>
        </ul>
        
        <h2>Phase 2: Concept Development</h2>
        <p>Our design team creates multiple concepts that balance aesthetics, functionality, and budget. We present:</p>
        <ul>
          <li>3D visualizations and renderings</li>
          <li>Material and color palettes</li>
          <li>Space planning and furniture layouts</li>
          <li>Lighting and electrical plans</li>
        </ul>
        
        <h2>Phase 3: Detailed Design</h2>
        <p>Once the concept is approved, we develop detailed technical drawings including:</p>
        <ul>
          <li>Floor plans and elevations</li>
          <li>Electrical and plumbing layouts</li>
          <li>Material specifications</li>
          <li>Construction details</li>
        </ul>
        
        <h2>Phase 4: Execution</h2>
        <p>Our skilled craftsmen bring the design to life with:</p>
        <ul>
          <li>Quality control at every stage</li>
          <li>Regular progress updates</li>
          <li>Attention to detail and finishing</li>
          <li>Timeline adherence</li>
        </ul>
        
        <h2>Phase 5: Handover and Support</h2>
        <p>We ensure a smooth transition with:</p>
        <ul>
          <li>Comprehensive handover documentation</li>
          <li>Maintenance guidelines</li>
          <li>Warranty information</li>
          <li>Post-completion support</li>
        </ul>
        
        <p>This systematic approach ensures that every Vasista project meets our high standards of quality, functionality, and aesthetic excellence.</p>
      `,
      category: "Case Study",
      author: "Vasista Team",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&crop=center",
      excerpt: "Follow the complete journey of a Vasista project from initial concept to final execution, showcasing our design methodology and attention to detail."
    },
    "modular-kitchen-revolution": {
      id: 5,
      title: "Kitchen Design Revolution: Smart Modular Solutions",
      content: `
        <p>The kitchen has evolved from a purely functional space to the heart of the home. Modern modular kitchen designs are revolutionizing how we think about this essential room.</p>
        
        <h2>The Evolution of Kitchen Design</h2>
        <p>From traditional closed kitchens to open-concept spaces, the kitchen has undergone a dramatic transformation. Today's kitchens are designed for:</p>
        <ul>
          <li>Cooking and food preparation</li>
          <li>Entertaining and socializing</li>
          <li>Family gatherings and meals</li>
          <li>Work and study spaces</li>
        </ul>
        
        <h2>Smart Storage Solutions</h2>
        <p>Modern modular kitchens feature innovative storage solutions:</p>
        <ul>
          <li>Pull-out drawers and corner carousels</li>
          <li>Vertical dividers and organizers</li>
          <li>Hidden appliances and built-in storage</li>
          <li>Multi-functional islands and peninsulas</li>
        </ul>
        
        <h2>Technology Integration</h2>
        <p>Smart technology is transforming kitchen functionality:</p>
        <ul>
          <li>Touchless faucets and smart appliances</li>
          <li>Integrated lighting and climate control</li>
          <li>Voice-activated systems</li>
          <li>Mobile app connectivity</li>
        </ul>
        
        <h2>Design Trends</h2>
        <p>Current kitchen design trends include:</p>
        <ul>
          <li>Minimalist and clean lines</li>
          <li>Mixed materials and textures</li>
          <li>Bold color statements</li>
          <li>Sustainable and eco-friendly materials</li>
        </ul>
        
        <p>The modern kitchen is no longer just a place to cook—it's a multifunctional space that adapts to our changing lifestyles and needs.</p>
      `,
      category: "Kitchen Design",
      author: "Meera Iyer",
      date: "February 28, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
      excerpt: "Learn how modern modular kitchen designs are revolutionizing the heart of every home with smart storage solutions and contemporary aesthetics."
    },
    "maximizing-small-spaces-modular-design": {
      id: 6,
      title: "Maximizing Small Spaces: 5 Modular Design Secrets",
      content: `
        <p>Small spaces don't have to feel cramped or limiting. With the right modular design strategies, you can create functional, beautiful, and spacious-feeling environments.</p>
        
        <h2>Secret 1: Multi-Functional Furniture</h2>
        <p>Invest in furniture that serves multiple purposes:</p>
        <ul>
          <li>Sofa beds for living rooms</li>
          <li>Extendable dining tables</li>
          <li>Storage ottomans and benches</li>
          <li>Murphy beds for bedrooms</li>
        </ul>
        
        <h2>Secret 2: Vertical Storage Solutions</h2>
        <p>Make the most of wall space with:</p>
        <ul>
          <li>Floating shelves and wall-mounted units</li>
          <li>Tall bookcases and storage towers</li>
          <li>Hanging organizers and hooks</li>
          <li>Loft beds and mezzanines</li>
        </ul>
        
        <h2>Secret 3: Smart Color and Lighting</h2>
        <p>Use design elements to create the illusion of space:</p>
        <ul>
          <li>Light, neutral color palettes</li>
          <li>Mirrors to reflect light and create depth</li>
          <li>Layered lighting for different moods</li>
          <li>Large windows and natural light</li>
        </ul>
        
        <h2>Secret 4: Flexible Room Dividers</h2>
        <p>Create separate zones without permanent walls:</p>
        <ul>
          <li>Sliding panels and screens</li>
          <li>Bookshelves and storage units</li>
          <li>Curtains and fabric dividers</li>
          <li>Folding doors and partitions</li>
        </ul>
        
        <h2>Secret 5: Declutter and Organize</h2>
        <p>Maintain a clutter-free environment with:</p>
        <ul>
          <li>Regular decluttering sessions</li>
          <li>Smart storage systems</li>
          <li>Digital organization tools</li>
          <li>Minimalist design principles</li>
        </ul>
        
        <p>By implementing these modular design secrets, you can transform any small space into a functional, beautiful, and comfortable home.</p>
      `,
      category: "Modular Design",
      author: "Rahul Verma",
      date: "February 20, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center",
      excerpt: "Discover innovative modular solutions that transform cramped spaces into functional, beautiful areas that maximize every square foot."
    },
    "modern-kitchen-design-tips": {
      id: 7,
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
      author: "Ananya Sharma",
      date: "February 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
      excerpt: "Discover the key principles that make a kitchen both beautiful and functional. From layout optimization to material selection, learn how to create your dream kitchen."
    },
    "future-modular-furniture-small-spaces": {
      id: 8,
      title: "The Future of Modular Furniture: Smart Solutions for Small Spaces",
      content: `
        <p>As urban living spaces continue to shrink, the demand for innovative modular furniture solutions is growing rapidly. The future of furniture design lies in creating pieces that are not only beautiful but also incredibly functional and adaptable.</p>
        
        <h2>Smart Integration</h2>
        <p>Modern modular furniture is becoming increasingly intelligent. From built-in charging stations to integrated lighting systems, furniture is evolving to meet the technological needs of contemporary living.</p>
        
        <h2>Space Optimization</h2>
        <p>The key to successful small space living is maximizing every square foot. Modular furniture achieves this through:</p>
        <ul>
          <li>Multi-functional pieces that serve multiple purposes</li>
          <li>Stackable and nestable designs</li>
          <li>Expandable and collapsible elements</li>
          <li>Hidden storage compartments</li>
        </ul>
        
        <h2>Customization Options</h2>
        <p>Today's modular furniture offers unprecedented customization. Consumers can mix and match components to create pieces that perfectly fit their space and lifestyle needs.</p>
        
        <h2>Sustainability Focus</h2>
        <p>Environmental consciousness is driving innovation in modular furniture design. Manufacturers are using sustainable materials and creating pieces that are built to last, reducing waste and environmental impact.</p>
        
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
      author: "Rohan Mehta",
      date: "February 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center",
      excerpt: "Explore innovative modular furniture designs that maximize space efficiency while maintaining style and comfort in compact living environments."
    },
    "color-psychology-interior-design": {
      id: 9,
      title: "Color Psychology in Interior Design: Creating the Perfect Mood",
      content: `
        <p>Color is one of the most powerful tools in interior design. It can influence our emotions, affect our mood, and even impact our behavior. Understanding color psychology is essential for creating spaces that not only look beautiful but also feel right.</p>
        
        <h2>The Psychology of Color</h2>
        <p>Different colors evoke different emotional responses:</p>
        <ul>
          <li><strong>Blue:</strong> Calming, trustworthy, and professional</li>
          <li><strong>Green:</strong> Natural, balanced, and refreshing</li>
          <li><strong>Yellow:</strong> Energetic, optimistic, and creative</li>
          <li><strong>Red:</strong> Passionate, energetic, and attention-grabbing</li>
          <li><strong>Purple:</strong> Luxurious, creative, and mysterious</li>
          <li><strong>Orange:</strong> Friendly, confident, and adventurous</li>
          <li><strong>Pink:</strong> Gentle, romantic, and calming</li>
          <li><strong>Brown:</strong> Stable, reliable, and natural</li>
          <li><strong>Gray:</strong> Sophisticated, neutral, and balanced</li>
          <li><strong>White:</strong> Clean, pure, and spacious</li>
        </ul>
        
        <h2>Creating Mood with Color</h2>
        <p>To create specific moods in your space:</p>
        
        <h3>Calming Spaces</h3>
        <p>Use soft blues, greens, and lavenders for bedrooms, bathrooms, and meditation areas. These colors promote relaxation and reduce stress.</p>
        
        <h3>Energetic Spaces</h3>
        <p>Incorporate yellows, oranges, and bright reds in kitchens, home offices, and workout areas to boost energy and creativity.</p>
        
        <h3>Sophisticated Spaces</h3>
        <p>Choose deep purples, rich browns, and elegant grays for living rooms and dining areas to create a sense of luxury and refinement.</p>
        
        <h2>Color Temperature</h2>
        <p>Consider the temperature of colors:</p>
        <ul>
          <li><strong>Warm colors</strong> (reds, oranges, yellows) create energy and intimacy</li>
          <li><strong>Cool colors</strong> (blues, greens, purples) promote calm and spaciousness</li>
        </ul>
        
        <h2>Practical Application</h2>
        <p>When applying color psychology to your home:</p>
        <ol>
          <li>Start with your room's purpose and desired mood</li>
          <li>Choose a primary color that supports that mood</li>
          <li>Select complementary colors for balance</li>
          <li>Use neutral colors to ground the space</li>
          <li>Test colors in your space before committing</li>
        </ol>
        
        <p>Remember that personal associations with colors can vary significantly between individuals. The most important factor is how the colors make you feel in your own space.</p>
      `,
      category: "Interior Design",
      author: "Priya Patel",
      date: "February 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center",
      excerpt: "Understand how different colors affect our emotions and learn how to use color psychology to create the perfect atmosphere in your home."
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

  return (
    <PageLayout>
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