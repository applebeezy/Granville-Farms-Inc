import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Droplet, Leaf, FileCheck, Shovel, Waves, Thermometer, Phone, Mail } from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const transportationRef = useRef<HTMLElement>(null);
  const dewateringRef = useRef<HTMLElement>(null);
  const applicationRef = useRef<HTMLElement>(null);
  const permitRef = useRef<HTMLElement>(null);
  const lagoonRef = useRef<HTMLElement>(null);
  const tankRef = useRef<HTMLElement>(null);
  const drainageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (location.hash) {
      const hash = location.hash.substring(1);
      const refs = {
        transportation: transportationRef,
        dewatering: dewateringRef,
        application: applicationRef,
        permit: permitRef,
        lagoon: lagoonRef,
        tank: tankRef,
        drainage: drainageRef
      };
      
      const targetRef = refs[hash];
      
      if (targetRef && targetRef.current) {
        setTimeout(() => {
          window.scrollTo({
            top: targetRef.current!.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: 'transportation',
      title: 'Biosolids Transportation',
      description: 'Safe and efficient transportation of biosolids material with our specialized fleet of vehicles.',
      icon: <Truck size={24} />,
      link: '#transportation'
    },
    {
      id: 'dewatering',
      title: 'Dewatering Solutions',
      description: 'Advanced dewatering technologies to efficiently separate water from solids.',
      icon: <Droplet size={24} />,
      link: '#dewatering'
    },
    {
      id: 'application',
      title: 'Land Application',
      description: 'Environmentally responsible application of biosolids to enhance soil fertility.',
      icon: <Leaf size={24} />,
      link: '#application'
    },
    {
      id: 'permit',
      title: 'Permit Management',
      description: 'Expert management of Class A and Class B permits to ensure regulatory compliance.',
      icon: <FileCheck size={24} />,
      link: '#permit'
    },
    {
      id: 'lagoon',
      title: 'Lagoon Cleaning',
      description: 'Thorough cleaning and maintenance of wastewater treatment lagoons.',
      icon: <Waves size={24} />,
      link: '#lagoon'
    },
    {
      id: 'tank',
      title: 'Tank Cleaning',
      description: 'Specialized cleaning services for digesters and storage tanks.',
      icon: <Thermometer size={24} />,
      link: '#tank'
    },
    {
      id: 'drainage',
      title: 'Farm Drainage',
      description: 'Effective drainage solutions to improve agricultural land productivity.',
      icon: <Shovel size={24} />,
      link: '#drainage'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-16">
        <Hero 
          title="Comprehensive Biosolids Management Services"
          description="From transportation and dewatering to land application and regulatory compliance, we provide end-to-end solutions for biosolids management."
          buttonText="Contact Us"
          buttonLink="/team"
          imageUrl="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?auto=format&fit=crop&w=2000&h=1000&q=80"
          overlayOpacity="strong"
        />
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Biosolids Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of biosolids management services to meet the needs of municipalities, 
              wastewater treatment facilities, and industrial clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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
        </div>
      </section>
      
      <section ref={transportationRef} id="transportation" className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Transportation</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Biosolids Transportation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our specialized fleet of vehicles is designed for the safe and efficient transportation of 
                biosolids material. We maintain strict compliance with all regulatory requirements while 
                ensuring timely delivery to designated sites.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Modern fleet of specialized transport vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">GPS tracking for real-time monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Spill prevention protocols and emergency response capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Experienced, licensed drivers with specialized training</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Biosolids Transportation" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={dewateringRef} id="dewatering" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Dewatering</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dewatering Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our advanced dewatering technologies efficiently separate water from solids, reducing volume 
                and transportation costs while preparing biosolids for beneficial reuse. We offer both 
                mobile and fixed dewatering solutions to meet your specific needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Belt filter presses and centrifuge dewatering options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Mobile dewatering units for on-site processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Polymer optimization for maximum solids capture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Operator training and ongoing technical support</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Dewatering Solutions" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={applicationRef} id="application" className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Land Application</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Land Application</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our land application services provide environmentally responsible solutions for biosolids management. 
                We utilize proven methods to enhance soil fertility while ensuring compliance with all regulations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Class A and Class B biosolids application</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Liquid and dewatered material handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Soil sampling and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Record keeping and compliance reporting</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80" 
                alt="Land Application" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={permitRef} id="permit" className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Permit Management</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Permit Management</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our expert team handles all aspects of biosolids permit management and acquisition. We ensure full compliance 
                with local, state, and federal regulations for both Class A and Class B biosolids.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Permit application and renewal</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Regulatory compliance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Reporting and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Site assessment and land application planning</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80" 
                alt="Permit Management" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={lagoonRef} id="lagoon" className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Lagoon Cleaning</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lagoon Cleaning</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide comprehensive cleaning and maintenance services for wastewater lagoons and holding ponds. Our specialized equipment efficiently removes accumulated solids while minimizing disruption to operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Complete lagoon cleanout</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Partial cleaning while maintaining operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Sludge removal and processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Environmental compliance management</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80" 
                alt="Lagoon Cleaning" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={tankRef} id="tank" className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Tank Cleaning</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tank Cleaning</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our specialized tank cleaning services address the unique challenges of digesters and wastewater treatment tanks. We utilize advanced techniques to remove accumulated solids while protecting tank integrity.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Anaerobic and aerobic digester cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Confined space entry protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Safe solids removal and processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">System inspection and preventative maintenance</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80" 
                alt="Tank Cleaning" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={drainageRef} id="drainage" className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Farm Drainage</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Farm Drainage</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our comprehensive farm drainage solutions help improve soil health and agricultural productivity. We design and implement effective drainage systems tailored to the specific needs of each property.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Subsurface drainage system design and installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Surface drainage improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Wetland and conservation practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gf-green/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-gf-green"></div>
                  </div>
                  <span className="text-gray-700">Erosion control and soil conservation</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80" 
                alt="Farm Drainage" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gf-dark text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Biosolids Management Needs?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Contact our team today to learn how Granville Farms can provide tailored solutions for your biosolids 
              and wastewater challenges. We're here to help you implement sustainable and compliant management practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone size={20} className="text-gf-green" />
                <a href="tel:+19196908000" className="text-white hover:text-gf-green transition-colors">
                  (919) 690-8000
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail size={20} className="text-gf-green" />
                <a href="mailto:info@granvillefarmsinc.com" className="text-white hover:text-gf-green transition-colors">
                  info@granvillefarmsinc.com
                </a>
              </div>
            </div>
            <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
              <Link to="/team" className="flex items-center gap-2">
                Contact Our Team
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
