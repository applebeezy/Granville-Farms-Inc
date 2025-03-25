
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAbout = () => setAboutOpen(!aboutOpen);

  // Function to handle navigation with reload effect
  const handleNavigation = (path) => {
    if (location.pathname === path) {
      // Force a reload of the current page
      navigate(0);
    } else {
      // Navigate to the new path
      navigate(path);
    }
  };

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
    isScrolled ? 'bg-white shadow-md py-2' : 'py-4 bg-transparent',
    isOpen ? 'bg-white shadow-md' : ''
  );

  const linkClasses = 'text-gf-dark hover:text-gf-green transition-colors duration-200';
  const activeLinkClasses = 'font-medium text-gf-green';

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigation('/')} 
            className="relative z-10 flex items-center font-bold text-xl md:text-2xl text-gf-dark"
            aria-label="Granville Farms Inc."
          >
            <img 
              src="/lovable-uploads/a612384a-0217-4737-be02-da6373513052.png" 
              alt="Granville Farms Logo" 
              className="h-12 w-auto"
            />
          </button>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gf-dark focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')} 
              className={cn(linkClasses, location.pathname === '/' && activeLinkClasses)}
            >
              Home
            </button>
            
            <div className="relative group">
              <button 
                onClick={toggleServices}
                className={cn(
                  "flex items-center gap-1", 
                  linkClasses,
                  location.pathname.includes('/services') && activeLinkClasses
                )}
              >
                Services
                <ChevronDown size={16} className={cn("transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>
              
              <div className="absolute left-0 top-full mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-50">
                <div className="py-1">
                  <Link to="/services" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    All Services
                  </Link>
                  <Link to="/services#transportation" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Biosolids Transportation
                  </Link>
                  <Link to="/services#dewatering" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Biosolids Dewatering Solutions
                  </Link>
                  <Link to="/services#lagoon" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Lagoon Cleaning Services
                  </Link>
                  <Link to="/services#permit" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Class A & B Permit Management
                  </Link>
                  <Link to="/services#tank" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Digester & Tank Cleaning
                  </Link>
                  <Link to="/services#application" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Land Application
                  </Link>
                  <Link to="/services#drainage" className="block px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Farm Drainage
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                onClick={toggleAbout}
                className={cn(
                  "flex items-center gap-1", 
                  linkClasses,
                  (location.pathname.includes('/about') || 
                   location.pathname.includes('/team') || 
                   location.pathname.includes('/projects')) && activeLinkClasses
                )}
              >
                About Us
                <ChevronDown size={16} className={cn("transition-transform duration-200", aboutOpen && "rotate-180")} />
              </button>
              
              <div className="absolute left-0 top-full mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-50">
                <div className="py-1">
                  <button onClick={() => handleNavigation('/about')} className="block w-full text-left px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    About Us
                  </button>
                  <button onClick={() => handleNavigation('/team')} className="block w-full text-left px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Our Team
                  </button>
                  <button onClick={() => handleNavigation('/projects')} className="block w-full text-left px-4 py-2 text-sm text-gf-dark hover:bg-gf-gray">
                    Past Projects
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out", 
            isOpen ? "max-h-[500px] mt-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col space-y-4 pb-6 animate-fade-in">
            <button
              onClick={() => handleNavigation('/')} 
              className={cn(
                "py-2 px-2 text-left text-gf-dark hover:text-gf-green",
                location.pathname === '/' && "font-medium text-gf-green"
              )}
            >
              Home
            </button>
            
            <div>
              <button 
                onClick={toggleServices}
                className={cn(
                  "w-full text-left flex items-center justify-between py-2 px-2",
                  location.pathname.includes('/services') ? "font-medium text-gf-green" : "text-gf-dark"
                )}
              >
                <span>Services</span>
                <ChevronDown size={16} className={cn("transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-200 pl-4 space-y-2",
                servicesOpen ? "max-h-96 mt-2" : "max-h-0"
              )}>
                <Link to="/services" className="block py-1 text-gf-dark hover:text-gf-green">
                  All Services
                </Link>
                <Link to="/services#transportation" className="block py-1 text-gf-dark hover:text-gf-green">
                  Biosolids Transportation
                </Link>
                <Link to="/services#dewatering" className="block py-1 text-gf-dark hover:text-gf-green">
                  Biosolids Dewatering Solutions
                </Link>
                <Link to="/services#lagoon" className="block py-1 text-gf-dark hover:text-gf-green">
                  Lagoon Cleaning Services
                </Link>
                <Link to="/services#permit" className="block py-1 text-gf-dark hover:text-gf-green">
                  Class A & B Permit Management
                </Link>
                <Link to="/services#tank" className="block py-1 text-gf-dark hover:text-gf-green">
                  Digester & Tank Cleaning
                </Link>
                <Link to="/services#application" className="block py-1 text-gf-dark hover:text-gf-green">
                  Land Application
                </Link>
                <Link to="/services#drainage" className="block py-1 text-gf-dark hover:text-gf-green">
                  Farm Drainage
                </Link>
              </div>
            </div>
            
            <div>
              <button 
                onClick={toggleAbout}
                className={cn(
                  "w-full text-left flex items-center justify-between py-2 px-2",
                  (location.pathname.includes('/about') || 
                   location.pathname.includes('/team') || 
                   location.pathname.includes('/projects')) ? 
                  "font-medium text-gf-green" : "text-gf-dark"
                )}
              >
                <span>About Us</span>
                <ChevronDown size={16} className={cn("transition-transform duration-200", aboutOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-200 pl-4 space-y-2",
                aboutOpen ? "max-h-40 mt-2" : "max-h-0"
              )}>
                <button onClick={() => handleNavigation('/about')} className="block w-full text-left py-1 text-gf-dark hover:text-gf-green">
                  About Us
                </button>
                <button onClick={() => handleNavigation('/team')} className="block w-full text-left py-1 text-gf-dark hover:text-gf-green">
                  Our Team
                </button>
                <button onClick={() => handleNavigation('/projects')} className="block w-full text-left py-1 text-gf-dark hover:text-gf-green">
                  Past Projects
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
