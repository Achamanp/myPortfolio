import bannerImage from "../assets/bannerImg.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h/2 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 pt-20">
      <div className="px-4 py-8 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4 text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
            <h1 className="text-4xl md:text-5xl font-bold">Achaman Pathak</h1>
            <h2 className="text-2xl md:text-3xl">
              I am <span className="font-bold underline" ref={el}></span>
            </h2>
            <p className="text-base md:text-lg">
              I am a skilled Full-Stack Developer with expertise in Java, Advanced Java, 
              Hibernate, Spring Boot, React.js, and MySQL. I specialize in building 
              scalable backend systems, seamless REST APIs, and dynamic front-end 
              applications. Passionate about crafting efficient, high-performance 
              solutions for modern web applications.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/achaman_pathak4"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-purple-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="mailto:achamanpathak6@gmail.com"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-purple-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/achaman-pathak-912561251/"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-purple-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={bannerImage} 
              alt="Profile"
              className="rounded-full shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;