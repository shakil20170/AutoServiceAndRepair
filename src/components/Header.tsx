import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-red-500 mr-2" />
            <span className="text-2xl font-bold text-blue-900">Yousuf Mobile Mechanic</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+1234567890" 
              className="flex items-center text-blue-900 hover:text-red-500 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">+61 480-155-748</span>
            </a>
          </div>
          
          <button 
            className="md:hidden text-blue-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 transform translate-y-0 bg-white shadow-lg' 
            : 'opacity-0 transform -translate-y-full'
        }`}
      >
        {isOpen && (
          <div className="py-4 px-4 space-y-4">
            <Link 
              href="#home" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg"
            >
              Home
            </Link>
            <Link 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg"
            >
              Services
            </Link>
            <Link 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg"
            >
              Contact
            </Link>
            <a 
              href="tel:+1234567890" 
              className="flex items-center text-blue-900 hover:text-red-500 transition-colors py-2"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">+61 480-155-748</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;