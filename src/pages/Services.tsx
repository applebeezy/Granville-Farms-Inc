
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { 
  Truck, 
  Droplet, 
  Waves, 
  FileCheck, 
  Database, 
  Shovel, 
  Droplets,
  ArrowDown
} from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const hash = location.hash;
  
  const transportationRef = useRef<HTMLDivElement>(null);
  const dewateringRef = useRef<HTMLDivElement>(null);
  const lagoonRef = useRef<HTMLDivElement>(null);
  const permitRef = useRef<HTMLDivElement>(null);
  const tankRef = useRef<HTMLDivElement>(null);
  const applicationRef = useRef<HTMLDivElement>(null);
  const drainageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation after initial scroll to top
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [hash]);

  const services = [
    {
      id: 'transportation',
      title: 'Biosolids Transportation',
      description: 'Safe and efficient transportation of biosolids material with our specialized fleet of vehicles.',
      icon: <Truck size={24} />,
      ref: transportationRef,
    },
    {
      id: 'dewatering',
      title: 'Biosolids Dewatering Solutions',
      description: 'Advanced dewatering technologies to efficiently separate water from solids.',
      icon: <Droplet size={24} />,
      ref: dewateringRef,
    },
    {
      id: 'lagoon',
      title: 'Lagoon Cleaning Services',
      description: 'Complete cleaning and maintenance services for wastewater lagoons and holding ponds.',
      icon: <Waves size={24} />,
      ref: lagoonRef,
    },
    {
      id: 'permit',
      title: 'Class A & B Permit Management',
      description: 'Expert management and acquisition of Class A and Class B permits to ensure regulatory compliance.',
      icon: <FileCheck size={24} />,
      ref: permitRef,
    },
    {
      id: 'tank',
      title: 'Digester & Tank Cleaning',
      description: 'Specialized cleaning services for digesters, tanks, and other wastewater treatment infrastructure.',
      icon: <Database size={24} />,
      ref: tankRef,
    },
    {
      id: 'application',
      title: 'Land Application',
      description: 'Environmentally responsible application of biosolids to enhance soil fertility and promote sustainable agriculture.',
      icon: <Shovel size={24} />,
      ref: applicationRef,
    },
    {
      id: 'drainage',
      title: 'Farm Drainage',
      description: 'Comprehensive farm drainage solutions to improve soil health and agricultural productivity.',
      icon: <Droplets size={24} />,
      ref: drainageRef,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="Our Biosolids Management Services"
          description="Comprehensive solutions for biosolids management, transportation, treatment, and land application."
          imageUrl="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=2000&h=800&q=80"
          size="medium"
          overlayOpacity="medium"
        />
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Biosolids Management Solutions</h2>
            <p className="text-lg text-gray-600">
              Granville Farms provides comprehensive biosolids management services to municipalities, 
              wastewater treatment facilities, and industrial clients across North Carolina.
            </p>
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="flex items-center gap-2 text-gf-green hover:text-gf-green/80 font-medium transition-colors"
              >
                Explore Our Services 
                <ArrowDown size={16} className="animate-bounce" />
              </button>
            </div>
          </div>
          
          {/* Service Grid */}
          <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={`#${service.id}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              />
            ))}
          </div>
          
          {/* Detailed Service Descriptions */}
          <div className="space-y-20">
            <div id="transportation" ref={transportationRef} className="scroll-mt-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="md:w-1/2 animate-fade-in-left">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Transportation</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Biosolids Transportation</h2>
                  <p className="text-gray-600 mb-4">
                    Our specialized fleet of vehicles is designed for the safe and efficient transportation 
                    of biosolids materials. We ensure timely delivery while maintaining strict compliance 
                    with all transportation regulations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Liquid and dewatered biosolids transport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>GPS-tracked vehicles for real-time monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>DOT-compliant drivers and equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Spill prevention and emergency response protocols</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80" 
                    alt="Biosolids Transportation" 
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <div id="dewatering" ref={dewateringRef} className="scroll-mt-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                <div className="md:w-1/2 animate-fade-in-left">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Dewatering</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Biosolids Dewatering Solutions</h2>
                  <p className="text-gray-600 mb-4">
                    Our dewatering services utilize advanced technologies to efficiently separate water 
                    from solids, reducing volume and creating a more manageable product. We offer both 
                    mobile and fixed dewatering solutions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Centrifuge dewatering systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Belt filter press operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Mobile dewatering units</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Polymer optimization and management</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80" 
                    alt="Biosolids Dewatering Solutions" 
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <div id="lagoon" ref={lagoonRef} className="scroll-mt-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="md:w-1/2 animate-fade-in-left">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Lagoon Cleaning</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Lagoon Cleaning Services</h2>
                  <p className="text-gray-600 mb-4">
                    We provide comprehensive cleaning and maintenance services for wastewater lagoons 
                    and holding ponds. Our specialized equipment efficiently removes accumulated solids 
                    while minimizing disruption to operations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Complete lagoon cleanout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Partial cleaning while maintaining operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Sludge removal and processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Environmental compliance management</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80" 
                    alt="Lagoon Cleaning Services" 
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <div id="permit" ref={permitRef} className="scroll-mt-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                <div className="md:w-1/2 animate-fade-in-left">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Permit Management</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Class A & B Permit Management</h2>
                  <p className="text-gray-600 mb-4">
                    Our expert team handles all aspects of biosolids permit management and acquisition. 
                    We ensure full compliance with local, state, and federal regulations for both 
                    Class A and Class B biosolids.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Permit application and renewal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Regulatory compliance monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Reporting and documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Site assessment and land application planning</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80" 
                    alt="Class A & B Permit Management" 
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <div id="tank" ref={tankRef} className="scroll-mt-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="md:w-1/2 animate-fade-in-left">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Tank Cleaning</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Digester & Tank Cleaning Services</h2>
                  <p className="text-gray-600 mb-4">
                    Our specialized tank cleaning services address the unique challenges of digesters 
                    and wastewater treatment tanks. We utilize advanced techniques to remove accumulated 
                    solids while protecting tank integrity.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Anaerobic and aerobic digester cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Confined space entry protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Safe solids removal and processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>System inspection and preventative maintenance</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80" 
                    alt="Digester & Tank Cleaning Services" 
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <div id="application" ref={applicationRef} className="scroll-mt-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                <div className="md:w-1/2 animate-fade-in-left">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Land Application</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Land Application</h2>
                  <p className="text-gray-600 mb-4">
                    Our land application services provide environmentally responsible solutions for 
                    biosolids management. We utilize proven methods to enhance soil fertility while 
                    ensuring compliance with all regulations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Class A and Class B biosolids application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Liquid and dewatered material handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Soil sampling and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Record keeping and compliance reporting</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80" 
                    alt="Land Application" 
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <div id="drainage" ref={drainageRef} className="scroll-mt-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="md:w-1/2 animate-fade-in-left">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Farm Drainage</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Farm Drainage Solutions</h2>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive farm drainage solutions help improve soil health and agricultural 
                    productivity. We design and implement effective drainage systems tailored to the 
                    specific needs of each property.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Subsurface drainage system design and installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Surface drainage improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Wetland and conservation practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gf-green mt-1">•</span>
                      <span>Erosion control and soil conservation</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80" 
                    alt="Farm Drainage Solutions" 
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gf-green/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact our team today to discuss your biosolids management needs and discover how 
              Granville Farms can provide tailored solutions for your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+19196908000" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gf-green text-white rounded-md hover:bg-gf-green/90 transition-colors"
              >
                <Phone size={18} />
                (919) 690-8000
              </a>
              <a 
                href="mailto:info@granvillefarmsinc.com" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gf-green text-gf-green rounded-md hover:bg-gf-green/10 transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
