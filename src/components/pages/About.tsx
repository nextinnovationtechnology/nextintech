import React from 'react';
import { Users, Target, Globe, Award, MapPin, Calendar, ArrowRight } from 'lucide-react';
import AdvancedBackground from '../ui/AdvancedBackground';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const milestones = [
    { year: '2022', event: 'Company Founded', description: 'Next Innovation Technology established by Mr. Bibek Kandel' },
    { year: '2022', event: 'First Projects', description: 'Completed initial web development and software projects' },
    { year: '2023', event: 'Global Expansion', description: 'Opened branch office in Australia under Mr. Prakash Kandel' },
    { year: '2023', event: 'Recognition', description: 'Mr. Bibek Kandel awarded "Best Coder of 2023"' },
    { year: '2024', event: '50+ Projects', description: 'Successfully delivered over 50 national and international projects' }
  ];

  const team = [
    {
      name: 'Mr. Bibek Kandel',
      role: 'CEO & Founder',
      description: 'Cybersecurity-trained professional from Australian Data and Cyber Institute',
      location: 'Nepal'
    },
    {
      name: 'Mr. Prakash Kandel',
      role: 'President, Australia Branch',
      description: 'Leading international operations and global partnerships',
      location: 'Australia'
    }
  ];

  return (
    <div className="relative">
      <AdvancedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">NIT</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Since 2022, Next Innovation Technology has been at the forefront of digital transformation, 
            empowering businesses with cutting-edge technology solutions across Nepal and Australia.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                To transform ideas into impactful digital experiences by providing technically sound, 
                design-forward, and business-driven solutions. We focus on delivering value, efficiency, 
                and innovation at every step while building long-term client partnerships.
              </p>
              <button 
                onClick={() => setCurrentPage('services')}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-teal-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                To build NIT into a globally recognized hub for innovation, security, and sustainable 
                digital success. We aim to lead the digital transformation movement while contributing 
                to local IT growth and international collaboration.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                <span>Join Our Journey</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Leadership <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400">Meet the visionaries behind NIT</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{member.description}</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Connect →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-teal-400"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 ml-12 md:ml-0 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-blue-400 font-semibold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">{milestone.event}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-4 border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: '50+ Projects', description: 'Successfully delivered national and international projects', action: () => setCurrentPage('services') },
              { icon: Globe, title: 'Global Presence', description: 'Operations in Nepal and Australia with growing international reach', action: () => setCurrentPage('contact') },
              { icon: Users, title: 'Expert Team', description: 'Skilled professionals in software engineering, AI, and cybersecurity', action: () => setCurrentPage('contact') },
              { icon: Target, title: 'Innovation Focus', description: 'Developed in-house tools and automation systems', action: () => setCurrentPage('services') },
              { icon: MapPin, title: 'Local Impact', description: 'Contributing to IT growth by training tech professionals in Nepal', action: () => setCurrentPage('contact') },
              { icon: Calendar, title: 'Rapid Growth', description: 'Consistent expansion and client satisfaction since 2022', action: () => setCurrentPage('contact') }
            ].map((achievement, index) => (
              <div 
                key={index} 
                onClick={achievement.action}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <achievement.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{achievement.title}</h3>
                <p className="text-gray-400 mb-4">{achievement.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start a Project
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;