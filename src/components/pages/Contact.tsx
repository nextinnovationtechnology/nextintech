import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import AdvancedBackground from '../ui/AdvancedBackground';

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleCallNow = () => {
    window.open('tel:+9779769255781', '_self');
  };

  const handleEmailNow = () => {
    window.open('mailto:nextinnovationtechno@gmail.com', '_self');
  };

  const handleTelegramBot = () => {
    window.open('https://t.me/nextinnovationtechnology_Bot', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/9779769255781', '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['JH3M+JMR, Khairahani 44200', 'Chitwan, Nepal'],
      color: 'text-blue-400',
      action: () => window.open('https://maps.google.com/?q=Khairahani,Chitwan,Nepal', '_blank')
    },
    {
      icon: Globe,
      title: 'Branch Office',
      details: ['Australia'],
      color: 'text-teal-400',
      action: () => setCurrentPage('about')
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+977 9769255781'],
      color: 'text-green-400',
      action: handleCallNow
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['nextinnovationtechno@gmail.com'],
      color: 'text-orange-400',
      action: handleEmailNow
    },
    {
      icon: MessageCircle,
      title: 'Telegram Bot',
      details: ['@nextinnovationtechnology_Bot'],
      color: 'text-purple-400',
      action: handleTelegramBot
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Nepal Time (NPT)'],
      color: 'text-pink-400',
      action: () => {}
    }
  ];

  const services = [
    'Web Development',
    'Software Development',
    'Cloud Hosting',
    'SEO Services',
    'Domain Registration',
    'AI Integration',
    'UI/UX Design',
    'Content Development'
  ];

  return (
    <div className="relative">
      <AdvancedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Ready to transform your digital presence? Let's discuss your project and explore how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCallNow}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
            <button 
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                onClick={info.action}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group"
              >
                <div className={`flex items-center mb-4`}>
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg mr-4 group-hover:bg-gray-600 transition-colors duration-300">
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">{info.title}</h3>
                </div>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Send Us A <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Message</span>
            </h2>
            <p className="text-xl text-gray-400">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <span className="text-red-300">Failed to send message. Please try again or contact us directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or requirements..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:transform-none disabled:shadow-none"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform duration-300`} />
                  </span>
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  We'll respond to your message within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on complexity, but most web development projects take 2-8 weeks, while custom software projects may take 2-6 months.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally.'
              },
              {
                question: 'Can you work with international clients?',
                answer: 'Absolutely! With our presence in Nepal and Australia, we regularly work with clients globally and can accommodate different time zones.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We work with modern technologies including React, Node.js, Python, cloud platforms, and AI/ML tools, always choosing the best fit for your project.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-teal-900/20 border border-blue-500/30 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your preferred way to connect with us
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button 
                onClick={handleCallNow}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call</span>
              </button>
              <button 
                onClick={handleEmailNow}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </button>
              <button 
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
              <button 
                onClick={handleTelegramBot}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Telegram</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;