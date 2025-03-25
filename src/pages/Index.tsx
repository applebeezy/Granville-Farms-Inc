
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Droplet, Leaf, FileCheck, Waves, MapPin, Building, Phone, Mail } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'transportation',
      title: 'Biosolids Transportation',
      description: 'Safe and efficient transportation of biosolids material with our specialized fleet of vehicles.',
      icon: <Truck size={24} />,
      link: '/services#transportation'
    },
    {
      id: 'dewatering',
      title: 'Dewatering Solutions',
      description: 'Advanced dewatering technologies to efficiently separate water from solids.',
      icon: <Droplet size={24} />,
      link: '/services#dewatering'
    },
    {
      id: 'application',
      title: 'Land Application',
      description: 'Environmentally responsible application of biosolids to enhance soil fertility.',
      icon: <Leaf size={24} />,
      link: '/services#application'
    },
    {
      id: 'permit',
      title: 'Permit Management',
      description: 'Expert management of Class A and Class B permits to ensure regulatory compliance.',
      icon: <FileCheck size={24} />,
      link: '/services#permit'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="Expert Biosolids Management Since 1988"
          description="Granville Farms Inc. is North Carolina's leading provider of sustainable biosolids management and wastewater treatment solutions."
          buttonText="Explore Our Services"
          buttonLink="/services"
          imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&h=1000&q=80"
          overlayOpacity="medium"
        />
      </section>
      
      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Biosolids Management for a Cleaner Environment</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Granville Farms, our mission is to provide innovative and environmentally responsible biosolids management 
              solutions that promote sustainability and resource recovery. We are committed to transforming waste into 
              valuable resources while maintaining the highest standards of regulatory compliance and environmental stewardship.
            </p>
            <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Biosolids Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of biosolids management services to meet the needs of municipalities, 
              wastewater treatment facilities, and industrial clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                className={`animate-fade-in-up delay-${index * 100}`}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fade-in-up">
            <Button asChild variant="outline" className="border-gf-green text-gf-green hover:bg-gf-green hover:text-white">
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gf-dark text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Experience Since 1988</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              For over three decades, Granville Farms has been a leader in biosolids management across North Carolina.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-fade-in-up delay-100">
              <div className="w-14 h-14 flex items-center justify-center bg-gf-green/20 text-gf-green rounded-lg mb-5">
                <Waves size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Stewardship</h3>
              <p className="text-gray-300">
                We are committed to sustainable practices that protect our environment and conserve natural resources for future generations.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-fade-in-up delay-200">
              <div className="w-14 h-14 flex items-center justify-center bg-gf-green/20 text-gf-green rounded-lg mb-5">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-300">
                Our team ensures all operations meet or exceed local, state, and federal regulations for biosolids management.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-fade-in-up delay-300">
              <div className="w-14 h-14 flex items-center justify-center bg-gf-green/20 text-gf-green rounded-lg mb-5">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-300">
                As a North Carolina-based family business, we understand the unique needs and challenges of our region.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gf-green/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-scale-in">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Discuss Your Biosolids Management Needs?</h2>
                <p className="text-gray-600 mb-6">
                  Contact our team today to learn how Granville Farms can provide tailored solutions for your biosolids and wastewater challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gf-green" />
                    <a href="tel:+19196908000" className="text-gray-700 hover:text-gf-green transition-colors">
                      (919) 690-8000
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-gf-green" />
                    <a href="mailto:info@granvillefarmsinc.com" className="text-gray-700 hover:text-gf-green transition-colors">
                      info@granvillefarmsinc.com
                    </a>
                  </div>
                </div>
                <Button asChild className="mt-6 bg-gf-green hover:bg-gf-green/90 text-white border-none">
                  <Link to="/team" className="flex items-center gap-2">
                    Contact Our Team
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Granville Farms Field" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
