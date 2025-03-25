
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
      imageUrl: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=800&q=80'
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
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Town of Cary Biosolids Marketing',
      client: 'Town of Cary',
      description: 'Marketing and management of Class A biosolid pellets, creating valuable products from waste materials.',
      imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const additionalProjects = [
    {
      title: 'Durham Water Reclamation Facility',
      client: 'City of Durham',
      description: 'Providing transportation and land application services for the Durham Water Reclamation Facility's biosolids program.',
      imageUrl: 'https://images.unsplash.com/photo-1555268368-4719f3da3e76?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Greensboro Dewatering Project',
      client: 'City of Greensboro',
      description: 'Implementation of mobile dewatering solutions for the City of Greensboro's wastewater treatment facilities.',
      imageUrl: 'https://images.unsplash.com/photo-1574169408758-fca8a8c99cdd?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Wilson County Lagoon Cleaning',
      client: 'Wilson County',
      description: 'Comprehensive cleaning and maintenance of wastewater treatment lagoons for Wilson County utilities.',
      imageUrl: 'https://images.unsplash.com/photo-1621274147744-cfb5032179f4?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Harnett County Agricultural Applications',
      client: 'Harnett County',
      description: 'Land application of biosolids to enhance agricultural soil fertility across Harnett County farmlands.',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
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
          buttonLink="/team"
          imageUrl="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2000&h=1000&q=80"
          overlayOpacity="strong"
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
            <div className="lg:w-1/2 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Case Study</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">City of Raleigh Partnership</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our long-standing partnership with the City of Raleigh demonstrates our commitment to sustainable biosolids 
                management. For over a decade, we have helped Raleigh transform its wastewater treatment byproducts into 
                valuable agricultural resources.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Project Highlights:</h3>
              <ul className="space-y-4 mb-8">
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
            <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1594642328095-4a873acceda9?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="City of Raleigh Biosolids Management" 
                className="h-full w-full object-cover"
              />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {additionalProjects.map((project, index) => (
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

export default Projects;
