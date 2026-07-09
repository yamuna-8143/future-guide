import { Search, X } from 'lucide-react';
import './SearchFilter.css';

function SearchFilter({ searchQuery, setSearchQuery, filters, activeFilter, setActiveFilter }) {
  return (
    <div className="search-filter-wrapper">
      <div className="search-container">
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {filters && filters.length > 0 && (
        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
