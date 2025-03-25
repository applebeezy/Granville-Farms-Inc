
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Andy Smith',
      role: 'Co-Owner & CEO',
      bio: 'Andy Smith co-founded Granville Farms Inc. in 1988 and has led the company with a commitment to sustainable biosolids management practices. His expertise in agricultural applications and regulatory compliance has established the company as a leader in the industry.',
      phone: '(919) 690-8000',
      email: 'asmith@granvillefarmsinc.com'
    },
    {
      name: 'Jason Smith',
      role: 'Co-Owner & COO',
      bio: 'Jason Smith has worked alongside his brother since the founding of Granville Farms Inc. His focus on operational excellence and innovative solutions has helped the company develop industry-leading biosolids management techniques and expand services throughout North Carolina.',
      phone: '(252) 903-5367',
      email: 'jsmith@granvillefarmsinc.com'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="Meet Our Leadership Team"
          description="Family-owned and operated since 1988, Granville Farms Inc. is led by brothers who have dedicated their careers to sustainable biosolids management."
          buttonText="Contact Us"
          buttonLink="#team"
          imageUrl="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=2000&h=1000&q=80"
          overlayOpacity="medium"
        />
      </section>
      
      {/* Team Members */}
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dedicated Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over three decades of experience in biosolids management, the Smith brothers have built a company 
              focused on environmental stewardship and exceptional client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                phone={member.phone}
                email={member.email}
                className={`animate-fade-in-up delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 md:py-24 bg-gf-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our company culture and business practices are guided by these core principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in-up delay-100">
              <div className="w-14 h-14 flex items-center justify-center bg-gf-green/10 text-gf-green rounded-lg mb-5">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Responsibility</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices that protect our environment and conserve natural resources for future generations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in-up delay-200">
              <div className="w-14 h-14 flex items-center justify-center bg-gf-green/10 text-gf-green rounded-lg mb-5">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of compliance with all local, state, and federal regulations governing biosolids management.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in-up delay-300">
              <div className="w-14 h-14 flex items-center justify-center bg-gf-green/10 text-gf-green rounded-lg mb-5">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients to understand their unique needs and develop tailored solutions that meet their specific goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gf-dark text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Join Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us for Sustainable Biosolids Management</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Looking for innovative biosolids management solutions? Our team is ready to help you implement 
              sustainable practices that comply with regulations and protect our environment.
            </p>
            <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
              <Link to="/projects" className="flex items-center gap-2">
                View Our Projects
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

export default Team;
