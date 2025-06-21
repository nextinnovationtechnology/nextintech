import React from 'react';
import { ArrowRight, Globe, Zap, Users, Award, Play } from 'lucide-react';
import AdvancedBackground from '../ui/AdvancedBackground';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const stats = [
    { icon: Globe, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '40+' },
    { icon: Zap, label: 'Years Experience', value: '2+' },
    { icon: Award, label: 'Global Presence', value: '2 Countries' },
  ];

  const handleGetStarted = () => {
    setCurrentPage('contact');
  };

  const handleViewWork = () => {
    setCurrentPage('services');
  };

  const handleWatchDemo = () => {
    // Open demo video or modal
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <div className="relative">
      <AdvancedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Next Innovation
              </span>
              <br />
              <span className="text-white">Technology</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Empowering businesses through smart, reliable, and scalable technology solutions for the digital era
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>"Rapid, Reliable & Robust IT Solutions"</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button 
              onClick={handleViewWork}
              className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10"
            >
              View Our Work
            </button>
            <button 
              onClick={handleWatchDemo}
              className="group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/10 hover:bg-blue-500/20 rounded-full flex items-center justify-center transition-colors duration-300">
                <Play className="h-5 w-5 ml-1" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer" onClick={() => setCurrentPage('about')}>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Responsive, secure, and user-friendly websites',
                icon: '🌐',
                action: () => setCurrentPage('services')
              },
              {
                title: 'Software Development',
                description: 'Custom business software and ERP systems',
                icon: '💻',
                action: () => setCurrentPage('services')
              },
              {
                title: 'Cloud Hosting',
                description: '99.9% uptime with scalable infrastructure',
                icon: '☁️',
                action: () => setCurrentPage('services')
              },
              {
                title: 'SEO Services',
                description: 'Improve visibility and search rankings',
                icon: '📈',
                action: () => setCurrentPage('services')
              },
              {
                title: 'AI Integration',
                description: 'Smart automation and intelligent systems',
                icon: '🤖',
                action: () => setCurrentPage('services')
              },
              {
                title: 'UI/UX Design',
                description: 'Intuitive and modern interface design',
                icon: '🎨',
                action: () => setCurrentPage('services')
              }
            ].map((service, index) => (
              <div 
                key={index} 
                onClick={service.action}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-5 w-5 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-teal-900/20 border border-blue-500/30 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build the future of your digital presence together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Project Today
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;