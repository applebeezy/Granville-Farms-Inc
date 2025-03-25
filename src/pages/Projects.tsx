
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: 'Class B Biosolids Management',
      client: 'City of Raleigh',
      description: 'Managing 20,000 tons of Class B biosolids product per year, including transportation, land application, and regulatory compliance.',
      imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Liquid Biosolids Land Application',
      client: 'City of Rocky Mount',
      description: 'Land application of 18 million gallons of Class B liquid biosolids per year, providing complete management services.',
      imageUrl: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Class A Liquid Management',
      client: 'Consolidated Fertilizer Inc.',
      description: 'Land application of 20 million gallons of Class A liquid biosolids per year, with comprehensive management services.',
      imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Biosolid Pellets Marketing & Management',
      client: 'Town of Cary',
      description: 'Marketing and management of Class A biosolid pellets, providing sustainable solutions for biosolids utilization.',
      imageUrl: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const additionalProjects = [
    {
      title: 'Lagoon Cleaning & Desludging',
      client: 'Multiple Municipal Clients',
      description: 'Comprehensive lagoon cleaning services for multiple municipal wastewater treatment facilities across North Carolina.',
      imageUrl: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Dewatering & Biosolids Transportation',
      client: 'Regional Water Authorities',
      description: 'Mobile dewatering services and biosolids transportation for regional water authorities in central North Carolina.',
      imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="Our Past Projects"
          description="A showcase of our biosolids management experience and expertise."
          imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&h=800&q=80"
          size="medium"
          overlayOpacity="medium"
        />
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore some of our recent biosolids management projects across North Carolina. 
                These case studies highlight our expertise and commitment to providing effective, 
                environmentally responsible solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  client={project.client}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Project Spotlight</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">City of Raleigh Partnership</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden animate-scale-in">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80" 
                    alt="City of Raleigh Project" 
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-gf-green font-semibold">City of Raleigh</div>
                  <h3 className="mt-1 text-2xl font-semibold leading-tight">Class B Biosolids Management Program</h3>
                  <div className="mt-4 text-gray-600">
                    <p className="mb-4">
                      Granville Farms has been providing comprehensive biosolids management services 
                      to the City of Raleigh since 2010. Our partnership includes the handling of 
                      approximately 20,000 tons of Class B biosolids annually.
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-2">Services Provided:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Transportation from treatment facility to application sites</li>
                      <li>Regulatory compliance and permitting</li>
                      <li>Land application management</li>
                      <li>Site monitoring and reporting</li>
                      <li>Stakeholder communication</li>
                    </ul>
                    
                    <p className="mb-4">
                      This long-term partnership demonstrates our ability to consistently deliver 
                      high-quality biosolids management solutions at a municipal scale, maintaining 
                      full regulatory compliance while providing cost-effective services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">More Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Success Stories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {additionalProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  client={project.client}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                />
              ))}
            </div>
            
            <div className="bg-gf-green/10 rounded-xl p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Commitment to Quality</h3>
              <p className="text-gray-600 mb-4 text-center">
                Every project at Granville Farms is approached with our core values of environmental 
                stewardship, regulatory compliance, and commitment to excellence. We take pride in 
                our ability to deliver consistent, high-quality solutions to our clients' biosolids 
                management challenges.
              </p>
              <p className="text-gray-600 mb-6 text-center">
                Whether managing 20 million gallons of liquid biosolids or providing specialized 
                services like lagoon cleaning or dewatering, our team brings decades of experience 
                and expertise to every project.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
                  <Link to="/services" className="flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-gf-dark text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact our team today to discuss your biosolids management needs and discover how 
              Granville Farms can provide tailored solutions for your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
                <a href="tel:+19196908000" className="flex items-center gap-2">
                  Call Us: (919) 690-8000
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="mailto:info@granvillefarmsinc.com" className="flex items-center gap-2">
                  Email Us
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
