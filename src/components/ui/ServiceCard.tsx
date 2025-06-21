import React from 'react';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800/70 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
          </span>
          <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;