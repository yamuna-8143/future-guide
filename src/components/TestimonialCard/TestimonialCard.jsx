import * as Icons from 'lucide-react';
import './TestimonialCard.css';

function TestimonialCard({ testimonial }) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < testimonial.rating ? 'filled' : 'empty'
  );

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-avatar"
        />
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>
      <div className="testimonial-stars">
        {stars.map((status, index) => (
          status === 'filled'
            ? <Icons.Star key={index} size={16} fill="currentColor" />
            : <Icons.Star key={index} size={16} />
        ))}
      </div>
      <p className="testimonial-content">{testimonial.content}</p>
    </div>
  );
}

export default TestimonialCard;
