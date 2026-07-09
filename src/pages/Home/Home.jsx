import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, ArrowRight, Sparkles, Target, CheckCircle } from 'lucide-react';
import { FeatureCard, TestimonialCard } from '../../components';
import { features, testimonials, whyChooseUs, stats } from '../../data';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Your Career Journey Starts Here
            </div>
            <h1 className="hero-title">
              Discover Your <span className="text-gradient">Perfect Career Path</span>
            </h1>
            <p className="hero-subtitle">
              FutureGuide helps students make informed decisions about their education and career.
              Explore courses, compare options, and find the path that's right for you.
            </p>
            <div className="hero-buttons">
              <Link to="/education" className="btn btn-hero">
                Start Exploring
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-hero-outline">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-card" style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: 'white' }}>
                <div className="hero-card-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <GraduationCap size={24} />
                </div>
                <div className="hero-card-title">After 10th</div>
                <div className="hero-card-subtitle">Explore 8+ streams</div>
              </div>
              <div className="hero-card" style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: 'white' }}>
                <div className="hero-card-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <BookOpen size={24} />
                </div>
                <div className="hero-card-title">After Intermediate</div>
                <div className="hero-card-subtitle">14+ degree courses</div>
              </div>
              <div className="hero-card" style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', color: 'white' }}>
                <div className="hero-card-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <Users size={24} />
                </div>
                <div className="hero-card-title">Career Guidance</div>
                <div className="hero-card-subtitle">Expert advice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose FutureGuide?</h2>
          <p className="section-subtitle">
            Everything you need to make the right career decision, all in one place
          </p>
          <div className="features-grid">
            {features.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Paths Preview */}
      <section className="section education-preview">
        <div className="container">
          <h2 className="section-title">Choose Your Path</h2>
          <p className="section-subtitle">
            Whether you're deciding after 10th or Intermediate, we've got you covered
          </p>
          <div className="education-options">
            <Link to="/after-10th" className="stream-card-preview">
              <div className="stream-icon-wrapper">
                <GraduationCap size={40} />
              </div>
              <h3>After 10th Standard</h3>
              <p>Explore intermediate courses, diplomas, ITI, and vocational programs</p>
              <div className="stream-features">
                <span><CheckCircle size={16} /> MPC, BiPC, MEC, CEC</span>
                <span><CheckCircle size={16} /> Diploma & Polytechnic</span>
                <span><CheckCircle size={16} /> ITI & Vocational</span>
              </div>
              <div className="stream-arrow">
                <ArrowRight size={24} />
              </div>
            </Link>

            <Link to="/after-inter" className="stream-card-preview">
              <div className="stream-icon-wrapper">
                <BookOpen size={40} />
              </div>
              <h3>After Intermediate</h3>
              <p>Discover degree courses, professional programs, and career options</p>
              <div className="stream-features">
                <span><CheckCircle size={16} /> B.Tech, MBBS, BDS</span>
                <span><CheckCircle size={16} /> BBA, B.Com, Law</span>
                <span><CheckCircle size={16} /> Design & Aviation</span>
              </div>
              <div className="stream-arrow">
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Trusted by Students Across India</h2>
          <p className="section-subtitle">
            Join thousands of students who have found their career path with FutureGuide
          </p>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-icon">
                  <CheckCircle size={24} />
                </div>
                <h4 className="why-choose-title">{item.title}</h4>
                <p className="why-choose-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Students Say</h2>
          <p className="section-subtitle">
            Real stories from students who found their path with FutureGuide
          </p>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <Sparkles size={32} />
            </div>
            <h2 className="cta-title">Ready to Find Your Path?</h2>
            <p className="cta-subtitle">
              Don't let confusion hold you back. Start exploring your options today and
              make an informed decision about your future.
            </p>
            <Link to="/education" className="btn btn-primary btn-lg">
              <Target size={20} />
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
