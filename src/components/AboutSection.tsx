import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">About Me</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto reveal"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden reveal relative group">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                <div className="robot-animation absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-40 h-40 text-cyan-400">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="4" className="animate-pulse"/>
                    <path d="M60,80 L140,80 L140,140 L60,140 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                    <circle cx="80" cy="100" r="10" fill="currentColor" className="animate-bounce"/>
                    <circle cx="120" cy="100" r="10" fill="currentColor" className="animate-bounce"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 reveal">Piyush Priyabrata Mishra</h3>
            <p className="text-gray-300 mb-6 reveal">
            I'm a passionate software developer with a focus on Java programming and data structures & algorithms. With a solid foundation in computer science principles, I enjoy solving complex problems and building efficient, scalable applications.
            </p>
            <p className="text-gray-300 mb-6 reveal">
            My journey in software development started during my undergraduate studies, where I developed a keen interest in algorithmic thinking and software architecture. Since then, I've been continuously expanding my knowledge and skills through personal projects and professional experiences.
            </p>
            <p className="text-gray-300 reveal">
            When I'm not coding, you can see me exploring new technologies, playing the piano, cycling to discover new places, and teaching others what I'm good at.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
