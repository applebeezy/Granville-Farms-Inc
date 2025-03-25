
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock, Leaf } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      value: '1988',
      label: 'Founded',
      icon: <Clock size={24} className="text-gf-green" />,
    },
    {
      value: '35+',
      label: 'Years Experience',
      icon: <Award size={24} className="text-gf-green" />,
    },
    {
      value: '200+',
      label: 'Clients Served',
      icon: <Users size={24} className="text-gf-green" />,
    },
    {
      value: '50M+',
      label: 'Gallons Managed Annually',
      icon: <Leaf size={24} className="text-gf-green" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="About Granville Farms"
          description="North Carolina's trusted biosolids management partner since 1988."
          imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&h=800&q=80"
          size="medium"
          overlayOpacity="medium"
        />
      </section>
      
      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 animate-fade-in-left">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Family Legacy of Excellence</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 1988 by brothers Andy and Jason Smith, Granville Farms Inc. has grown from a small 
                  family operation to North Carolina's leading biosolids management company. For over three decades, 
                  we have provided innovative and environmentally responsible solutions for municipalities, wastewater 
                  treatment facilities, and industrial clients throughout the state.
                </p>
                <p className="text-gray-700 mb-6">
                  Based in Oxford, NC, our company combines deep local knowledge with industry-leading expertise to 
                  deliver exceptional service to our clients. Our commitment to environmental stewardship, regulatory 
                  compliance, and sustainable practices has established us as a trusted partner in the biosolids 
                  management industry.
                </p>
                <div className="flex space-x-4">
                  <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
                    <Link to="/team" className="flex items-center gap-2">
                      Meet Our Team
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gf-green text-gf-green hover:bg-gf-green hover:text-white">
                    <Link to="/projects" className="flex items-center gap-2">
                      View Projects
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 animate-fade-in-right">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80" 
                    alt="Granville Farms Field" 
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg">
                    <img 
                      src="/lovable-uploads/a612384a-0217-4737-be02-da6373513052.png" 
                      alt="Granville Farms Logo" 
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">By The Numbers</span>
              <h2 className="text-3xl md:text-4xl font-bold">Our Impact Over the Years</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-gf-green/10 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gf-dark mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission & Values</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden animate-scale-in">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-6">
                    At Granville Farms, our mission is to provide innovative and environmentally responsible biosolids 
                    management solutions that promote sustainability and resource recovery. We are committed to 
                    transforming waste into valuable resources while maintaining the highest standards of regulatory 
                    compliance and environmental stewardship.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-700">
                    We envision a future where biosolids are universally recognized as a valuable resource rather 
                    than a waste product. Granville Farms aims to lead this transformation through innovation, 
                    education, and exemplary service to our clients and communities.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gf-green p-8 md:p-10 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-xl mt-0.5">1.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Environmental Stewardship</h4>
                        <p className="text-white/90">We prioritize sustainable practices that protect and enhance our natural environment.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-xl mt-0.5">2.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Regulatory Compliance</h4>
                        <p className="text-white/90">We maintain the highest standards of compliance with all applicable regulations.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-xl mt-0.5">3.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Innovation</h4>
                        <p className="text-white/90">We continuously seek new and better ways to serve our clients and manage biosolids.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-xl mt-0.5">4.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Integrity</h4>
                        <p className="text-white/90">We conduct our business with honesty, transparency, and ethical practices.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-xl mt-0.5">5.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Community Focus</h4>
                        <p className="text-white/90">We value the communities we serve and strive to be good neighbors and partners.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location */}
      <section className="py-16 md:py-24 bg-gf-dark text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 animate-fade-in-left">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Location</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Proudly Serving North Carolina</h2>
                <p className="text-gray-300 mb-4">
                  Located in Oxford, North Carolina, Granville Farms is strategically positioned to serve 
                  clients throughout the state. Our central location allows us to provide timely and 
                  efficient service to municipalities, wastewater treatment facilities, and industrial 
                  clients across North Carolina.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 mb-6">
                  <h3 className="font-semibold mb-2">Our Address:</h3>
                  <p className="text-white">
                    1111 Martin Luther King Jr Ave<br />
                    Oxford, NC 27565
                  </p>
                </div>
                <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
                  <a 
                    href="https://maps.google.com/?q=1111+Martin+Luther+King+Jr+Ave,+Oxford,+NC+27565" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get Directions
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/2 animate-fade-in-right h-72 md:h-96 w-full rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.033281518133!2d-78.5931!3d36.3103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acd71ae7daaaab%3A0x7d49d44a4ad766c9!2s1111%20Martin%20Luther%20King%20Jr%20Ave%2C%20Oxford%2C%20NC%2027565!5e0!3m2!1sen!2sus!4v1716240885977!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Granville Farms location map"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-gf-green/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Learn more about our team and past projects, or contact us today to discuss how 
              Granville Farms can provide tailored biosolids management solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
                <Link to="/team" className="flex items-center gap-2">
                  Meet Our Team
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-gf-green text-gf-green hover:bg-gf-green hover:text-white">
                <Link to="/projects" className="flex items-center gap-2">
                  View Our Projects
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
