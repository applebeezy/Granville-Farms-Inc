
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  benefits?: string[];
  imageUrl?: string;
  imagePosition?: string;
  link?: string;
  className?: string;
  showLearnMore?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  benefits,
  imageUrl,
  imagePosition,
  link = '/services',
  className,
  showLearnMore = false,
}) => {
  return (
    <div 
      id={id}
      className={cn(
        'group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden',
        className
      )}
    >
      <div className="absolute -right-10 -top-10 w-24 h-24 bg-gf-green/10 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
      
      <div className="relative z-10">
        {icon && (
          <div className="w-14 h-14 flex items-center justify-center bg-gf-green/10 text-gf-green rounded-lg mb-5">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        
        <p className="text-gray-600 mb-5">{description}</p>
        
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2 mb-5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <ArrowRight size={16} className="text-gf-green shrink-0 mt-1" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        {showLearnMore && (
          <a 
            href={link} 
            className="inline-flex items-center text-gf-green hover:text-gf-green/80 font-medium group/link"
          >
            Learn More 
            <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
