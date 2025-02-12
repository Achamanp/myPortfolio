import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", proficiency: 60 },
        { name: "JavaScript", proficiency: 90 },
        { name: "HTML5", proficiency: 95 },
        { name: "CSS3", proficiency: 85 },
        { name: "Tailwind CSS", proficiency: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", proficiency: 90 },
        { name: "Spring Boot", proficiency: 85 },
        { name: "Hibernate", proficiency: 80 },
        { name: "RESTful APIs", proficiency: 85 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", proficiency: 85 },
        { name: "MongoDB", proficiency: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", proficiency: 90 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 pt-20">
      <div className="px-4 py-8 mx-auto max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 md:p-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Skills</h1>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/50 rounded-lg p-4 md:p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{category.title}</h2>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-lg font-semibold inline-block text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold inline-block text-gray-600">
                            {skill.proficiency}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div
                          style={{ width: `${skill.proficiency}%` }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded transition-all duration-500"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;