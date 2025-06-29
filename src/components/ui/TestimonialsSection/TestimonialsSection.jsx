import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: ' ',
    review: "Vasista transformed our cramped kitchen into a functional, beautiful space. Their modular solutions maximized every inch, and the design exceeded our expectations. The team was professional and creative throughout.",
    location: 'Kitchen Renovation, Residential Client, TX',
    rating: 5,
    company: 'Homeowner'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    avatar: '',
    review: 'The custom built-ins they designed for our living room are absolutely stunning. Their attention to detail and quality craftsmanship is unmatched. Our space now feels both elegant and practical.',
    location: 'Living Room Design, Professional Client, TX',
    rating: 5,
    company: 'Tech Executive'
  },
  {
    id: 3,
    name: 'Aisha Verma',
    avatar: '',
    review: "I was amazed by how Vasista turned our small apartment into a spacious-feeling home. Their space optimization techniques are incredible. The quality and attention to detail are outstanding.",
    location: 'Apartment Renovation, Young Professional, TX',
    rating: 5,
    company: 'Marketing Manager'
  },
  {
    id: 4,
    name: 'Ravi Singh',
    avatar: '',
    review: "Working with Vasista was a game-changer for our office space. They created a modern, functional environment that boosts productivity while maintaining aesthetic appeal. Highly recommend!",
    location: 'Office Design, Business Owner, TX',
    rating: 5,
    company: 'Startup Founder'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);

  const goToSlide = useCallback((index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, currentIndex]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section 
      className={`${styles.testimonials} ${isVisible ? styles.visible : ''}`} 
      ref={carouselRef}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What Our Clients Are Saying</h2>
          <p className={styles.subtitle}>Real stories from real people who transformed their spaces</p>
        </div>

        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div 
            className={styles.carousel}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              ref={trackRef}
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`${styles.card} ${index === currentIndex ? styles.active : ''}`}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.rating}>
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className={styles.review}>
                      "{testimonial.review}"
                    </blockquote>
                    
                    <div className={styles.author}>
                      <div className={styles.avatar}>
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          loading="lazy"
                        />
                        <div className={styles.avatarGlow}></div>
                      </div>
                      <div className={styles.authorInfo}>
                        <h4 className={styles.name}>{testimonial.name}</h4>
                        <p className={styles.company}>{testimonial.company}</p>
                        <p className={styles.location}>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 