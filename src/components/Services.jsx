import { useState } from "react";

const ServiceCard = ({ icon, title, description, isSelected, onClick }) => {
  return (
    <div 
      className={`cursor-pointer p-5 text-center shadow-lg rounded-xl space-y-4 flex-1 transition-colors duration-300 ${
        isSelected ? 'bg-blue-200' : 'bg-slate-100 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <i className={`text-5xl ${icon}`}></i>
      <h2 className="text-4xl">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [services] = useState([
    {
      id: "1",
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Transform your ideas into powerful, custom-built websites that drive results. Specializing in scalable, responsive solutions using modern technologies like React, Next.js, and Node.js. From simple landing pages to complex web applications, we deliver excellence.",
      actionButton: {
        title: "Check",
        link: "/web-development",
      },
    },
    {
      id: "2",
      icon: "fa-solid fa-paintbrush",
      title: "Front End Development",
      description: "Create engaging user experiences with cutting-edge front-end development. Expert in React, TypeScript, and modern CSS frameworks like Tailwind. Focusing on responsive design, performance optimization, and seamless user interactions that keep your visitors engaged.",
      actionButton: {
        title: "Check",
        link: "/frontend-development",
      },
    },
    {
      id: "3",
      icon: "fa-solid fa-server",
      title: "Backend Development",
      description: "Build robust server-side solutions that power your applications. Expertise in Node.js, Express, and database management systems. Specializing in API development, server architecture, and secure authentication systems to ensure your application runs smoothly and securely.",
      actionButton: {
        title: "Check",
        link: "/backend-development",
      },
    },
  ]);

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center underline mb-12">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isSelected={selectedCard === service.id}
              onClick={() => handleCardClick(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;