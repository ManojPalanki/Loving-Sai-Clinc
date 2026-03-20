import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/70 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="Loving-Sai-Clinc-Logo" 
            className="h-[46px] w-auto object-contain" 
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-xl text-text tracking-tight leading-tight">Loving Sai Clinic</span>
            <span className="text-sm font-semibold text-primary leading-tight">Dr. T. Sameer Nandan</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`font-medium transition-colors ${isActive(link.path) ? 'text-primary font-bold' : 'text-text hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/919573609720?text=Hello%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noreferrer" className="hidden md:flex">
            <Button variant="primary" className="gap-2">
              <Phone size={18} />
              Book Appointment
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-premium p-4 flex flex-col gap-4 md:hidden border-t border-surface-container">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`font-medium p-3 rounded-xl transition-colors ${isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-text hover:bg-surface'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/919573609720?text=Hello%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noreferrer" className="w-full block">
            <Button variant="primary" className="w-full gap-2 justify-center">
              <Phone size={18} />
              Book Appointment
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
