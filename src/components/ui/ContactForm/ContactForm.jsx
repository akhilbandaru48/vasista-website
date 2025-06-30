import React, { useState, useRef, useEffect } from 'react';
import { sendContactEmail } from '../../../utils/emailService';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const formRef = useRef(null);

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'project', label: 'Project Consultation' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'support', label: 'Customer Support' },
    { value: 'partnership', label: 'Partnership' }
  ];

  const projectTypeOptions = [
    { value: '', label: 'Select project type' },
    { value: 'kitchen', label: 'Kitchen Remodel' },
    { value: 'bathroom', label: 'Bathroom Renovation' },
    { value: 'living-room', label: 'Living Room Design' },
    { value: 'bedroom', label: 'Bedroom Design' },
    { value: 'office', label: 'Home Office' },
    { value: 'outdoor', label: 'Outdoor Space' },
    { value: 'full-home', label: 'Full Home Design' },
    { value: 'other', label: 'Other' }
  ];



  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
          return 'Please enter a valid phone number';
        }
        return '';
      case 'subject':
        return !value ? 'Please select a subject' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
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
      if (field !== 'phone' && field !== 'projectType' && field !== 'budget') {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
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
      // Email configuration - you can change the method based on your setup
      const emailOptions = {
        method: 'mailto', // Change to 'sendgrid', 'mailgun', 'emailjs', or 'serverless'
        // For SendGrid:
        // apiKey: process.env.REACT_APP_SENDGRID_API_KEY,
        // toEmail: 'info@vasista.com',
        
        // For Mailgun:
        // apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
        // domain: process.env.REACT_APP_MAILGUN_DOMAIN,
        // toEmail: 'info@vasista.com',
        
        // For EmailJS:
        // serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        // templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        // userId: process.env.REACT_APP_EMAILJS_USER_ID,
        
        // For Serverless:
        // endpoint: process.env.REACT_APP_EMAIL_ENDPOINT,
      };

      const result = await sendContactEmail(formData, emailOptions);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          projectType: '',
          budget: '',
          message: ''
        });
        setErrors({});
        
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrors({ submit: result.message || 'Failed to send email. Please try again.' });
      }
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

  return (
    <div className={styles.contactFormContainer}>
      {isSubmitted && (
        <div className={styles.successMessage} role="alert">
          <div className={styles.successIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
          </div>
          <h3>Thank you for your message!</h3>
          <p>We've received your inquiry and will get back to you within 24 hours.</p>
        </div>
      )}

      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className={`${styles.contactForm} ${isSubmitted ? styles.hidden : ''}`}
        noValidate
      >
        <div className={styles.formHeader}>
          <h2>Send us a message</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        <div className={styles.formGrid}>
          {/* Name Field */}
          <div className={styles.formGroup}>
            <div className={`${styles.inputWrapper} ${isFieldActive('name') ? styles.active : ''} ${errors.name ? styles.error : ''}`}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                className={styles.formInput}
                required
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              <label htmlFor="name" className={`${styles.floatingLabel} ${isFieldActive('name') ? styles.active : ''}`}>
                Full Name *
              </label>
              {errors.name && (
                <div id="name-error" className={styles.errorMessage} role="alert">
                  {errors.name}
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
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              <label htmlFor="phone" className={`${styles.floatingLabel} ${isFieldActive('phone') ? styles.active : ''}`}>
                Phone Number
              </label>
              {errors.phone && (
                <div id="phone-error" className={styles.errorMessage} role="alert">
                  {errors.phone}
                </div>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div className={styles.formGroup}>
            <div className={`${styles.inputWrapper} ${isFieldActive('subject') ? styles.active : ''} ${errors.subject ? styles.error : ''}`}>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                className={styles.formSelect}
                required
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              >
                {subjectOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <div id="subject-error" className={styles.errorMessage} role="alert">
                  {errors.subject}
                </div>
              )}
            </div>
          </div>

          {/* Project Type Field */}
          <div className={styles.formGroup}>
            <div className={`${styles.inputWrapper} ${isFieldActive('projectType') ? styles.active : ''}`}>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                onFocus={() => handleFocus('projectType')}
                onBlur={() => handleBlur('projectType')}
                className={styles.formSelect}
              >
                {projectTypeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Field */}
          {/* <div className={styles.formGroup}>
            <div className={`${styles.inputWrapper} ${isFieldActive('budget') ? styles.active : ''}`}>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                onFocus={() => handleFocus('budget')}
                onBlur={() => handleBlur('budget')}
                className={styles.formSelect}
              >
                {budgetOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
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
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            <label htmlFor="message" className={`${styles.floatingLabel} ${isFieldActive('message') ? styles.active : ''}`}>
              Your Message *
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
              Sending Message...
              <span id="submitting-status" className="sr-only">Submitting form, please wait</span>
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 