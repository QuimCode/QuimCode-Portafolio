import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300  ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">
            Portfolio Desarrollador
          </a>

          <a href="#" className="text-2xl font-bold text-white">
            Portfolio Grafico
          </a>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div> */}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 py-6">
              <NavLink href="#about" mobile onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink href="#projects" mobile onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
              <NavLink href="#skills" mobile onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
              <NavLink href="#contact" mobile onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

function NavLink({ href, children, mobile, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-gray-300 hover:text-white transition-colors ${
        mobile ? 'text-lg' : 'text-sm font-medium'
      }`}
    >
      {children}
    </a>
  );
}