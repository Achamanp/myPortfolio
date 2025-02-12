import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import bannerImage from "../../assets/bannerImg.jpg"; 



const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 pt-20">
      <div className="px-4 py-8 mx-auto max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 md:p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a passionate Full-Stack Developer specializing in building robust and scalable web applications. With expertise in Java, Spring Boot, and modern frontend technologies, I create efficient solutions that drive business success.
              </p>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Backend Development with Java & Spring Boot</li>
                  <li>Frontend Development with React.js</li>
                  <li>Database Design and Management</li>
                  <li>RESTful API Development</li>
                </ul>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com" className="text-gray-700 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:example@email.com" className="text-gray-700 hover:text-gray-900">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 mx-auto overflow-hidden rounded-full shadow-xl">
                <img 
                  src={bannerImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;