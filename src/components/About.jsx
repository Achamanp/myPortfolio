import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/bannerImg2.jpg";

const About = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [data] = useState({
    image: bannerImage,
    title: "Java Full Stack Developer",
    desc1: `I am a skilled Full-Stack Developer with expertise in Java, Advanced Java, Hibernate, Spring Boot, React.js, and MySQL. I specialize in building scalable backend systems using Spring Boot and Hibernate, designing RESTful APIs, and managing databases with MySQL. On the frontend, I use React.js to create dynamic and responsive interfaces. My ability to integrate frontend and backend technologies allows me to develop efficient web solutions. I am committed to writing optimized, maintainable code and continuously improving my skills to build high-performance applications`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
    // Uncomment below if you want to navigate instead of expanding
    // navigate(data.actionButton.link);
  };

  return (
    <div className="main-container bg-gray-100 border py-16">
      <h1 className="text-center pb-16 text-5xl underline font-bold">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        {/* image container */}
        <div className="w-full flex justify-center">
          <img
            className="w-fit rounded-full my-2 shadow-lg"
            src={data.image}
            alt="durgesh kumar tiwari"
          />
        </div>

        {/* text container */}
        <div className="w-full flex justify-center">
          <div className="space-y-5 w-2/3">
            <h1 className="text-5xl font-semibold">{data.title}</h1>
            <p className={`transition-all duration-300 ${isExpanded ? "h-auto" : "h-24 overflow-hidden"}`}>
              {data.desc1}
            </p>
            <button 
              className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
              onClick={handleReadMore}
            >
              {isExpanded ? "Show Less" : data.actionButton.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;