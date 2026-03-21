import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Lazy loading pages for performance
const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = React.lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="w-12 h-12 border-4 border-[#eaedff] border-t-primary rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-surface font-body text-text">
        <Navbar />
        <main className="flex-grow pt-20">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-[88px] md:bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" 
            target="_blank" 
            rel="noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-500/30 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle size={28} />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-text text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              Chat with us on WhatsApp
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-text"></span>
            </span>
          </a>
        </div>

        {/* Mobile Sticky Bottom Conversion Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-[60] border-t border-surface-container flex justify-around p-3 items-center gap-3">
          <a href="tel:+919494837432" className="flex-1">
            <button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-4 py-3 shadow-md transition duration-300 font-medium text-sm flex items-center justify-center gap-2">
              <Phone size={18} /> Call Now
            </button>
          </a>
          <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="flex-1">
            <button className="w-full bg-green-500 text-white hover:bg-green-600 rounded-xl px-4 py-3 shadow-md transition duration-300 font-medium text-sm flex items-center justify-center gap-2">
              <MessageCircle size={18} /> WhatsApp
            </button>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
