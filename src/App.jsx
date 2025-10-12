// App.jsx — Main App Router Setup
import { Routes, Route, useLocation } from 'react-router-dom';

// Shared Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

// UX Projects
import Byblos from './pages/projects/Byblos';
import CitiBank from './pages/projects/CitiBank';
import Accenture from './pages/projects/Accenture';
import AmazonPrime from './pages/projects/AmazonPrime';

// Web Dev Projects
import Qronster from './pages/projects/Qronster';
import SchoolSystem from './pages/projects/SchoolSystem';
import OyeClicker from './pages/projects/OyeClicker';
import DazzlingSmile from './pages/projects/DazzlingSmile';
import AdminCMS from './pages/projects/AdminCMS';
import VibeCoding from './pages/projects/VibeCoding';

// Case Study Page with Before/After Slider
import ProjectPage from './pages/projects/ProjectPage';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Core Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* UX Projects */}
        <Route path="/byblos" element={<Byblos />} />
        <Route path="/citibank" element={<CitiBank />} />
        <Route path="/accenture" element={<Accenture />} />
        <Route path="/amazonprime" element={<AmazonPrime />} />

        {/* Web Dev Projects */}
        <Route path="/qronster" element={<Qronster />} />
        <Route path="/schoolsystem" element={<SchoolSystem />} />
        <Route path="/oyeclicker" element={<OyeClicker />} />
        <Route path="/dazzlingsmile" element={<DazzlingSmile />} />
        <Route path="/admincms" element={<AdminCMS />} />
        <Route path="/vibecoding" element={<VibeCoding />} />

        {/* New Before/After Slider Case Study */}
        <Route path="/project-demo" element={<ProjectPage />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;