import React, { useState } from 'react';
import './ContactSection.css'; 
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); 
    setMessage(null); 
    setMessageType(''); 

    try {
      
      const response = await fetch('/api/send-email', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        setMessage('Thank you for your message! I will get back to you soon.');
        setMessageType('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to send message. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please check your internet connection and try again.');
      setMessageType('error');
    } finally {
      setLoading(false); 
      setTimeout(() => {
        setMessage(null);
        setMessageType('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {message && (
            <div className={`message-box ${messageType}`}>
              {message}
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
