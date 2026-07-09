import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import * as Icons from 'lucide-react';
import './CourseCard.css';

function CourseCard({ course, basePath }) {
  const IconComponent = Icons[course.icon] || BookOpen;

  return (
    <Link to={`${basePath}/${course.id}`} className="course-card" style={{ '--card-color': course.color }}>
      <div className="course-card-header">
        <div className="course-card-icon">
          <IconComponent size={28} />
        </div>
        <div className="course-card-arrow">
          <ArrowRight size={16} />
        </div>
      </div>
      <h3 className="course-card-title">{course.shortName || course.name}</h3>
      <p className="course-card-subtitle">{course.name}</p>
      {course.duration && (
        <p className="course-card-subtitle">{course.duration}</p>
      )}
      <div className="course-card-tags">
        {course.expectedSalary && (
          <span className="course-card-tag">
            {course.expectedSalary.min}-{course.expectedSalary.max} {course.expectedSalary.unit}
          </span>
        )}
        {course.duration && (
          <span className="course-card-tag">{course.duration}</span>
        )}
      </div>
    </Link>
  );
}

export default CourseCard;
