import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop } from './components';
import {
  Home,
  Education,
  After10th,
  AfterInter,
  CourseDetail,
  About,
  Contact,
  NotFound
} from './pages';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/after-10th" element={<After10th />} />
            <Route path="/after-10th/:courseId" element={<CourseDetail />} />
            <Route path="/after-inter" element={<AfterInter />} />
            <Route path="/after-inter/:courseId" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
