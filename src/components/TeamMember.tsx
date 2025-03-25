
import React from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  phone?: string;
  email?: string;
  imageUrl?: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  phone,
  email,
  imageUrl = 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&h=600&q=80',
  className,
}) => {
  return (
    <div className={cn(
      'group overflow-hidden rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
      className
    )}>
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gf-green font-medium mb-4">{role}</p>
        
        <p className="text-gray-600 mb-5">{bio}</p>
        
        <div className="space-y-2">
          {phone && (
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gf-green" />
              <a href={`tel:${phone.replace(/[^\d]/g, '')}`} className="text-gray-700 hover:text-gf-green transition-colors">
                {phone}
              </a>
            </div>
          )}
          
          {email && (
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gf-green" />
              <a href={`mailto:${email}`} className="text-gray-700 hover:text-gf-green transition-colors">
                {email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
