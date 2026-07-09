import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Layers } from 'lucide-react';
import { PageBanner, StreamCard } from '../../components';
import './Education.css';

function Education() {
  const streams = [
    {
      id: 'after-10th',
      title: 'After 10th Standard',
      description: 'Explore intermediate courses, diplomas, ITI programs, and vocational training options',
      path: '/after-10th',
      count: '8+ Courses Available',
      icon: <GraduationCap size={32} />
    },
    {
      id: 'after-inter',
      title: 'After Intermediate',
      description: 'Discover degree programs, professional courses, and career opportunities across multiple fields',
      path: '/after-inter',
      count: '14+ Courses Available',
      icon: <BookOpen size={32} />
    }
  ];

  return (
    <div className="education-page">
      <PageBanner
        title="Explore Your Education Options"
        subtitle="Choose your education stage and discover the perfect career path for you"
      />

      <section className="section">
        <div className="container">
          <div className="education-intro">
            <Layers className="intro-icon" size={48} />
            <h2>Choose Your Path</h2>
            <p>
              Whether you've just completed your 10th standard or finished your intermediate education,
              we have comprehensive guides to help you make the right decision. Select your stage below
              to explore all available options.
            </p>
          </div>

          <div className="education-streams">
            {streams.map(stream => (
              <div key={stream.id} className="stream-card-wrapper">
                <div className="stream-card-home">
                  <div className="stream-icon-home">
                    {stream.icon}
                  </div>
                  <h3>{stream.title}</h3>
                  <p>{stream.description}</p>
                  <span className="stream-count">{stream.count}</span>
                  <Link to={stream.path} className="stream-link">
                    Explore Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="education-help">
            <h3>Not Sure Where to Start?</h3>
            <p>
              Here's a quick guide to help you decide:
            </p>
            <div className="help-cards">
              <div className="help-card">
                <h4>After 10th Standard</h4>
                <ul>
                  <li>Choose between MPC, BiPC, MEC, CEC streams</li>
                  <li>Explore Diploma & Polytechnic courses</li>
                  <li>Consider ITI and Vocational training</li>
                  <li>Perfect for quick skill-based careers</li>
                </ul>
              </div>
              <div className="help-card">
                <h4>After Intermediate</h4>
                <ul>
                  <li>Engineering, Medical, Commerce degrees</li>
                  <li>Law, Design, Aviation programs</li>
                  <li>Higher education and specialization</li>
                  <li>Professional and management courses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
