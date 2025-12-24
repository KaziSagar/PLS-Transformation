import React from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Methodology from './pages/Methodology';
import Solutions from './pages/Solutions';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Report from './pages/Report';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030d1c]">
      <Navbar />
      <main className="flex-grow bg-white">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:category" element={<Solutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:category" element={<Insights />} />
          <Route path="/insights/report" element={<Report />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Chatbox />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <AppContent />
    </MemoryRouter>
  );
};

export default App;