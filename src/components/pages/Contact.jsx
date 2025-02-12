import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({
        type: 'error',
        message: 'Name is required'
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      setStatus({
        type: 'error',
        message: 'Email is required'
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email'
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Message is required'
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setStatus({
      type: '',
      message: ''
    });

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_zyhztvl', // Replace with your EmailJS service ID
        'template_pd4ufmj', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'achamanpathak6@gmail.com', // Your email address
          reply_to: formData.email
        },
        'Dx241krJsRzSY9Cht' // Replace with your EmailJS public key
      );
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 pt-20">
      <div className="px-4 py-8 mx-auto max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">Contact Me</h1>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Get in Touch</h2>
              <p className="text-base md:text-lg text-gray-700">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              <div className="space-y-3 md:space-y-4">
                <a href="mailto:achamanpathak6@gmail.com" className="flex items-center space-x-3 text-gray-700 hover:text-purple-500 transition-colors">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  <span>achamanpathak6@gmail.com</span>
                </a>
                <a href="https://github.com/Achamanp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-purple-500 transition-colors">
                  <Github className="w-5 h-5 md:w-6 md:h-6" />
                  <span>https://github.com/Achamanp</span>
                </a>
                <a href="https://www.linkedin.com/in/achaman-pathak-912561251/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-purple-500 transition-colors">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  <span>https://www.linkedin.com/in/achaman-pathak-912561251/</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message here..."
                  disabled={isSubmitting}
                />
              </div>
              
              {status.message && (
                <div className={`p-3 rounded-lg ${
                  status.type === 'error' 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;