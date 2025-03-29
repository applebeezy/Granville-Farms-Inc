
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Droplet, Trash2, FileText, Cylinder, Sprout } from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const servicesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL (e.g., #transportation)
    if (location.hash) {
      // Remove the # character
      const id = location.hash.substring(1);
      
      // Get the element with that ID
      const element = servicesRef.current[id];
      
      // If the element exists, scroll to it with a slight delay to ensure DOM is ready
      if (element) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300);
      }
    }
  }, [location.hash]);

  const services = [
    {
      id: 'transportation',
      title: 'Biosolids Transportation',
      description: 'Efficient and compliant transportation of biosolids materials with our specialized fleet of trucks and equipment.',
      benefits: [
        'GPS-tracked fleet for real-time monitoring',
        'Regulatory-compliant hauling services',
        'Flexible scheduling for your operational needs',
        'Trained and certified transportation staff'
      ],
      icon: <Truck />,
      imageUrl: 'https://images.unsplash.com/photo-1568093862696-5f59b671ad89?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dewatering',
      title: 'Biosolids Dewatering Solutions',
      description: 'Mobile and fixed dewatering services to reduce volume and create more manageable biosolids materials.',
      benefits: [
        'Reduced transportation and disposal costs',
        'Mobile units available for remote locations',
        'Customized dewatering solutions for your specific needs',
        'Increased solids content for easier handling'
      ],
      icon: <Droplet />,
      imageUrl: 'https://images.unsplash.com/photo-1586075579223-e2c4a250d18b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'lagoon',
      title: 'Lagoon Cleaning Services',
      description: 'Comprehensive cleaning and management of wastewater treatment lagoons to maintain operational efficiency.',
      benefits: [
        'Removal of accumulated solids and sludge',
        'Increased treatment capacity',
        'Reduced odor issues',
        'Regulatory compliance assistance'
      ],
      icon: <Trash2 />,
      imageUrl: 'https://images.unsplash.com/photo-1593378026483-cf1291fada7f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'permit',
      title: 'Class A & B Permit Management',
      description: 'Expert management of biosolids land application permits, ensuring compliance with all regulatory requirements.',
      benefits: [
        'Comprehensive permit application preparation',
        'Ongoing compliance monitoring',
        'Record-keeping and reporting services',
        'Regulatory agency coordination'
      ],
      icon: <FileText />,
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tank',
      title: 'Digester & Tank Cleaning',
      description: 'Specialized cleaning services for digesters, tanks, and other wastewater treatment infrastructure.',
      benefits: [
        'Improved process efficiency',
        'Extended equipment life',
        'Reduced maintenance costs',
        'Minimal operational disruption'
      ],
      icon: <Cylinder />,
      imageUrl: 'https://images.unsplash.com/photo-1515658323406-25d61c141a6e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'application',
      title: 'Land Application',
      description: 'Environmentally responsible land application of biosolids, returning valuable nutrients to agricultural soils.',
      benefits: [
        'Sustainable recycling of nutrients',
        'Improved soil quality and fertility',
        'Reduced need for chemical fertilizers',
        'Comprehensive site management'
      ],
      icon: <Sprout />,
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="Our Services"
          description="Comprehensive biosolids management solutions for municipalities and industries across North Carolina."
          buttonText="Contact Us"
          buttonLink="mailto:granvillefarmsinc@gmail.com"
          imageUrl="https://miro.medium.com/v2/resize:fit:1358/1*2k_du5dJGlxRv20sUgGgVQ.jpeg"
          overlayOpacity="medium"
          alignment="center" // Explicitly setting centered alignment
        />
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Biosolids Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From transportation and dewatering to land application and regulatory compliance, 
              we provide end-to-end solutions for all your biosolids management needs.
            </p>
          </div>
          
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                ref={el => servicesRef.current[service.id] = el}
              >
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  icon={service.icon}
                  className="animate-fade-in-up"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gf-dark text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Biosolids Management Needs?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Contact our team today to learn how Granville Farms can provide tailored solutions for your biosolids 
              and wastewater challenges. We're ready to help you implement sustainable and compliant management practices.
            </p>
            <div className="mb-8">
              <img 
                src="https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2018/11/2102013-7210.jpg" 
                alt="Professional handshake" 
                className="rounded-lg w-full max-w-2xl mx-auto shadow-lg"
              />
            </div>
            <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
              <a href="mailto:granvillefarmsinc@gmail.com" className="flex items-center gap-2">
                Contact Our Team
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
