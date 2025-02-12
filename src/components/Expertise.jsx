import React from 'react';
import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  const technologies = [
    "Core Java", "J2EE", "Hibernate(ORM Tool)", "Spring Framework", 
    "Spring Boot Framework", "Spring Security", "Javascript", "ReactJS",
    "Tailwind CSS", "MySQL Database", "MongoDB", "Data Structure",
    "Bootstrap CSS", "Rest APIS", "Git & Github"
  ];

  return (
    <div className="mt-2">
      <h1 className="mb-8 md:mb-16 text-3xl md:text-5xl font-bold underline text-center">
        My Expertise
      </h1>

      {/* Main container with conditional background */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="relative"
      >
        {/* Overlay for small screens */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 md:hidden"></div>

        {/* Content container */}
        <div className="relative box-container items-center flex flex-col md:flex-row py-8 md:py-16">
          {/* Left section - Text */}
          <div className="flex text-white justify-center w-full md:w-1/2 px-4 md:px-0 mb-8 md:mb-0">
            <div className="w-full md:w-2/3 text-center space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">I love these technologies</h1>
              <p className="text-sm md:text-base text-gray-100">
                As a full-stack developer, I specialize in building robust and scalable applications 
                using Java and modern web technologies. With expertise in Spring Boot, React, and 
                various databases, I create efficient, secure, and user-friendly solutions. My strong 
                foundation in data structures and commitment to clean code ensures high-quality 
                deliverables that meet both technical requirements and business objectives.
              </p>
            </div>
          </div>

          {/* Right section - Technologies */}
          <div className="flex justify-center w-full md:w-1/2 px-4 md:px-0">
            <div className="flex justify-center w-full md:w-2/3 h-fit gap-2 md:gap-3 flex-wrap">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-300/90 w-fit px-3 py-2 text-sm md:text-base 
                           rounded-full hover:bg-orange-500 hover:text-white
                           cursor-pointer transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Expertise;