import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { PageBanner } from '../../components';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page-wrapper">
      <PageBanner
        title="Contact Us"
        subtitle="Have questions? We're here to help you on your career journey"
      />

      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you! Whether you have questions about courses,
                need career guidance, or want to share feedback, our team is ready to assist.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h4>Email Us</h4>
                    <p>support@futureguide.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h4>Location</h4>
                    <p>Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div className="success-message">
                  <MessageSquare size={48} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-input"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us more about your query..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-preview">
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Quick answers to frequently asked questions
          </p>
          <div className="faq-preview-grid">
            <div className="faq-preview-item">
              <h4>Is FutureGuide free to use?</h4>
              <p>Yes! All our content and resources are completely free for students.</p>
            </div>
            <div className="faq-preview-item">
              <h4>How accurate is the information?</h4>
              <p>Our team regularly updates all content with verified information from official sources.</p>
            </div>
            <div className="faq-preview-item">
              <h4>Can I get personalized guidance?</h4>
              <p>Contact us with your specific questions and our team will help you find answers.</p>
            </div>
            <div className="faq-preview-item">
              <h4>How often is the content updated?</h4>
              <p>We update our content regularly to reflect the latest exam patterns and policies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
