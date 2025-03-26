
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gf-dark text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div>
              <Link to="/" aria-label="Granville Farms Inc.">
                <img 
                  src="/lovable-uploads/f251d7eb-28d6-4c89-9cd6-4f17567f0851.png" 
                  alt="Granville Farms Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 pr-4">
              Your trusted partner in biosolids management and wastewater treatment since 1988.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gf-green" />
                <span className="text-gray-300">1111 Martin Luther King Jr Ave, Oxford, NC 27565</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gf-green" />
                <a href="tel:+19196908000" className="text-gray-300 hover:text-white transition-colors">
                  (919) 690-8000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gf-green" />
                <a href="mailto:granvillefarmsinc@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  granvillefarmsinc@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Past Projects
                </Link>
              </li>
              <li>
                <a href="mailto:granvillefarmsinc@gmail.com" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Emergency Notice */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link to="/services#transportation" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Biosolids Transportation
                </Link>
              </li>
              <li>
                <Link to="/services#dewatering" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Dewatering Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#lagoon" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Lagoon Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#permit" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Permit Management
                </Link>
              </li>
              <li>
                <Link to="/services#tank" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Tank Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#application" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-gf-green" />
                  Land Application
                </Link>
              </li>
            </ul>
            
            <div className="bg-gf-green/10 border border-gf-green/20 rounded-md p-4 text-gray-300">
              <p className="font-medium text-white mb-1">Emergency Services Available 24/7</p>
              <p>Call us anytime for emergency biosolids management services.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Granville Farms Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
