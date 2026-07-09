import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-description">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            Go Home
          </Link>
          <Link to="/education" className="btn btn-outline">
            <Search size={18} />
            Explore Courses
          </Link>
        </div>
        <div className="not-found-suggestions">
          <h3>What are you looking for?</h3>
          <div className="suggestions-grid">
            <Link to="/after-10th" className="suggestion-link">
              <ArrowLeft size={16} />
              Courses After 10th
            </Link>
            <Link to="/after-inter" className="suggestion-link">
              <ArrowLeft size={16} />
              Courses After Intermediate
            </Link>
            <Link to="/about" className="suggestion-link">
              <ArrowLeft size={16} />
              About FutureGuide
            </Link>
            <Link to="/contact" className="suggestion-link">
              <ArrowLeft size={16} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
