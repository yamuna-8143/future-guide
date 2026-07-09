import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '../../hooks';
import './ScrollToTop.css';

function ScrollToTop() {
  const { showScrollTop, scrollToTop } = useScrollToTop();

  return (
    <button
      className={`scroll-top-btn ${showScrollTop ? '' : 'hidden'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;
