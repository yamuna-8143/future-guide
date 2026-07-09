import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './StreamCard.css';

function StreamCard({ stream }) {
  return (
    <Link to={stream.path} className="stream-card">
      <div className="stream-card-icon">
        {stream.icon}
      </div>
      <h3 className="stream-card-title">{stream.title}</h3>
      <p className="stream-card-description">{stream.description}</p>
      <span className="stream-card-count">{stream.count}</span>
      <div className="stream-card-arrow">
        <ArrowRight size={24} />
      </div>
    </Link>
  );
}

export default StreamCard;
