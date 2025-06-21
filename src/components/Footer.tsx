import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleServiceClick = (service: string) => {
    setCurrentPage('services');
  };

  const handleContactClick = () => {
    setCurrentPage('contact');
  };

  const handleEmailClick = () => {
    window.open('mailto:nextinnovationtechno@gmail.com', '_self');
  };

  const handlePhoneClick = () => {
    window.open('tel:+9779769255781', '_self');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/nextinnovationtechnology_Bot', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Khairahani,Chitwan,Nepal', '_blank');
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Next Innovation Technology</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses through smart, reliable, and scalable technology solutions for the digital era.
            </p>
            <div className="text-blue-400 font-medium text-sm">
              "Rapid, Reliable & Robust IT Solutions"
            </div>
            <button 
              onClick={() => setCurrentPage('about')}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
            >
              <span>Learn More</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li 
                onClick={() => handleServiceClick('web-development')}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Web Development
              </li>
              <li 
                onClick={() => handleServiceClick('software-development')}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Software Development
              </li>
              <li 
                onClick={() => handleServiceClick('cloud-hosting')}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Cloud Hosting
              </li>
              <li 
                onClick={() => handleServiceClick('seo-services')}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                SEO Services
              </li>
              <li 
                onClick={() => handleServiceClick('ai-integration')}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                AI Integration
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div 
                onClick={handleLocationClick}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Khairahani, Chitwan, Nepal</span>
              </div>
              <div 
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+977 9769255781</span>
              </div>
              <div 
                onClick={handleEmailClick}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span>nextinnovationtechno@gmail.com</span>
              </div>
              <div 
                onClick={handleTelegramClick}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <span>@nextinnovationtechnology_Bot</span>
              </div>
            </div>
          </div>

          {/* Founded Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Founded: 2022</p>
              <p>CEO: Mr. Bibek Kandel</p>
              <p>Projects: 50+ Completed</p>
              <p>Global Presence: Nepal & Australia</p>
            </div>
            <button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Project
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Next Innovation Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={handleContactClick}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;