export function formatDuration(years) {
  return `${years} Year${years > 1 ? 's' : ''}`;
}

export function formatSalary(range) {
  return `${range.min} - ${range.max} LPA`;
}

export function generateId(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
