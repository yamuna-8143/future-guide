import * as Icons from 'lucide-react';
import './FeatureCard.css';

function FeatureCard({ feature }) {
  const IconComponent = Icons[feature.icon] || Icons.Star;

  return (
    <div className="feature-card">
      <div className="feature-icon">
        <IconComponent size={24} />
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
}

export default FeatureCard;
