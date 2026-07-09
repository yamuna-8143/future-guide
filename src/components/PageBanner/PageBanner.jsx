import './PageBanner.css';

function PageBanner({ title, subtitle }) {
  return (
    <div className="page-banner">
      <div className="page-banner-content">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

export default PageBanner;
