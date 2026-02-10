import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Admin/Login';
import Training from './pages/Training';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Dashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import ScrollReveal from './components/ui/ScrollReveal';
import { AuthProvider } from './context/AuthContext';
import './index.css'; // Global styles including Tailwind

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};



// Layout wrapper to conditionally render Header/Footer
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Hide Header/Footer on Admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="bg-dark min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-white">
      <ScrollProgress />
      {!isAdminRoute && <Header />}
      <main className={`flex-grow ${!isAdminRoute ? '' : 'h-full'}`}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

// Scroll Progress Bar Component
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/training" element={<Training />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
};

export default App;