
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="logo">
          <div className="logo-icon">P</div>
          <span className="hidden md:inline text-white">Piyush's Portfolio</span>
          <span className="md:hidden text-white">Piyush</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-white hover:text-cyan-400 transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-white hover:text-cyan-400 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors">Contact</button>
        </div>
        
        <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50">
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <div className="w-6 mb-1"></div>
            <div className="w-6 mb-1"></div>
            <div className="w-6"></div>
          </div>
        </button>
        
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="flex flex-col h-full justify-center items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-white text-2xl">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white text-2xl">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-white text-2xl">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-white text-2xl">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-white text-2xl">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
