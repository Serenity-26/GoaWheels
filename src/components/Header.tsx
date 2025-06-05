import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Car className="h-8 w-8 text-primary-500" />
            <span className="ml-2 font-heading text-xl font-bold text-primary-800">
              GoaWheels
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/about" 
              className="btn-outline py-2 px-4"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="btn-outline py-2 px-4"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="btn-outline py-2 px-4"
            >
              Contact
            </Link>
            <Link 
              href="#book-now" 
              className="btn btn-primary"
            >
              Book Now
            </Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary-500" />
            ) : (
              <Menu className="h-6 w-6 text-primary-500" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden ${
            isMenuOpen 
              ? 'mobile-menu-enter-active' 
              : 'mobile-menu-exit mobile-menu-exit-active'
          }`}
        >
          <div className="py-4 space-y-4">
            <Link 
              href="/about" 
              className="block btn-outline w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block btn-outline w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block btn-outline w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#book-now" 
              className="block btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;