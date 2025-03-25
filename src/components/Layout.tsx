
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, hideNav = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col relative bg-portal overflow-hidden">
      {!hideNav && (
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'py-3 bg-black/50 backdrop-blur-md' : 'py-5'
          }`}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link 
              to="/" 
              className="text-xl font-bold neon-text flex items-center gap-2"
            >
              <span className="text-neon-purple">Fifth Wall</span>
              <span className="text-white/80">Productions</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/productions" className={`nav-link ${location.pathname === '/productions' ? 'active' : ''}`}>
                Productions
              </Link>
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                Services
              </Link>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                About the Founder
              </Link>
            </nav>
            
            <button 
              className="md:hidden flex items-center justify-center text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div 
            className={`fixed inset-0 bg-portal z-40 md:hidden pt-20 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-6 items-center text-center">
              <Link 
                to="/productions" 
                className="text-2xl py-2 w-full border-b border-white/10 text-white/80 hover:text-neon-purple transition-colors"
              >
                Productions
              </Link>
              <Link 
                to="/services" 
                className="text-2xl py-2 w-full border-b border-white/10 text-white/80 hover:text-neon-purple transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-2xl py-2 w-full text-white/80 hover:text-neon-purple transition-colors"
              >
                About the Founder
              </Link>
            </div>
          </div>
        </header>
      )}
      
      <main className={`flex-grow ${!hideNav ? 'pt-20' : ''}`}>
        {children}
      </main>
      
      {!hideNav && (
        <footer className="bg-black/30 backdrop-blur-sm py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-white/70 text-sm">
                  &copy; {new Date().getFullYear()} Fifth Wall Productions. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <Link to="/productions" className="text-white/70 hover:text-neon-purple transition-colors">
                  Productions
                </Link>
                <Link to="/services" className="text-white/70 hover:text-neon-purple transition-colors">
                  Services
                </Link>
                <Link to="/about" className="text-white/70 hover:text-neon-purple transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
