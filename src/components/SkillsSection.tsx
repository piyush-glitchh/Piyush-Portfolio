import { useEffect, useRef } from 'react';
import { Code, Palette, ServerCog, Database, GitBranch, BookOpen } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      skills: ["Java", "JavaScript/TypeScript", "Python"]
    },
    {
      title: "Data Structures & Algorithms",
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      skills: [
        "Arrays and Strings",
        "Linked Lists, Stacks and Queues",
        "Trees and Graphs",
        "Dynamic Programming"
      ]
    },
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      title: "Backend Development",
      icon: <ServerCog className="w-6 h-6 text-cyan-400" />,
      skills: ["Node.js", "Java Spring Boot"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      icon: <GitBranch className="w-6 h-6 text-cyan-400" />,
      skills: ["Git/GitHub", "Docker"]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            if (entry.target.classList.contains('progress-parent')) {
              const progressBars = entry.target.querySelectorAll('.progress-fill');
              progressBars.forEach((bar: Element) => {
                if (bar instanceof HTMLElement) {
                  const width = bar.dataset.width || "0";
                  bar.style.width = width;
                }
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal, .progress-parent');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.reveal, .progress-parent');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">My Skills</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto reveal"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card reveal">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gray-800 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-gray-300 p-2 rounded-md hover:bg-gray-800 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
