import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Spring Boot and React. Features include user authentication, product management, shopping cart, and secure payment integration.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
      githubLink: "https://github.com/Achamanp/EcommercePractice.git"
    },
    {
      title: "Auditorium Master",
      description: " A robust auditorium management system designed to streamline the booking, scheduling, and maintenance of auditoriums. The application allows users to reserve auditoriums, manage event schedules, track availability in real-time, and facilitate team collaboration. Equipped with secure authentication via JWT and OAuth, it ensures data integrity and access control. Built using Spring Boot for the backend, React JS for the frontend, and MySQL for data storage, it provides a seamless and efficient user experience.",
      technologies: ["Java", "Hibernate", "React JS", "MySQL","Bootstrap CSS , TailwindCSS","Spring Boot", "Jwt", "OAuth"],
      githubLink: "https://github.com/Achamanp/AudiMgmt.git"
    },
    {
      title: "Online Chat Application",
      description: " A real-time messaging platform that enables seamless one-on-one and group conversations. The application features instant messaging, user authentication, typing indicators, message history, and online status updates. Built using Spring Boot for the backend, React for the frontend, MongoDB for data storage, and WebSockets for real-time communication, this application ensures a smooth and responsive chat experience.",
      technologies: ["Spring Boot", "React", "MongoDB", "Web Socket"],
      liveLink: "https://blog-platform-demo.com",
      githubLink: "https://github.com/username/blog-platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-purple-900 mb-4">
                  {project.title}
                </h2>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 flex gap-4">
              
                <button 
                  className="flex items-center gap-2 border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md transition-colors"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github size={16} />
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;