import { useState, useMemo } from 'react';
import { PageBanner, CourseCard, SearchFilter } from '../../components';
import { afterInterCourses } from '../../data';
import './AfterInter.css';

function AfterInter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'medical', label: 'Medical' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'arts', label: 'Arts & Law' },
    { id: 'other', label: 'Other' }
  ];

  const courseCategories = {
    btech: 'engineering',
    pharmacy: 'engineering',
    agriculture: 'other',
    mbbs: 'medical',
    bds: 'medical',
    bsc: 'other',
    bcom: 'commerce',
    bba: 'commerce',
    ba: 'arts',
    law: 'arts',
    'hotel-management': 'other',
    aviation: 'other',
    design: 'other',
    'other-courses': 'other'
  };

  const filteredCourses = useMemo(() => {
    let courses = afterInterCourses;

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
    <div className="after-inter-page">
      <PageBanner
        title="Courses After Intermediate"
        subtitle="Explore degree programs and professional courses to kickstart your career"
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
                  basePath="/after-inter"
                />
              ))}
            </div>
          )}

          <div className="course-summary inter-summary">
            <h3>Quick Overview</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-count">14+</span>
                <span className="summary-label">Degree Courses</span>
              </div>
              <div className="summary-item">
                <span className="summary-count">10+</span>
                <span className="summary-label">Professional Programs</span>
              </div>
              <div className="summary-item">
                <span className="summary-count">3-5</span>
                <span className="summary-label">Years Duration</span>
              </div>
              <div className="summary-item">
                <span className="summary-count">200+</span>
                <span className="summary-label">Career Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AfterInter;
