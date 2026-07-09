import { Link } from 'react-router-dom';
import { Target, Users, Heart, Award, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { PageBanner } from '../../components';
import './About.css';

function About() {
  const values = [
    {
      icon: <Target size={28} />,
      title: 'Accuracy First',
      description: 'We provide verified and up-to-date information to help students make confident decisions about their future.'
    },
    {
      icon: <Users size={28} />,
      title: 'Student-Centric',
      description: 'Every feature is designed with students in mind, making complex information easy to understand and access.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Accessible to All',
      description: 'Quality career guidance should not come with a price tag. Our platform is completely free for all students.'
    },
    {
      icon: <Award size={28} />,
      title: 'Continuous Excellence',
      description: 'We constantly update our content to reflect the latest in education policies, exams, and career trends.'
    }
  ];

  const team = [
    {
      name: 'Educational Experts',
      role: 'Content Verification',
      description: 'Our team of education professionals ensures all information is accurate and relevant.'
    },
    {
      name: 'Career Counselors',
      role: 'Career Guidance',
      description: 'Experienced counselors contribute insights on various career paths and opportunities.'
    },
    {
      name: 'Tech Enthusiasts',
      role: 'Platform Development',
      description: 'A dedicated tech team keeps the platform running smoothly and user-friendly.'
    }
  ];

  return (
    <div className="about-page-wrapper">
      <PageBanner
        title="About FutureGuide"
        subtitle="Empowering students to make informed career decisions since 2020"
      />

      <section className="section about-main">
        <div className="container">
          <div className="about-hero">
            <div className="about-content">
              <h1>Our Mission</h1>
              <p>
                FutureGuide was born from a simple observation: too many students struggle to make informed
                decisions about their education and career paths. We believe every student deserves access
                to clear, comprehensive, and unbiased information about their options.
              </p>
              <p>
                Our platform consolidates information about courses, colleges, entrance exams, and career
                prospects into one easy-to-navigate resource. Whether you're deciding after 10th standard
                or exploring options after intermediate, we're here to guide you every step of the way.
              </p>
              <Link to="/education" className="btn btn-primary">
                <GraduationCap size={20} />
                Start Exploring
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do at FutureGuide
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <h2 className="section-title">Behind FutureGuide</h2>
          <p className="section-subtitle">
            A dedicated team working to make career guidance accessible
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-icon-wrapper">
                  <BookOpen size={32} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Join thousands of students who have found clarity in their career path with FutureGuide.
              Your future starts with a single decision.
            </p>
            <Link to="/education" className="btn btn-hero">
              Explore Courses
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
