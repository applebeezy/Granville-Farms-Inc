
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      title: 'City of Raleigh Biosolids Management',
      client: 'City of Raleigh',
      description: 'Managing 20,000 tons of Class B biosolids per year for the City of Raleigh, ensuring compliant and sustainable handling of municipal waste.',
      imageUrl: 'https://www.usatipps.de/wp-content/uploads/2021/05/raleigh-north-carolina.jpg'
    },
    {
      title: 'Rocky Mount Land Application',
      client: 'City of Rocky Mount',
      description: 'Land application of 18 million gallons of Class B liquid biosolids annually, converting waste into valuable soil amendments.',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Consolidated Fertilizer Management',
      client: 'Consolidated Fertilizer Inc.',
      description: 'Land application of 20 million gallons of Class A liquid biosolids per year, supporting sustainable agriculture practices.',
      imageUrl: 'https://images.pexels.com/photos/6216870/pexels-photo-6216870.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
      title: 'Town of Cary Biosolids Marketing',
      client: 'Town of Cary',
      description: 'Marketing and management of Class A biosolid pellets, creating valuable products from waste materials.',
      imageUrl: 'https://cdn.homeandmoney.com/wp-content/uploads/2023/02/17164547/cary-nc-shutterstock_1491350357-scaled.jpg'
    }
  ];

  const additionalProjects = [
    {
      title: 'City of Wilson Biosolids Management',
      client: 'City of Wilson',
      description: "Comprehensive biosolids management services for the City of Wilson, including transportation and land application solutions.",
      imageUrl: "https://discoverwilson.com/wp-content/uploads/2021/01/home-masthead1-1800x863-c-default.jpg"
    },
    {
      title: 'Town of Henderson Wastewater Treatment',
      client: 'Town of Henderson',
      description: "Wastewater treatment facilities residual management services for the Town of Henderson.",
      imageUrl: "https://www.gardendestinations.com/wp-content/uploads/2019/07/Downtown-00249-web-Sam-Dean-1170x603.jpg"
    },
    {
      title: 'Town of Clinton Class B Biosolid Management',
      client: 'Town of Clinton',
      description: 'Complete Class B biosolid management solutions, ensuring regulatory compliance and environmental sustainability.',
      imageUrl: "https://cityofclintonnc.com/ImageRepository/Document?documentID=40"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="Our Past Projects"
          description="Explore some of our successful biosolids management projects across North Carolina."
          buttonText="Contact Us"
          buttonLink="mailto:granvillefarmsinc@gmail.com"
          imageUrl="https://i0.wp.com/enbiorganic.com/wp-content/uploads/2021/12/shutterstock_2039933306-2.jpg?fit=600%2C373&ssl=1"
          overlayOpacity="dark" // Using darker overlay to improve readability
          alignment="center" // Explicitly setting centered alignment
        />
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Featured Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some of our recent projects that showcase our expertise in biosolids management across North Carolina.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                client={project.client}
                description={project.description}
                imageUrl={project.imageUrl}
                className={`animate-fade-in-up delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-full animate-fade-in-up text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Case Study</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">City of Raleigh Partnership</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our long-standing partnership with the City of Raleigh demonstrates our commitment to sustainable biosolids 
                management. For over a decade, we have helped Raleigh transform its wastewater treatment byproducts into 
                valuable agricultural resources.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Project Highlights:</h3>
              <ul className="space-y-4 mb-8 max-w-2xl mx-auto text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-gf-green shrink-0 mt-1" />
                  <span className="text-gray-700">Management of 20,000 tons of Class B biosolids annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-gf-green shrink-0 mt-1" />
                  <span className="text-gray-700">Transportation and land application services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-gf-green shrink-0 mt-1" />
                  <span className="text-gray-700">Regulatory compliance and permit management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-gf-green shrink-0 mt-1" />
                  <span className="text-gray-700">Comprehensive record-keeping and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-gf-green shrink-0 mt-1" />
                  <span className="text-gray-700">Environmental monitoring and soil testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">More Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore more of our biosolids management projects serving communities across North Carolina.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {additionalProjects.map((project, index) => (
              <div key={project.title} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gf-green mb-2">{project.client}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
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

export default Projects;
