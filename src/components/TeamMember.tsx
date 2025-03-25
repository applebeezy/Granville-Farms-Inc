
import React from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  phone?: string;
  email?: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  phone,
  email,
  className,
}) => {
  return (
    <div className={cn(
      'group overflow-hidden rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6',
      className
    )}>
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
  );
};

export default TeamMember;
