import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Clock, BookOpen, Briefcase, GraduationCap, Users, AlertCircle, HelpCircle, ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import { LoadingSpinner } from '../../components';
import { after10thCourses, afterInterCourses } from '../../data';
import { useState, useEffect } from 'react';
import './CourseDetail.css';

function CourseDetail() {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const [source, setSource] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setLoading(true);

    let foundCourse = after10thCourses.find(c => c.id === courseId);
    if (foundCourse) {
      setSource('after-10th');
    } else {
      foundCourse = afterInterCourses.find(c => c.id === courseId);
      if (foundCourse) {
        setSource('after-inter');
      }
    }

    setCourse(foundCourse);
    setLoading(false);
  }, [courseId]);

  if (loading) {
    return <LoadingSpinner text="Loading course details..." />;
  }

  if (!course) {
    return <Navigate to="/education" replace />;
  }

  const IconComponent = Icons[course.icon] || BookOpen;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-detail-hero" style={{ '--course-color': course.color }}>
        <div className="course-detail-container">
          <div className="course-detail-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <Link to="/education">Education</Link>
            <ChevronRight size={16} />
            <Link to={`/${source}`}>{source === 'after-10th' ? 'After 10th' : 'After Intermediate'}</Link>
            <ChevronRight size={16} />
            <span>{course.shortName}</span>
          </div>

          <div className="course-detail-header">
            <div className="course-detail-icon" style={{ background: `${course.color}20`, color: course.color }}>
              <IconComponent size={48} />
            </div>
            <div>
              <h1 className="course-detail-title">{course.name}</h1>
              {course.duration && (
                <div className="course-detail-duration">
                  <Clock size={18} />
                  <span>{course.duration}</span>
                </div>
              )}
            </div>
          </div>

          <div className="course-stats">
            {course.higherEducation && (
              <div className="course-stat-card">
                <div className="course-stat-value">{course.higherEducation.length}+</div>
                <div className="course-stat-label">Higher Education Options</div>
              </div>
            )}
            {course.careerOpportunities && (
              <div className="course-stat-card">
                <div className="course-stat-value">{course.careerOpportunities.length}+</div>
                <div className="course-stat-label">Career Paths</div>
              </div>
            )}
            {course.entranceExams && (
              <div className="course-stat-card">
                <div className="course-stat-value">{course.entranceExams.length}</div>
                <div className="course-stat-label">Entrance Exams</div>
              </div>
            )}
            {course.expectedSalary && (
              <div className="course-stat-card">
                <div className="course-stat-value">{course.expectedSalary.max} {course.expectedSalary.unit}</div>
                <div className="course-stat-label">Max Expected Salary</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="course-detail-content">
          {/* Overview */}
          <div className="course-section">
            <h2 className="course-section-title">
              <BookOpen size={24} />
              Course Overview
            </h2>
            <p className="course-section-content">{course.overview}</p>
          </div>

          {/* Subjects */}
          {course.subjects && (
            <div className="course-section">
              <h2 className="course-section-title">
                <BookOpen size={24} />
                Subjects Covered
              </h2>
              <div className="course-list">
                {course.subjects.map((subject, index) => (
                  <div key={index} className="course-list-item">
                    <Icons.CheckCircle size={18} />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Eligibility */}
          {course.eligibility && (
            <div className="course-section">
              <h2 className="course-section-title">
                <GraduationCap size={24} />
                Eligibility Criteria
              </h2>
              <p className="course-section-content">{course.eligibility}</p>
            </div>
          )}

          {/* Skills Required */}
          {course.skillsRequired && (
            <div className="course-section">
              <h2 className="course-section-title">
                <Users size={24} />
                Skills Required
              </h2>
              <div className="course-list">
                {course.skillsRequired.map((skill, index) => (
                  <div key={index} className="course-list-item">
                    <Icons.Star size={18} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Higher Education */}
          {course.higherEducation && (
            <div className="course-section">
              <h2 className="course-section-title">
                <GraduationCap size={24} />
                Higher Education Options
              </h2>
              <div className="course-list">
                {course.higherEducation.map((option, index) => (
                  <div key={index} className="course-list-item">
                    <Icons.ArrowRight size={18} />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Career Opportunities */}
          {course.careerOpportunities && (
            <div className="course-section">
              <h2 className="course-section-title">
                <Briefcase size={24} />
                Career Opportunities
              </h2>
              <div className="course-list">
                {course.careerOpportunities.map((career, index) => (
                  <div key={index} className="course-list-item">
                    <Icons.Briefcase size={18} />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Entrance Exams */}
          {course.entranceExams && course.entranceExams.length > 0 && (
            <div className="course-section">
              <h2 className="course-section-title">
                <BookOpen size={24} />
                Entrance Exams
              </h2>
              <div className="exam-list">
                {course.entranceExams.map((exam, index) => (
                  <div key={index} className="exam-card">
                    <div className="exam-name">{exam.name}</div>
                    <div className="exam-purpose">{exam.purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Top Colleges */}
          {course.topColleges && course.topColleges.length > 0 && (
            <div className="course-section">
              <h2 className="course-section-title">
                <Icons.Building2 size={24} />
                Top Colleges
              </h2>
              <div className="college-list">
                {course.topColleges.map((college, index) => (
                  <div key={index} className="college-card">
                    <div className="college-name">{college.name}</div>
                    <div className="college-location">{college.location}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expected Salary */}
          {course.expectedSalary && (
            <div className="course-section">
              <h2 className="course-section-title">
                <Icons.IndianRupee size={24} />
                Expected Salary
              </h2>
              <div className="salary-highlight">
                <div className="salary-range">
                  {course.expectedSalary.min} - {course.expectedSalary.max} {course.expectedSalary.unit}
                </div>
                <div className="salary-label">
                  Annual salary range for fresh graduates (varies by institution and skills)
                </div>
              </div>
            </div>
          )}

          {/* FAQs */}
          {course.faqs && course.faqs.length > 0 && (
            <div className="course-section">
              <h2 className="course-section-title">
                <HelpCircle size={24} />
                Frequently Asked Questions
              </h2>
              <div className="faq-list">
                {course.faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                    <div
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className="faq-icon" size={20} />
                    </div>
                    <div className="faq-answer">
                      <AlertCircle size={18} />
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
