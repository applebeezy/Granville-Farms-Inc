
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
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
      role: 'Co-Owner & President',
      bio: 'Andy Smith co-founded Granville Farms Inc. in 1988 and has devoted his life to growing the family business. With over 35 years of experience in biosolids management, Andy leads the company\'s strategic initiatives and oversees operations.',
      phone: '919-690-8000',
      email: 'asmith@granvillefarmsinc.com',
      imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&h=600&q=80'
    },
    {
      name: 'Jason Smith',
      role: 'Co-Owner & Operations Director',
      bio: 'Jason Smith co-founded Granville Farms Inc. alongside his brother Andy. Jason specializes in field operations and project management, ensuring that all services are delivered with the highest standards of quality and efficiency.',
      phone: '252-903-5367',
      email: 'jsmith@granvillefarmsinc.com',
      imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=600&q=80'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <Hero 
          title="Our Leadership Team"
          description="Meet the dedicated professionals behind Granville Farms Inc."
          imageUrl="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=2000&h=800&q=80"
          size="medium"
          overlayOpacity="medium"
        />
      </section>
      
      {/* Team Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md mb-4">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Family-Owned Leadership</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Granville Farms Inc. is a family-owned business led by brothers Andy and Jason Smith. 
                Since founding the company in 1988, they have built a reputation for excellence in biosolids 
                management throughout North Carolina.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  phone={member.phone}
                  email={member.email}
                  imageUrl={member.imageUrl}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                />
              ))}
            </div>
            
            <div className="bg-gf-light rounded-xl p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Our Expert Staff</h3>
              <p className="text-gray-600 mb-6">
                In addition to our leadership team, Granville Farms Inc. employs a skilled workforce of equipment 
                operators, technicians, and administrative staff. Our team includes certified biosolids 
                specialists, CDL drivers, environmental compliance experts, and agricultural professionals.
              </p>
              <p className="text-gray-600 mb-6">
                All Granville Farms employees receive comprehensive training in safety procedures, regulatory 
                compliance, and the latest biosolids management techniques. This commitment to professional 
                development ensures that we provide the highest quality service to our clients.
              </p>
              <div className="flex justify-center">
                <Button asChild variant="outline" className="border-gf-green text-gf-green hover:bg-gf-green hover:text-white">
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
      <section className="py-16 md:py-24 bg-gf-green/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-scale-in">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Our Team</h2>
                <p className="text-gray-600 mb-6">
                  Ready to discuss your biosolids management needs? Our team is here to help. 
                  Contact us today to learn how Granville Farms can provide tailored solutions 
                  for your specific challenges.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-1">Andy Smith - President</h4>
                    <p className="text-gray-600">Phone: (919) 690-8000</p>
                    <p className="text-gray-600">Email: asmith@granvillefarmsinc.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Jason Smith - Operations Director</h4>
                    <p className="text-gray-600">Phone: (252) 903-5367</p>
                    <p className="text-gray-600">Email: jsmith@granvillefarmsinc.com</p>
                  </div>
                </div>
                <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
                  <a href="mailto:info@granvillefarmsinc.com" className="flex items-center gap-2">
                    Send Us a Message
                    <ArrowRight size={16} />
                  </a>
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

export default Team;
