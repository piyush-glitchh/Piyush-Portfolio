
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p 
              className={`text-cyan-400 font-medium mb-2 ${loaded ? 'animate-fadeUp' : 'opacity-0'}`}
            >
              Hi there, I'm
            </p>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 ${loaded ? 'animate-fadeUp delay-100' : 'opacity-0'}`}
            >
              Piyush
            </h1>
            <h2 
              className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6 ${loaded ? 'animate-fadeUp delay-200' : 'opacity-0'}`}
            >
              A passionate full-stack developer.
            </h2>
            <p 
              className={`text-gray-300 max-w-lg mb-8 ${loaded ? 'animate-fadeUp delay-300' : 'opacity-0'}`}
            >
              I craft responsive websites and web applications that provide intuitive user experiences. Let's build something amazing together.
            </p>
            <div className={`${loaded ? 'animate-fadeUp delay-400' : 'opacity-0'}`}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-400 hover:bg-cyan-500 text-navy font-medium py-3 px-8 rounded-md transition-all mr-4 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                Explore My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-medium py-3 px-8 rounded-md transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div 
              className={`w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-2 border-cyan-400 p-1 animate-border-pulse ${loaded ? 'animate-fadeUp delay-200' : 'opacity-0'}`}
            >
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">P</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-cyan-400/20">
                      <circle cx="50" cy="50" r="45" className="animate-pulse" />
                      <path d="M50 5 L95 50 L50 95 L5 50 Z" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
