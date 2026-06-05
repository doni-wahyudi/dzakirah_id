import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

// Page Imports
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProgramsPage from './pages/Programs/ProgramsPage';
import ProgramDetail from './pages/Programs/ProgramDetail';
import CommunityPage from './pages/Community/CommunityPage';
import BlogPage from './pages/Blog/BlogPage';
import BlogPost from './pages/Blog/BlogPost';
import EventsPage from './pages/Events/EventsPage';
import GalleryPage from './pages/Gallery/GalleryPage';
import CharityPage from './pages/Charity/CharityPage';
import ContactPage from './pages/Contact/ContactPage';

import './App.css';

// Scroll to top on route change for seamless UX
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        
        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<AboutPage />} />
            
            {/* Programs Routing */}
            <Route path="/program" element={<ProgramsPage />} />
            <Route path="/program/:slug" element={<ProgramDetail />} />
            
            <Route path="/komunitas" element={<CommunityPage />} />
            
            {/* Blog Routing */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            <Route path="/event" element={<EventsPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/belajar-sedekah" element={<CharityPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            
            {/* Fallback Route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
