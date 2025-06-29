import React, { useState, useRef } from 'react';
import PageLayout from '../components/ui/PageLayout/PageLayout';
import PageHero from '../components/ui/PageHero/PageHero';
import styles from '../styles/Consultation.module.css';

const Consultation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const formRef = useRef(null);

  const projectTypeOptions = [
    { value: '', label: 'Select project type' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'educational', label: 'Educational' },
    { value: 'retail', label: 'Retail' },
    { value: 'office', label: 'Office Space' },
    { value: 'other', label: 'Other' }
  ];

  const timeOptions = [
    { value: '', label: 'Select preferred time' },
    { value: 'morning', label: 'Morning (9:00 AM - 12:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (12:00 PM - 3:00 PM)' },
    { value: 'evening', label: 'Evening (3:00 PM - 6:00 PM)' },
    { value: 'flexible', label: 'Flexible - Any time works' }
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim().length < 2 ? 'Full name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
          return 'Please enter a valid phone number';
        }
        return '';
      case 'projectLocation':
        return value.trim().length < 5 ? 'Please provide a valid project location' : '';
      case 'projectType':
        return !value ? 'Please select a project type' : '';
      case 'preferredDate':
        return !value ? 'Please select a preferred date' : '';
      case 'preferredTime':
        return !value ? 'Please select a preferred time' : '';
      case 'message':
        return value.trim().length < 10 ? 'Please provide more details about your project (at least 10 characters)' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (fieldName) => {
    setFocusedField(null);
    const error = validateField(fieldName, formData[fieldName]);
    if (error) {
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectLocation: '',
        projectType: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
      setErrors({});
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFieldActive = (fieldName) => {
    return focusedField === fieldName || formData[fieldName];
  };

  const getMinDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <PageLayout>
      <PageHero
        badgeIcon="/icons/vasista-element-arrow.svg"
        badgeText="Free Consultation"
        title="Get a Free Consultation for Your Project"
        subtitle="Let our experts visit your site and provide personalized solutions tailored to your needs."
        ctaText="Start Your Project"
        ctaLink="/contact"
      />
      
      <section className={styles.consultationSection}>
        <div className={styles.container}>
          <div className={styles.consultationContent}>
            {/* Left Column - Information */}
            <div className={styles.infoSection}>
              <div className={styles.infoContent}>
                <h2>Why Choose Vasista for Your Project?</h2>
                <p>
                  Our team of experienced professionals will visit your location to understand your specific requirements, 
                  assess the space, and provide you with a comprehensive consultation tailored to your project needs.
                </p>
                
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"></path>
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>Site Visit & Assessment</h4>
                      <p>Our experts will visit your location to understand your space and requirements.</p>
                    </div>
                  </div>
                  
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"></path>
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>Personalized Solutions</h4>
                      <p>Get customized recommendations based on your specific needs and budget.</p>
                    </div>
                  </div>
                  
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"></path>
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>No Obligation</h4>
                      <p>Our consultation is completely free with no pressure to proceed with our services.</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.contactInfo}>
                  <h4>Need Immediate Assistance?</h4>
                  <p>Call us directly: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                  <p>Or email us: <a href="mailto:info@vasista.com">info@vasista.com</a></p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={styles.formSection}>
              <div className={styles.consultationFormContainer}>
                {isSubmitted && (
                  <div className={styles.successMessage} role="alert">
                    <div className={styles.successIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22,4 12,14.01 9,11.01"></polyline>
                      </svg>
                    </div>
                    <h3>Consultation Request Submitted!</h3>
                    <p>Thank you for your interest. Our team will contact you within 24 hours to schedule your free consultation visit.</p>
                  </div>
                )}

                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className={`${styles.consultationForm} ${isSubmitted ? styles.hidden : ''}`}
                  noValidate
                >
                  <div className={styles.formHeader}>
                    <h3>Request Your Free Consultation</h3>
                    <p>Fill out the form below and we'll schedule a visit to your project site.</p>
                  </div>

                  <div className={styles.formGrid}>
                    {/* Full Name Field */}
                    <div className={styles.formGroup}>
                      <div className={`${styles.inputWrapper} ${isFieldActive('fullName') ? styles.active : ''} ${errors.fullName ? styles.error : ''}`}>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('fullName')}
                          onBlur={() => handleBlur('fullName')}
                          className={styles.formInput}
                          required
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        />
                        <label htmlFor="fullName" className={`${styles.floatingLabel} ${isFieldActive('fullName') ? styles.active : ''}`}>
                          Full Name *
                        </label>
                        {errors.fullName && (
                          <div id="fullName-error" className={styles.errorMessage} role="alert">
                            {errors.fullName}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className={styles.formGroup}>
                      <div className={`${styles.inputWrapper} ${isFieldActive('email') ? styles.active : ''} ${errors.email ? styles.error : ''}`}>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={() => handleBlur('email')}
                          className={styles.formInput}
                          required
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        <label htmlFor="email" className={`${styles.floatingLabel} ${isFieldActive('email') ? styles.active : ''}`}>
                          Email Address *
                        </label>
                        {errors.email && (
                          <div id="email-error" className={styles.errorMessage} role="alert">
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className={styles.formGroup}>
                      <div className={`${styles.inputWrapper} ${isFieldActive('phone') ? styles.active : ''} ${errors.phone ? styles.error : ''}`}>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('phone')}
                          onBlur={() => handleBlur('phone')}
                          className={styles.formInput}
                          required
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        <label htmlFor="phone" className={`${styles.floatingLabel} ${isFieldActive('phone') ? styles.active : ''}`}>
                          Phone Number *
                        </label>
                        {errors.phone && (
                          <div id="phone-error" className={styles.errorMessage} role="alert">
                            {errors.phone}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Location Field */}
                    <div className={styles.formGroup}>
                      <div className={`${styles.inputWrapper} ${isFieldActive('projectLocation') ? styles.active : ''} ${errors.projectLocation ? styles.error : ''}`}>
                        <input
                          type="text"
                          id="projectLocation"
                          name="projectLocation"
                          value={formData.projectLocation}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('projectLocation')}
                          onBlur={() => handleBlur('projectLocation')}
                          className={styles.formInput}
                          required
                          aria-describedby={errors.projectLocation ? 'projectLocation-error' : undefined}
                        />
                        <label htmlFor="projectLocation" className={`${styles.floatingLabel} ${isFieldActive('projectLocation') ? styles.active : ''}`}>
                          Project Location *
                        </label>
                        {errors.projectLocation && (
                          <div id="projectLocation-error" className={styles.errorMessage} role="alert">
                            {errors.projectLocation}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Type Field */}
                    <div className={styles.formGroup}>
                      <div className={`${styles.inputWrapper} ${isFieldActive('projectType') ? styles.active : ''} ${errors.projectType ? styles.error : ''}`}>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('projectType')}
                          onBlur={() => handleBlur('projectType')}
                          className={styles.formSelect}
                          required
                          aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                        >
                          {projectTypeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="projectType" className={`${styles.floatingLabel} ${isFieldActive('projectType') ? styles.active : ''}`}>
                          Project Type *
                        </label>
                        {errors.projectType && (
                          <div id="projectType-error" className={styles.errorMessage} role="alert">
                            {errors.projectType}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Preferred Date Field */}
                    <div className={styles.formGroup}>
                      <div className={`${styles.inputWrapper} ${isFieldActive('preferredDate') ? styles.active : ''} ${errors.preferredDate ? styles.error : ''}`}>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('preferredDate')}
                          onBlur={() => handleBlur('preferredDate')}
                          className={styles.formInput}
                          min={getMinDate()}
                          required
                          aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
                        />
                        <label htmlFor="preferredDate" className={`${styles.floatingLabel} ${isFieldActive('preferredDate') ? styles.active : ''}`}>
                          Preferred Date *
                        </label>
                        {errors.preferredDate && (
                          <div id="preferredDate-error" className={styles.errorMessage} role="alert">
                            {errors.preferredDate}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Preferred Time Field */}
                    <div className={styles.formGroup}>
                      <div className={`${styles.inputWrapper} ${isFieldActive('preferredTime') ? styles.active : ''} ${errors.preferredTime ? styles.error : ''}`}>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('preferredTime')}
                          onBlur={() => handleBlur('preferredTime')}
                          className={styles.formSelect}
                          required
                          aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
                        >
                          {timeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="preferredTime" className={`${styles.floatingLabel} ${isFieldActive('preferredTime') ? styles.active : ''}`}>
                          Preferred Time *
                        </label>
                        {errors.preferredTime && (
                          <div id="preferredTime-error" className={styles.errorMessage} role="alert">
                            {errors.preferredTime}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className={styles.formGroup}>
                    <div className={`${styles.inputWrapper} ${isFieldActive('message') ? styles.active : ''} ${errors.message ? styles.error : ''}`}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={() => handleBlur('message')}
                        className={styles.formTextarea}
                        rows="5"
                        required
                        placeholder="Tell us about your project requirements, goals, and any specific needs..."
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      <label htmlFor="message" className={`${styles.floatingLabel} ${isFieldActive('message') ? styles.active : ''}`}>
                        Project Description *
                      </label>
                      {errors.message && (
                        <div id="message-error" className={styles.errorMessage} role="alert">
                          {errors.message}
                        </div>
                      )}
                    </div>
                  </div>

                  {errors.submit && (
                    <div className={styles.submitError} role="alert">
                      {errors.submit}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-lg ${styles.submitButton}`}
                    disabled={isSubmitting}
                    aria-describedby={isSubmitting ? 'submitting-status' : undefined}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Submitting Request...
                        <span id="submitting-status" className="sr-only">Submitting form, please wait</span>
                      </>
                    ) : (
                      'Request Consultation'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Consultation; 