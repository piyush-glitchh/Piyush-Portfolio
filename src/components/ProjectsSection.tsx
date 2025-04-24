import { useEffect, useRef } from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "View All Projects",
    description: "Check out all my projects and contributions on GitHub. I regularly update my repositories with new projects and improvements.",
    gitHubUrl: "https://github.com/piyush-glitchh?tab=repositories",
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
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
    <section ref={sectionRef} id="projects" className="py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">My Projects</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto reveal"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto reveal">
            Check out my projects on GitHub
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal hover:scale-105 transition-transform duration-300"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Github className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                    View on GitHub
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
