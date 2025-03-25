
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  client,
  description,
  imageUrl = 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80',
  className,
}) => {
  return (
    <div className={cn(
      'group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1',
      className
    )}>
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block text-xs font-medium text-gf-green mb-2">{client}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
