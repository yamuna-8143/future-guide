import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/after-10th', label: 'After 10th' },
    { path: '/after-inter', label: 'After Intermediate' }
  ];

  const resourceLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/education', label: 'All Courses' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <GraduationCap size={32} />
              <span>FutureGuide</span>
            </Link>
            <p className="footer-description">
              Your trusted companion for making informed career decisions. We help students
              discover the right educational path after 10th and intermediate.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map(link => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Resources</h4>
            <div className="footer-links">
              {resourceLinks.map(link => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contact Us</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Mail size={18} />
                <span>support@futureguide.com</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} FutureGuide. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
