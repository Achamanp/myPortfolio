import { useState } from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4 flex-1">
      <i className={`text-5xl ${icon}`}></i>
      <h2 className="text-4xl">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg hover:bg-orange-600 transition-colors">
        Check
      </button>
    </div>
  );
};

const Services = () => {
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;