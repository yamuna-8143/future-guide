import { useState, useMemo } from 'react';
import { PageBanner, CourseCard, SearchFilter, LoadingSpinner } from '../../components';
import { after10thCourses } from '../../data';
import './After10th.css';

function After10th() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'technical', label: 'Technical' },
    { id: 'vocational', label: 'Vocational' }
  ];

  const courseCategories = {
    mpc: 'intermediate',
    bipc: 'intermediate',
    mec: 'intermediate',
    cec: 'intermediate',
    diploma: 'technical',
    polytechnic: 'technical',
    iti: 'technical',
    vocational: 'vocational'
  };

  const filteredCourses = useMemo(() => {
    let courses = after10thCourses;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      courses = courses.filter(course =>
        course.name.toLowerCase().includes(query) ||
        course.shortName.toLowerCase().includes(query)
      );
    }

    if (activeFilter !== 'all') {
      courses = courses.filter(course =>
        courseCategories[course.id] === activeFilter
      );
    }

    return courses;
  }, [searchQuery, activeFilter]);

  return (
    <div className="after-10th-page">
      <PageBanner
        title="Courses After 10th Standard"
        subtitle="Explore your options after completing 10th grade - from intermediate streams to vocational training"
      />

      <section className="section">
        <div className="container">
          <SearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          {filteredCourses.length === 0 ? (
            <div className="empty-state">
              <p>No courses found. Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="cards-grid">
              {filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  basePath="/after-10th"
                />
              ))}
            </div>
          )}

          <div className="course-summary">
            <h3>Quick Overview</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-count">4</span>
                <span className="summary-label">Intermediate Streams</span>
              </div>
              <div className="summary-item">
                <span className="summary-count">3</span>
                <span className="summary-label">Technical Options</span>
              </div>
              <div className="summary-item">
                <span className="summary-count">1</span>
                <span className="summary-label">Vocational Path</span>
              </div>
              <div className="summary-item">
                <span className="summary-count">100+</span>
                <span className="summary-label">Career Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default After10th;
