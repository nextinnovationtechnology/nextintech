import React from 'react';
import { Globe, Code, Cloud, Search, Bot, Palette, Server, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import AdvancedBackground from '../ui/AdvancedBackground';
import ServiceCard from '../ui/ServiceCard';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Crafting responsive, secure, and user-friendly websites that represent your brand and engage your audience.',
      features: [
        'Responsive Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps',
        'SEO Optimization'
      ]
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Building custom business software, ERP systems, and automation tools with secure backend architecture.',
      features: [
        'Custom Business Software',
        'ERP Systems',
        'Mobile Applications',
        'API Development',
        'Database Design'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Hosting',
      description: 'Reliable hosting solutions with 99.9% uptime and scalable infrastructure for growing businesses.',
      features: [
        'Shared Hosting',
        'VPS Hosting',
        'Cloud Solutions',
        'Reseller Hosting',
        '24/7 Support'
      ]
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Improving online visibility, traffic, and search engine ranking with targeted optimization strategies.',
      features: [
        'Keyword Research',
        'On-page Optimization',
        'Technical SEO',
        'Content Strategy',
        'Analytics & Reporting'
      ]
    },
    {
      icon: Server,
      title: 'Domain Registration',
      description: 'Helping businesses secure their online identity with reliable domain services and management.',
      features: [
        'Domain Registration',
        'Domain Transfer',
        'DNS Management',
        'SSL Certificates',
        'Email Hosting'
      ]
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Developing smart tools such as Telegram Bots and automated systems for real-time user engagement.',
      features: [
        'Chatbot Development',
        'Process Automation',
        'Machine Learning',
        'AI-powered Analytics',
        'Custom AI Solutions'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive, modern interfaces that enhance user interaction and satisfaction.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing'
      ]
    },
    {
      icon: Shield,
      title: 'Content Development',
      description: 'Producing original, research-driven content for websites, blogs, and social media platforms.',
      features: [
        'Content Strategy',
        'Blog Writing',
        'Social Media Content',
        'Technical Documentation',
        'Brand Messaging'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business needs and project requirements'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Strategic planning and resource allocation for optimal results'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with cutting-edge technologies'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous testing to ensure quality and performance'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Seamless deployment and ongoing support'
    }
  ];

  const handleRequestQuote = () => {
    setCurrentPage('contact');
  };

  const handleScheduleConsultation = () => {
    // Open calendar booking or contact form
    window.open('https://calendly.com/nextinnovationtechnology', '_blank');
  };

  const handleViewPortfolio = () => {
    // Open portfolio or case studies
    window.open('#portfolio', '_blank');
  };

  return (
    <div className="relative">
      <AdvancedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Comprehensive digital solutions designed to transform your business and drive growth in the digital era
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRequestQuote}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Request Quote
            </button>
            <button 
              onClick={handleViewPortfolio}
              className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10 flex items-center space-x-2"
            >
              <span>View Portfolio</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} onClick={() => setCurrentPage('contact')}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 opacity-30"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => setCurrentPage('contact')}
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technologies We <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-400">Cutting-edge tools and frameworks for modern solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Python', icon: '🐍' },
              { name: 'AWS', icon: '☁️' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'Docker', icon: '🐳' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Next.js', icon: '▲' },
              { name: 'GraphQL', icon: '🔗' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Redis', icon: '🔴' },
              { name: 'Kubernetes', icon: '⚙️' }
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tech.name}</div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleRequestQuote}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={handleScheduleConsultation}
                className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10 flex items-center justify-center space-x-2"
              >
                <span>Schedule a Consultation</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;